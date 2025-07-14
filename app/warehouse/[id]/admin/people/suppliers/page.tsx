"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
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
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Truck,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Building2,
} from "lucide-react"

// Sample suppliers data
const suppliersData = [
  {
    id: "SUPP-001",
    name: "ABC Electronics Supply",
    contactPerson: "John Smith",
    email: "john@abcelectronics.com",
    phone: "+1234567890",
    address: "123 Industrial Blvd, Tech City, TC 12345",
    paymentTerms: "net-30",
    totalPurchases: 125750.0,
    lastPurchase: "2024-01-15",
    status: "active",
    category: "Electronics",
  },
  {
    id: "SUPP-002",
    name: "Global Parts Inc",
    contactPerson: "Sarah Johnson",
    email: "sarah@globalparts.com",
    phone: "+1234567891",
    address: "456 Commerce St, Business Park, BP 67890",
    paymentTerms: "net-15",
    totalPurchases: 89300.0,
    lastPurchase: "2024-01-14",
    status: "active",
    category: "Parts",
  },
  {
    id: "SUPP-003",
    name: "Tech Solutions Ltd",
    contactPerson: "Mike Wilson",
    email: "mike@techsolutions.com",
    phone: "+1234567892",
    address: "789 Innovation Ave, Silicon Valley, SV 11111",
    paymentTerms: "net-60",
    totalPurchases: 67800.0,
    lastPurchase: "2024-01-13",
    status: "active",
    category: "Software",
  },
  {
    id: "SUPP-004",
    name: "Office Supplies Co",
    contactPerson: "Lisa Brown",
    email: "lisa@officesupplies.com",
    phone: "+1234567893",
    address: "321 Office Park Dr, Downtown, DT 22222",
    paymentTerms: "cash",
    totalPurchases: 15600.0,
    lastPurchase: "2024-01-10",
    status: "inactive",
    category: "Office",
  },
]

export default function SuppliersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredSuppliers = suppliersData.filter((supplier) => {
    const matchesSearch =
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || supplier.status === statusFilter
    const matchesCategory = categoryFilter === "all" || supplier.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="default" className="bg-green-600">
            Active
          </Badge>
        )
      case "inactive":
        return <Badge variant="destructive">Inactive</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPaymentTermsBadge = (terms: string) => {
    switch (terms) {
      case "cash":
        return <Badge variant="secondary">Cash</Badge>
      case "net-15":
        return <Badge variant="outline">Net 15</Badge>
      case "net-30":
        return <Badge variant="outline">Net 30</Badge>
      case "net-60":
        return <Badge variant="outline">Net 60</Badge>
      default:
        return <Badge variant="outline">{terms}</Badge>
    }
  }

  const totalSuppliers = suppliersData.length
  const activeSuppliers = suppliersData.filter((s) => s.status === "active").length
  const totalPurchaseValue = suppliersData.reduce((sum, s) => sum + s.totalPurchases, 0)

  return (
    <>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/people">People</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Suppliers</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-orange-600" />
              <h1 className="text-2xl font-semibold text-orange-600">Suppliers</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button asChild>
                <a href="/people/suppliers/add">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Supplier
                </a>
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Suppliers</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalSuppliers}</div>
                <p className="text-xs text-muted-foreground">{activeSuppliers} active suppliers</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeSuppliers}</div>
                <p className="text-xs text-muted-foreground">
                  {((activeSuppliers / totalSuppliers) * 100).toFixed(1)}% of total
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Purchase Value</CardTitle>
                <div className="text-xs text-green-600 font-medium">$</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalPurchaseValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Across all suppliers</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Search & Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 md:flex-row md:items-end">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="search">Search Suppliers</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search by name, contact, email, or category..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Parts">Parts</SelectItem>
                      <SelectItem value="Software">Software</SelectItem>
                      <SelectItem value="Office">Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Suppliers Table */}
          <Card>
            <CardHeader>
              <CardTitle>Suppliers List</CardTitle>
              <CardDescription>
                Showing {filteredSuppliers.length} of {suppliersData.length} suppliers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Payment Terms</TableHead>
                    <TableHead>Total Purchases</TableHead>
                    <TableHead>Last Purchase</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers.map((supplier) => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell>{supplier.contactPerson}</TableCell>
                      <TableCell>{supplier.email}</TableCell>
                      <TableCell>{supplier.phone}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{supplier.category}</Badge>
                      </TableCell>
                      <TableCell>{getPaymentTermsBadge(supplier.paymentTerms)}</TableCell>
                      <TableCell>${supplier.totalPurchases.toFixed(2)}</TableCell>
                      <TableCell>{new Date(supplier.lastPurchase).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(supplier.status)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Supplier
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Supplier
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </>
  )
}
