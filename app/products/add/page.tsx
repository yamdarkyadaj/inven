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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Textarea } from "@/components/ui/textarea"
import { Scan, Plus } from "lucide-react"

export default function AddProductPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
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
                  <BreadcrumbLink href="/products/list">Products</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Add Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center gap-2 mb-4">
            <Plus className="h-5 w-5 text-blue-600" />
            <h1 className="text-2xl font-semibold text-blue-600">Add Product</h1>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Please fill in the information below. The field labels marked with * are required input fields.
          </p>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Form - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="product-type">Product Type *</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select product type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                          <SelectItem value="digital">Digital</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product-name">Product Name *</Label>
                    <Input id="product-name" placeholder="Enter product name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product-code">Product Code *</Label>
                    <div className="flex gap-2">
                      <Input id="product-code" placeholder="Enter product code" className="flex-1" />
                      <Button variant="outline" size="icon">
                        <Scan className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      You can scan your barcode and select the correct symbology below
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="barcode-symbology">Barcode Symbology *</Label>
                    <Select defaultValue="code128">
                      <SelectTrigger>
                        <SelectValue placeholder="Select barcode symbology" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="code128">Code128</SelectItem>
                        <SelectItem value="code39">Code39</SelectItem>
                        <SelectItem value="ean13">EAN-13</SelectItem>
                        <SelectItem value="ean8">EAN-8</SelectItem>
                        <SelectItem value="upc">UPC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" placeholder="Enter product description" rows={3} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cost-price">Cost Price</Label>
                      <Input id="cost-price" type="number" placeholder="0.00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="selling-price">WholeSale Selling Price *</Label>
                      <Input id="selling-price" type="number" placeholder="0.00" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="selling-price">Retail Selling Price *</Label>
                      <Input id="selling-price" type="number" placeholder="0.00" />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate">Tax Rate (%)</Label>
                      <Input id="tax-rate" type="number" placeholder="0" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="unit">Unit</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="piece">Piece</SelectItem>
                          <SelectItem value="kg">Kilogram</SelectItem>
                          <SelectItem value="liter">Liter</SelectItem>
                          <SelectItem value="meter">Meter</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Additional Options */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Variants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="multiple-variants" />
                    <Label htmlFor="multiple-variants" className="text-sm font-medium">
                      This product has multiple variants
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">e.g. Multiple Sizes and/or Colors</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Warehouse Quantity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="font-medium text-sm">INVENTORY PRO</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" placeholder="0" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="racks">Racks</Label>
                    <Input id="racks" placeholder="Enter rack location" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Supplier
                    <Button variant="outline" size="sm">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="supplier">Select Supplier</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Supplier" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supplier1">ABC Electronics</SelectItem>
                        <SelectItem value="supplier2">XYZ Components</SelectItem>
                        <SelectItem value="supplier3">Tech Solutions Ltd</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supplier-part-number">Supplier Part Number</Label>
                    <Input id="supplier-part-number" placeholder="Enter part number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="supplier-price">Supplier Price</Label>
                    <Input id="supplier-price" type="number" placeholder="0.00" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline">Cancel</Button>
            <Button>Save Product</Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
