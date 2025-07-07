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
import { Truck, Plus, Trash2, Calculator } from "lucide-react"

// Sample data
const suppliers = [
  { id: "SUP-001", name: "Tech Distributors Inc", email: "sales@techdist.com", phone: "+1234567892" },
  { id: "SUP-002", name: "Electronics Supply Co", email: "orders@elecsupply.com", phone: "+1234567893" },
  { id: "SUP-003", name: "Mobile Solutions Ltd", email: "info@mobilesol.com", phone: "+1234567894" },
  { id: "SUP-004", name: "Computer World", email: "sales@compworld.com", phone: "+1234567895" },
]

const warehouses = [
  { id: "WH-001", name: "Main Warehouse", code: "MAIN" },
  { id: "WH-002", name: "Branch Warehouse", code: "BRANCH" },
  { id: "WH-003", name: "Storage Facility", code: "STORAGE" },
]

const products = [
  { id: "PRD-001", name: "iPhone 15 Pro", code: "IPH15PRO", cost: 750.0, stock: 25 },
  { id: "PRD-002", name: "Samsung Galaxy S24", code: "SGS24", cost: 650.0, stock: 15 },
  { id: "PRD-003", name: "MacBook Air M3", code: "MBAM3", cost: 1000.0, stock: 8 },
  { id: "PRD-004", name: "iPad Pro 12.9", code: "IPADPRO129", cost: 850.0, stock: 3 },
  { id: "PRD-005", name: "AirPods Pro", code: "AIRPODSPRO", cost: 180.0, stock: 0 },
]

interface PurchaseItem {
  id: string
  productId: string
  productName: string
  productCode: string
  cost: number
  quantity: number
  discount: number
  total: number
}

export default function AddPurchasePage() {
  const [purchaseItems, setPurchaseItems] = useState<PurchaseItem[]>([])
  const [selectedSupplier, setSelectedSupplier] = useState("")
  const [selectedWarehouse, setSelectedWarehouse] = useState("")
  const [selectedProduct, setSelectedProduct] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [discount, setDiscount] = useState(0)
  const [taxRate, setTaxRate] = useState(10)
  const [shipping, setShipping] = useState(0)
  const [notes, setNotes] = useState("")
  const [referenceNo, setReferenceNo] = useState(
    `PO-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
  )

  const addProductToPurchase = () => {
    if (!selectedProduct) return

    const product = products.find((p) => p.id === selectedProduct)
    if (!product) return

    const itemTotal = product.cost * quantity - discount
    const newItem: PurchaseItem = {
      id: `ITEM-${Date.now()}`,
      productId: product.id,
      productName: product.name,
      productCode: product.code,
      cost: product.cost,
      quantity,
      discount,
      total: itemTotal,
    }

    setPurchaseItems([...purchaseItems, newItem])
    setSelectedProduct("")
    setQuantity(1)
    setDiscount(0)
  }

  const removeItem = (itemId: string) => {
    setPurchaseItems(purchaseItems.filter((item) => item.id !== itemId))
  }

  const updateItemQuantity = (itemId: string, newQuantity: number) => {
    setPurchaseItems(
      purchaseItems.map((item) => {
        if (item.id === itemId) {
          const newTotal = item.cost * newQuantity - item.discount
          return { ...item, quantity: newQuantity, total: newTotal }
        }
        return item
      }),
    )
  }

  const updateItemDiscount = (itemId: string, newDiscount: number) => {
    setPurchaseItems(
      purchaseItems.map((item) => {
        if (item.id === itemId) {
          const newTotal = item.cost * item.quantity - newDiscount
          return { ...item, discount: newDiscount, total: newTotal }
        }
        return item
      }),
    )
  }

  const subtotal = purchaseItems.reduce((sum, item) => sum + item.total, 0)
  const taxAmount = (subtotal * taxRate) / 100
  const grandTotal = subtotal + taxAmount + shipping

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
                  <BreadcrumbLink href="/purchases/list">Purchases</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Add Purchase</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center gap-2 mb-4">
            <Truck className="h-5 w-5 text-blue-600" />
            <h1 className="text-2xl font-semibold text-blue-600">Add New Purchase</h1>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left Column - Purchase Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Purchase Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="reference">Reference Number *</Label>
                      <Input
                        id="reference"
                        value={referenceNo}
                        onChange={(e) => setReferenceNo(e.target.value)}
                        placeholder="PO-2024-001"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="supplier">Supplier *</Label>
                      <Select value={selectedSupplier} onValueChange={setSelectedSupplier}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select supplier" />
                        </SelectTrigger>
                        <SelectContent>
                          {suppliers.map((supplier) => (
                            <SelectItem key={supplier.id} value={supplier.id}>
                              {supplier.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="warehouse">Warehouse *</Label>
                      <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select warehouse" />
                        </SelectTrigger>
                        <SelectContent>
                          {warehouses.map((warehouse) => (
                            <SelectItem key={warehouse.id} value={warehouse.id}>
                              {warehouse.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="purchase-date">Purchase Date *</Label>
                    <Input id="purchase-date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                </CardContent>
              </Card>

              {/* Add Products */}
              <Card>
                <CardHeader>
                  <CardTitle>Add Products</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-5">
                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="product">Product</Label>
                      <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name} - ${product.cost} (Stock: {product.stock})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
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
                      <Button onClick={addProductToPurchase} className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Items</CardTitle>
                  <CardDescription>{purchaseItems.length} item(s) added to this purchase</CardDescription>
                </CardHeader>
                <CardContent>
                  {purchaseItems.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Truck className="mx-auto h-12 w-12 mb-4" />
                      <p>No items added yet. Select products above to add them to the purchase.</p>
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Product</TableHead>
                          <TableHead>Code</TableHead>
                          <TableHead>Cost</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Discount</TableHead>
                          <TableHead>Total</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {purchaseItems.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.productName}</TableCell>
                            <TableCell>{item.productCode}</TableCell>
                            <TableCell>${item.cost.toFixed(2)}</TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateItemQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                                className="w-20"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="number"
                                min="0"
                                value={item.discount}
                                onChange={(e) => updateItemDiscount(item.id, Number.parseFloat(e.target.value) || 0)}
                                className="w-20"
                              />
                            </TableCell>
                            <TableCell>${item.total.toFixed(2)}</TableCell>
                            <TableCell className="text-right">
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

            {/* Right Column - Summary & Notes */}
            <div className="space-y-6">
              {/* Purchase Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Purchase Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tax ({taxRate}%):</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Shipping:</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Grand Total:</span>
                      <span>${grandTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
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
                    <div className="space-y-2">
                      <Label htmlFor="shipping">Shipping Cost</Label>
                      <Input
                        id="shipping"
                        type="number"
                        min="0"
                        value={shipping}
                        onChange={(e) => setShipping(Number.parseFloat(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Purchase Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Purchase Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="ordered">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordered">Ordered</SelectItem>
                        <SelectItem value="received">Received</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="payment-status">Payment Status</Label>
                    <Select defaultValue="pending">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="partial">Partial</SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                      </SelectContent>
                    </Select>
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
                    placeholder="Enter any additional notes or comments..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline">Save as Draft</Button>
            <Button disabled={purchaseItems.length === 0 || !selectedSupplier || !selectedWarehouse}>
              Create Purchase Order
            </Button>
          </div>
        </div>
     </>
  )
}
