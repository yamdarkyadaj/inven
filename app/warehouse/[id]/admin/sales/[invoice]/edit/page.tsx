"use client"

import { useState, useEffect } from "react"
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Edit, Save, ArrowLeft, Calculator, Printer, CheckCircle, X, AlertTriangle, User } from "lucide-react"
import { useRouter, useParams } from "next/navigation"
import { usePrintReceipt } from "@/hooks/use-print-receipt"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import fetchWareHouseData from "@/hooks/fetch-invidual-data"
import { Loading } from "@/components/loading"

// Sample sale data (in real app, this would come from API)
const getSaleData = () => {
  const salesData = {
      id: "SALE-002",
      invoiceNo: "INV-000002",
      date: "2024-01-15",
      time: "11:45 AM",
      customer: {
        id: "CUST-002",
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "+1234567891",
        type: "wholesale",
      },
      items: [
        {
          id: "ITEM-003",
          productId: "550e8400-e29b-41d4-a716-446655440003",
          productName: "MacBook Air M3",
          productBarcode: "123456789014",
          quantity: 3,
          price: 1199.0,
          total: 3597.0,
          priceType: "wholesale",
          unit: "PCS",
        },
      ],
      subtotal: 3597.0,
      taxRate: 10,
      taxAmount: 359.7,
      total: 3956.7,
      amountPaid: 2000.0,
      balance: 1956.7,
      paymentMethod: "cash",
      status: "partial",
      notes: "Customer will pay remaining balance next week",
      cashier: "Admin User",
      createdAt: "2024-01-15T11:45:00Z",
    
  }

  return salesData
}

