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
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, Plus, Trash2, Calculator, Printer, Check, ChevronsUpDown } from "lucide-react"
import { usePrintReceipt } from "@/hooks/use-print-receipt"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Sample data
const customers = [
  { id: "CUST-001", name: "John Doe", email: "john@example.com", phone: "+1234567890" },
  { id: "CUST-002", name: "Jane Smith", email: "jane@example.com", phone: "+1234567891" },
  { id: "CUST-003", name: "Mike Johnson", email: "mike@example.com", phone: "+1234567892" },
  { id: "WALK-IN", name: "Walk-in Customer", email: "", phone: "" },
]

const products = [
  {
    id: "PRD-001",
    name: "iPhone 15 Pro",
    code: "IPH15PRO",
    barcode: "123456789012",
    price: 999.0,
    cost: 750.0,
    stock: 25,
    category: "Electronics",
    brand: "Apple",
  },
  {
    id: "PRD-002",
    name: "Samsung Galaxy S24",
    code: "SGS24",
    barcode: "123456789013",
    price: 849.0,
    cost: 650.0,
    stock: 15,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    id: "PRD-003",
    name: "MacBook Air M3",
    code: "MBAM3",
    barcode: "123456789014",
    price: 1299.0,
    cost: 1000.0,
    stock: 8,
    category: "Computers",
    brand: "Apple",
  },
  {
    id: "PRD-004",
    name: "iPad Pro 12.9",
    code: "IPADPRO129",
    barcode: "123456789015",
    price: 1099.0,
    cost: 850.0,
    stock: 3,
    category: "Tablets",
    brand: "Apple",
  },
  {
    id: "PRD-005",
    name: "AirPods Pro",
    code: "AIRPODSPRO",
    barcode: "123456789016",
    price: 249.0,
    cost: 180.0,
    stock: 0,
    category: "Audio",
    brand: "Apple",
  },
]

interface SaleItem {
  id: string
  productId: string
  productName: string
  productCode: string
  price: number
  quantity: number
  discount: number
  total: number
}

