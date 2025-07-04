import { AppSidebar } from "@/components/app-sidebar"
import { SalesVsPurchasesChart } from "@/components/sales-vs-purchases-chart"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Package, ShoppingCart, FileText, Users, Truck, Plus, BarChart3, Eye } from "lucide-react"

// Sample sales data
const recentSales = [
  {
    id: "INV-001",
    customer: "John Doe",
    product: "iPhone 15 Pro",
    amount: 999,
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "INV-002",
    customer: "Jane Smith",
    product: "Samsung Galaxy S24",
    amount: 849,
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "INV-003",
    customer: "Mike Johnson",
    product: "MacBook Air M3",
    amount: 1299,
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "INV-004",
    customer: "Sarah Wilson",
    product: "iPad Pro",
    amount: 799,
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "INV-005",
    customer: "David Brown",
    product: "AirPods Pro",
    amount: 249,
    status: "processing",
    date: "2024-01-13",
  },
]

export default function DashboardPage() {
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
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,150</div>
                <p className="text-xs text-muted-foreground">+15.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Quotations</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23</div>
                <p className="text-xs text-muted-foreground">+5 from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">573</div>
                <p className="text-xs text-muted-foreground">+201 since last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 lg:grid-cols-7">
            {/* Recent Sales Table */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Latest sales transactions in your system</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentSales.map((sale) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell>{sale.customer}</TableCell>
                        <TableCell>{sale.product}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              sale.status === "completed"
                                ? "default"
                                : sale.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {sale.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">${sale.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Right Column */}
            <div className="col-span-3 space-y-4">
              {/* Sales vs Purchases Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales vs Purchases</CardTitle>
                  <CardDescription>Comparison of total sales and purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <SalesVsPurchasesChart />
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common tasks and shortcuts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <a href="/products/add">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Product
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <a href="/sales/add">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Record Sale
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <a href="/purchases/add">
                      <Truck className="mr-2 h-4 w-4" />
                      Add Purchase
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <a href="/reports">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      View Reports
                    </a>
                  </Button>
                  <Button asChild className="w-full justify-start bg-transparent" variant="outline">
                    <a href="/sales/list">
                      <Eye className="mr-2 h-4 w-4" />
                      View All Sales
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
