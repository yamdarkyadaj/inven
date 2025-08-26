"use client"

import { useState, useEffect } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Quote,
  Plus,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  ShoppingCart,
  Printer,
  RefreshCw,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getWareHouseId } from "@/hooks/get-werehouseId"
import { Loading } from "@/components/loading"
import { formatCurrency } from "@/lib/utils"
import { useSession } from "next-auth/react"
import axios from "axios"

interface Quotation {
  id: string
  quotationNo: string
  selectedCustomer: {
    id: string
    name: string
    email: string
    phone: string
  }
  grandTotal: number
  status: string
  validUntil: string | null
  createdAt: string
  quotationItems: Array<{
    id: string
    productName: string
    quantity: number
    selectedPrice: number
    total: number
  }>
}

export default function QuotationsListPage() {
  const [quotations, setQuotations] = useState<Quotation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [endPoint, setEndPoint] = useState("")
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [quotationToDelete, setQuotationToDelete] = useState<string | null>(null)
  const [convertDialogOpen, setConvertDialogOpen] = useState(false)
  const [quotationToConvert, setQuotationToConvert] = useState<Quotation | null>(null)

  const { data: session } = useSession()
  const router = useRouter()
  const warehouseId = getWareHouseId()

  useEffect(() => {
    setEndPoint(`/warehouse/${warehouseId}/${session?.user?.role}`)
  }, [session, warehouseId])

  const fetchQuotations = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log("Fetching quotations with warehouseId:", warehouseId)
      
      const params = new URLSearchParams({
        warehouseId,
        page: currentPage.toString(),
        limit: "10",
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter })
      })

      console.log("API URL:", `/api/quotation/list?${params}`)
      
      const response = await axios.get(`/api/quotation/list?${params}`)
      console.log("API Response:", response.data)
      
      setQuotations(response.data.quotations || [])
      setTotalPages(response.data.pagination?.totalPages || 1)
    } catch (error) {
      console.error("Error fetching quotations:", error)
      console.error("Error details:", error.response?.data)
      setError(`Failed to fetch quotations: ${error.response?.data || error.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (warehouseId) {
      fetchQuotations()
    }
  }, [warehouseId, currentPage, searchTerm, statusFilter])

  const handleDelete = async (quotationNo: string) => {
    try {
      await axios.delete(`/api/quotation/delete?quotationNo=${quotationNo}`)
      fetchQuotations()
      setDeleteDialogOpen(false)
      setQuotationToDelete(null)
    } catch (error) {
      console.error("Error deleting quotation:", error)
      alert("Error deleting quotation")
    }
  }

  const handleConvertToSale = async (quotation: Quotation) => {
    try {
      const response = await axios.post("/api/quotation/convert", {
        quotationNo: quotation.quotationNo,
        paymentMethods: [],
        amountPaid: quotation.grandTotal,
        balance: 0
      })

      if (response.status === 201) {
        alert(`Quotation converted to sale successfully! Invoice: ${response.data.invoiceNo}`)
        fetchQuotations()
        setConvertDialogOpen(false)
        setQuotationToConvert(null)
        router.push(`${endPoint}/sales/${response.data.invoiceNo}`)
      }
    } catch (error) {
      console.error("Error converting quotation:", error)
      alert("Error converting quotation to sale")
    }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { label: "Pending", variant: "secondary" as const },
      accepted: { label: "Accepted", variant: "default" as const },
      rejected: { label: "Rejected", variant: "destructive" as const },
      converted: { label: "Converted", variant: "outline" as const },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const isExpired = (validUntil: string | null) => {
    if (!validUntil) return false
    return new Date(validUntil) < new Date()
  }

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="p-6 space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-red-600">
              <h3 className="text-lg font-semibold mb-2">Error Loading Quotations</h3>
              <p className="mb-4">{error}</p>
              <div className="flex gap-2 justify-center">
                <Button onClick={fetchQuotations}>Try Again</Button>
                <Button 
                  variant="outline"
                  onClick={async () => {
                    try {
                      const response = await axios.get("/api/test-quotation");
                      console.log("Test API response:", response.data);
                      alert(`Test API works! Found ${response.data.quotationsCount} quotations`);
                    } catch (error) {
                      console.error("Test API error:", error);
                      alert("Test API failed - check console");
                    }
                  }}
                >
                  Test API
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href={`${endPoint}/dashboard`}>Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Quotations</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Quote className="h-5 w-5" />
                Quotations
              </CardTitle>
              <CardDescription>
                Manage your sales quotations
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={async () => {
                  try {
                    const response = await axios.get("/api/test-quotation");
                    console.log("Test API response:", response.data);
                    alert(`Test API works! Found ${response.data.quotationsCount} quotations`);
                  } catch (error) {
                    console.error("Test API error:", error);
                    alert("Test API failed - check console");
                  }
                }} 
                variant="outline" 
                size="sm"
              >
                Test API
              </Button>
              <Button 
                onClick={async () => {
                  try {
                    const response = await axios.post("/api/test-quotation", { warehouseId });
                    console.log("Test create response:", response.data);
                    alert("Test quotation created! Refreshing list...");
                    fetchQuotations();
                  } catch (error) {
                    console.error("Test create error:", error);
                    alert("Test create failed - check console");
                  }
                }} 
                variant="outline" 
                size="sm"
              >
                Create Test
              </Button>
              <Button onClick={fetchQuotations} variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Link href={`${endPoint}/quotations/add`}>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Quotation
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search quotations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="converted">Converted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quotation No</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Valid Until</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quotations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      <div className="text-muted-foreground">
                        <Quote className="h-8 w-8 mx-auto mb-2 opacity-50" />
                        <p>No quotations found</p>
                        <Link href={`${endPoint}/quotations/add`}>
                          <Button className="mt-2" size="sm">
                            Create your first quotation
                          </Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  quotations.map((quotation) => (
                    <TableRow key={quotation.id}>
                      <TableCell className="font-medium">
                        {quotation.quotationNo}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">
                            {quotation.selectedCustomer?.name || "Unknown Customer"}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {quotation.selectedCustomer?.phone || "No phone"}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {quotation.quotationItems?.length || 0} items
                        </Badge>
                      </TableCell>
                      <TableCell>{formatCurrency(quotation.grandTotal)}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {getStatusBadge(quotation.status)}
                          {isExpired(quotation.validUntil) && (
                            <Badge variant="destructive" className="text-xs">
                              Expired
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {quotation.validUntil
                          ? new Date(quotation.validUntil).toLocaleDateString()
                          : "No expiry"
                        }
                      </TableCell>
                      <TableCell>
                        {new Date(quotation.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              Actions
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`${endPoint}/quotations/${quotation.quotationNo}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View
                              </Link>
                            </DropdownMenuItem>
                            {quotation.status !== "converted" && (
                              <>
                                <DropdownMenuItem asChild>
                                  <Link href={`${endPoint}/quotations/${quotation.quotationNo}/edit`}>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => {
                                    setQuotationToConvert(quotation)
                                    setConvertDialogOpen(true)
                                  }}
                                >
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Convert to Sale
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem
                              onClick={() => {
                                // Open quotation in new tab for printing
                                window.open(`${endPoint}/quotations/${quotation.quotationNo}`, '_blank')
                              }}
                            >
                              <Printer className="h-4 w-4 mr-2" />
                              Print
                            </DropdownMenuItem>
                            {quotation.status !== "converted" && (
                              <DropdownMenuItem
                                onClick={() => {
                                  setQuotationToDelete(quotation.quotationNo)
                                  setDeleteDialogOpen(true)
                                }}
                                className="text-red-600"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Quotation</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this quotation? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => quotationToDelete && handleDelete(quotationToDelete)}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Convert to Sale Dialog */}
      <Dialog open={convertDialogOpen} onOpenChange={setConvertDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Convert to Sale</DialogTitle>
            <DialogDescription>
              Are you sure you want to convert this quotation to a sale? This will create a new sales invoice.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setConvertDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => quotationToConvert && handleConvertToSale(quotationToConvert)}
            >
              Convert to Sale
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}