export default function EditSalePage() {
  const params = useParams()
  const router = useRouter()
  const { printReceipt } = usePrintReceipt()

  const [saleData, setSaleData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [newInvoiceData, setNewInvoiceData] = useState<any>(null)

  // Form states
  const [paymentMethod, setPaymentMethod] = useState("")
  const [amountPaid, setAmountPaid] = useState("")
  const [notes, setNotes] = useState("")
  const [taxRate, setTaxRate] = useState(0)


  const invoiceNo = params.invoice

  const {data,loading:load,error} = fetchWareHouseData("/api/sale/edit/list",{invoiceNo})

  

  useEffect(() => {
    const fetchSaleData = async () => {
      try {
        // In real app, this would be an API call
        const data = getSaleData()
        if (data) {
          setSaleData(data)
          setPaymentMethod(data.paymentMethod)
          setAmountPaid(data.amountPaid.toString())
          setNotes(data.notes)
          setTaxRate(data.taxRate)
        }
      } catch (error) {
        console.error("Error fetching sale data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSaleData()
  }, [params.id])

  if(!data) return <Loading/>

  if (loading) {
    return (
      <>
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
          </div>
        </>
    )
  }

  if (!saleData) {
    return (
      <>
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Sale Not Found</h2>
              <p className="text-muted-foreground mb-4">The requested sale could not be found.</p>
              <Button onClick={() => router.push("/sales/list")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Sales
              </Button>
            </div>
          </div>
       </>
    )
  }

  

  const currentAmountPaid = Number.parseFloat(amountPaid) || 0
  const newBalance = saleData.total - currentAmountPaid
  const hasChanges =
    currentAmountPaid !== saleData.amountPaid ||
    paymentMethod !== saleData.paymentMethod ||
    notes !== saleData.notes ||
    taxRate !== saleData.taxRate

  const handleSaveChanges = async () => {
    if (!hasChanges) {
      alert("No changes to save")
      return
    }

    setIsSubmitting(true)

    try {
      const currentDate = new Date()
      const newInvoiceNo = `INV-${String(Math.floor(Math.random() * 1000000)).padStart(6, "0")}`

      // Create new sale data with updated information
      const updatedSaleData = {
        ...saleData,
        id: `SALE-${Date.now()}`, // New sale ID
        invoiceNo: newInvoiceNo, // New invoice number
        date: currentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
        amountPaid: currentAmountPaid,
        balance: newBalance,
        paymentMethod,
        notes,
        taxRate,
        taxAmount: (saleData.subtotal * taxRate) / 100,
        total: saleData.subtotal + (saleData.subtotal * taxRate) / 100,
        status: newBalance <= 0 ? "completed" : newBalance < saleData.total ? "partial" : "pending",
        updatedAt: currentDate.toISOString(),
        originalSaleId: saleData.id, // Reference to original sale
        isUpdate: true,
      }

      // Simulate API call to save updated sale
      

      // In real app, you would make API calls here:
      // 1. Create new sale record
      // 2. Update original sale status to "updated"
      // 3. Link the sales together

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setNewInvoiceData(updatedSaleData)
      setShowSuccessDialog(true)
    } catch (error) {
      console.error("Error saving changes:", error)
      alert("Error saving changes. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrintReceipt = (paperWidth: "57mm" | "80mm") => {
    if (!newInvoiceData) return

    const receiptData = {
      invoiceNo: newInvoiceData.invoiceNo,
      date: newInvoiceData.date,
      time: newInvoiceData.time,
      customer: newInvoiceData.customer.name,
      cashier: newInvoiceData.cashier,
      items: newInvoiceData.items.map((item: any) => ({
        name: item.productName,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
      subtotal: newInvoiceData.subtotal,
      discount: 0,
      tax: newInvoiceData.taxAmount,
      total: newInvoiceData.total,
      paid: newInvoiceData.amountPaid,
      balance: newInvoiceData.balance,
      paymentMethod: newInvoiceData.paymentMethod,
    }

    printReceipt(receiptData, paperWidth)
  }

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false)
    setNewInvoiceData(null)
    router.push("/sales/list")
  }

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
                  <BreadcrumbLink href="/sales/list">Sales</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Edit Sale</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Edit className="h-6 w-6 text-blue-600" />
              <h1 className="text-3xl font-bold text-blue-600">Edit Sale</h1>
              <Badge variant="outline">{saleData.invoiceNo}</Badge>
            </div>
            <Button variant="outline" onClick={() => router.push("/sales/list")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sales
            </Button>
          </div>

          {/* Warning for generating new invoice */}
          {hasChanges && (
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-yellow-800">
                  <AlertTriangle className="h-5 w-5" />
                  <div>
                    <p className="font-medium">New Invoice Will Be Generated</p>
                    <p className="text-sm">
                      Saving changes will create a new invoice number and sales record while keeping the original for
                      audit purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Sale Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Original Sale Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Original Sale Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Invoice Number</Label>
                      <p className="font-medium">{saleData.invoiceNo}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Date & Time</Label>
                      <p className="font-medium">
                        {saleData.date} at {saleData.time}
                      </p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Customer</Label>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{saleData.customer.name}</p>
                          <Badge variant="outline" className="text-xs">
                            {saleData.customer.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Status</Label>
                      <div>
                        <Badge
                          className={
                            saleData.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : saleData.status === "partial"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {saleData.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sale Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Items ({saleData.items.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Price Type</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead>Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {saleData.items.map((item: any) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{item.productName}</div>
                              <div className="text-sm text-muted-foreground">{item.productBarcode}</div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge variant={item.priceType === "wholesale" ? "default" : "secondary"}>
                              {item.priceType}
                            </Badge>
                          </TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            {item.quantity} {item.unit}
                          </TableCell>
                          <TableCell className="font-medium">${item.total.toFixed(2)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Payment & Summary */}
            <div className="space-y-6">
              {/* Sale Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${saleData.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax ({taxRate}%):</span>
                      <span>${((saleData.subtotal * taxRate) / 100).toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${(saleData.subtotal + (saleData.subtotal * taxRate) / 100).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                    <Input
                      id="tax-rate"
                      type="number"
                      min="0"
                      max="100"
                      value={taxRate}
                      onChange={(e) => setTaxRate(Number.parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                        <SelectItem value="check">Check</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount-paid">Amount Paid</Label>
                    <Input
                      id="amount-paid"
                      type="number"
                      placeholder="0.00"
                      value={amountPaid}
                      onChange={(e) => setAmountPaid(e.target.value)}
                    />
                  </div>

                  {/* Payment Summary */}
                  <div className="p-3 bg-muted rounded-lg space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Original Paid:</span>
                      <span className="text-green-600">${saleData.amountPaid.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Current Paid:</span>
                      <span className="text-green-600">${currentAmountPaid.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>New Balance:</span>
                      <span className={newBalance > 0 ? "text-red-600" : "text-green-600"}>
                        ${Math.abs(newBalance).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Additional notes..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => router.push("/sales/list")}>
              Cancel
            </Button>
            <Button onClick={handleSaveChanges} disabled={!hasChanges || isSubmitting} className="min-w-[140px]">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Sale Updated Successfully!
              </DialogTitle>
              <DialogDescription>
                {newInvoiceData && (
                  <>
                    New invoice #{newInvoiceData.invoiceNo} has been created.
                    <br />
                    Updated Total: ${newInvoiceData.total.toFixed(2)}
                    <br />
                    New Balance: ${newInvoiceData.balance.toFixed(2)}
                  </>
                )}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-4">
              <div className="text-sm text-muted-foreground">Would you like to print the updated receipt?</div>

              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex-1">
                      <Printer className="mr-2 h-4 w-4" />
                      Print Receipt
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handlePrintReceipt("57mm")}>Print 57mm (2¼")</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handlePrintReceipt("80mm")}>Print 80mm (3⅛")</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex gap-2 mt-2">
                <Button variant="outline" onClick={handleCloseSuccessDialog} className="flex-1 bg-transparent">
                  Back to Sales
                </Button>
              </div>

              <Button variant="ghost" onClick={handleCloseSuccessDialog} className="mt-2">
                <X className="mr-2 h-4 w-4" />
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </>
  )
}