export default function AddSalePage() {
  const [saleItems, setSaleItems] = useState<SaleItem[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState("")
  const [selectedProductId, setSelectedProductId] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [discount, setDiscount] = useState(0)
  const [taxRate, setTaxRate] = useState(10)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [notes, setNotes] = useState("")
  const [amountPaid, setAmountPaid] = useState("")
  const [open, setOpen] = useState(false)

  const { printReceipt } = usePrintReceipt()

  const selectedProduct = products.find((p) => p.id === selectedProductId)

  const addProductToSale = () => {
    if (!selectedProduct) return

    // Check if product already exists in sale
    const existingItemIndex = saleItems.findIndex((item) => item.productId === selectedProduct.id)

    if (existingItemIndex >= 0) {
      // Update existing item
      const updatedItems = [...saleItems]
      const existingItem = updatedItems[existingItemIndex]
      existingItem.quantity += quantity
      existingItem.discount += discount
      existingItem.total = existingItem.price * existingItem.quantity - existingItem.discount
      setSaleItems(updatedItems)
    } else {
      // Add new item
      const itemTotal = selectedProduct.price * quantity - discount
      const newItem: SaleItem = {
        id: `ITEM-${Date.now()}`,
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        productCode: selectedProduct.code,
        price: selectedProduct.price,
        quantity,
        discount,
        total: itemTotal,
      }
      setSaleItems([...saleItems, newItem])
    }

    // Reset form
    setSelectedProductId("")
    setQuantity(1)
    setDiscount(0)
  }

  const removeItem = (itemId: string) => {
    setSaleItems(saleItems.filter((item) => item.id !== itemId))
  }

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    setSaleItems(
      saleItems.map((item) => {
        if (item.id === itemId) {
          const newTotal = item.price * newQuantity - item.discount
          return { ...item, quantity: newQuantity, total: newTotal }
        }
        return item
      }),
    )
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return { color: "text-red-600", text: "Out of Stock" }
    if (stock <= 5) return { color: "text-yellow-600", text: "Low Stock" }
    return { color: "text-green-600", text: "In Stock" }
  }

  const subtotal = saleItems.reduce((sum, item) => sum + item.total, 0)
  const taxAmount = (subtotal * taxRate) / 100
  const grandTotal = subtotal + taxAmount
  const paidAmount = Number.parseFloat(amountPaid) || grandTotal
  const balance = paidAmount - grandTotal

  const handlePrintReceipt = (paperWidth: "57mm" | "80mm") => {
    if (saleItems.length === 0) {
      alert("Please add items to the sale before printing receipt")
      return
    }

    const customer = customers.find((c) => c.id === selectedCustomer)
    const currentDate = new Date()

    const receiptData = {
      invoiceNo: `INV-${String(Math.floor(Math.random() * 1000000)).padStart(6, "0")}`,
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
      customer: customer?.name || "Walk-in Customer",
      cashier: "Admin User",
      items: saleItems.map((item) => ({
        name: item.productName,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      })),
      subtotal: subtotal,
      discount: saleItems.reduce((sum, item) => sum + item.discount, 0),
      tax: taxAmount,
      total: grandTotal,
      paid: paidAmount,
      balance: balance,
      paymentMethod: paymentMethod || "Cash",
    }

    printReceipt(receiptData, paperWidth)
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
                  <BreadcrumbPage>Add Sale</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-blue-600">New Sale</h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Sale Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id}>
                          {customer.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Product Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Product</CardTitle>
                  <CardDescription>Select a product to add to the sale</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Product Combobox */}
                  <div className="space-y-2">
                    <Label>Product</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full justify-between bg-transparent"
                        >
                          {selectedProductId
                            ? products.find((product) => product.id === selectedProductId)?.name
                            : "Select product..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search products..." className="h-9" />
                          <CommandList>
                            <CommandEmpty>No product found.</CommandEmpty>
                            <CommandGroup>
                              {products.map((product) => {
                                const stockStatus = getStockStatus(product.stock)
                                return (
                                  <CommandItem
                                    key={product.id}
                                    value={product.id}
                                    onSelect={(currentValue) => {
                                      setSelectedProductId(currentValue === selectedProductId ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                    className="flex flex-col items-start gap-1 p-3"
                                  >
                                    <div className="flex items-center justify-between w-full">
                                      <span className="font-medium">{product.name}</span>
                                      <span className="font-semibold">${product.price}</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                                      <span>
                                        {product.code} • {product.brand}
                                      </span>
                                      <span className={stockStatus.color}>{product.stock} in stock</span>
                                    </div>
                                    <Check
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        selectedProductId === product.id ? "opacity-100" : "opacity-0",
                                      )}
                                    />
                                  </CommandItem>
                                )
                              })}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Quantity and Discount */}
                  {selectedProduct && (
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input
                          id="quantity"
                          type="number"
                          min="1"
                          max={selectedProduct.stock}
                          value={quantity}
                          onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="discount">Discount ($)</Label>
                        <Input
                          id="discount"
                          type="number"
                          min="0"
                          value={discount}
                          onChange={(e) => setDiscount(Number.parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div className="flex items-end">
                        <Button
                          onClick={addProductToSale}
                          className="w-full"
                          disabled={selectedProduct.stock === 0 || quantity > selectedProduct.stock}
                        >
                          <Plus className="mr-2 h-4 w-4" />
                          Add
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Product Details */}
                  {selectedProduct && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Price:</span> ${selectedProduct.price}
                        </div>
                        <div>
                          <span className="font-medium">Stock:</span> {selectedProduct.stock} units
                        </div>
                        <div>
                          <span className="font-medium">Category:</span> {selectedProduct.category}
                        </div>
                        <div>
                          <span className="font-medium">Total:</span> $
                          {(selectedProduct.price * quantity - discount).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Sale Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Items ({saleItems.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {saleItems.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <ShoppingCart className="mx-auto h-12 w-12 mb-4" />
                      <p>No items added yet</p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {saleItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{item.productName}</div>
                                <div className="text-sm text-muted-foreground">{item.productCode}</div>
                              </div>
                            </TableCell>
                            <TableCell>${item.price.toFixed(2)}</TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateItemQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                                className="w-20"
                              />
                            </TableCell>
                            <TableCell className="font-medium">${item.total.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(item.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Summary & Payment */}
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
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax ({taxRate}%):</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span>${grandTotal.toFixed(2)}</span>
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

              {/* Payment */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Method</Label>
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

                  {amountPaid && (
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span>Change:</span>
                        <span className={balance >= 0 ? "text-green-600" : "text-red-600"}>
                          ${Math.abs(balance).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}
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
            <Button variant="outline">Save Draft</Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" disabled={saleItems.length === 0}>
                  <Printer className="mr-2 h-4 w-4" />
                  Print Receipt
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handlePrintReceipt("57mm")}>Print 57mm (2¼")</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePrintReceipt("80mm")}>Print 80mm (3⅛")</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button disabled={saleItems.length === 0 || !selectedCustomer || !paymentMethod}>
              <Check className="mr-2 h-4 w-4" />
              Complete Sale
            </Button>
          </div>
        </div>
     </>
  )
}
