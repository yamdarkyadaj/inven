"use client"

import { useState, useEffect } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from "recharts"
import {
  ShoppingCart,
  Package,
  Users,
  Warehouse,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChartIcon,
  Activity,
  Settings,
  UserCheck,
} from "lucide-react"
import { SystemStatus } from "@/components/system-status"

// Sample data based on Prisma schema
const dashboardData = {
  // Overview metrics
  totalSales: 156,
  totalRevenue: 45678.9,
  totalProducts: 234,
  totalCustomers: 89,
  totalWarehouses: 4,
  totalUsers: 12,

  // Recent activity
  recentSales: [
    {
      id: "SALE-001",
      invoiceNo: "INV-000001",
      customerName: "John Doe",
      grandTotal: 1299.99,
      createdAt: "2024-01-15T10:30:00Z",
      paymentMethod: "cash",
      warehouseName: "Main Warehouse",
    },
    {
      id: "SALE-002",
      invoiceNo: "INV-000002",
      customerName: "Jane Smith",
      grandTotal: 3956.7,
      createdAt: "2024-01-15T11:45:00Z",
      paymentMethod: "bank_transfer",
      warehouseName: "Downtown Branch",
    },
    {
      id: "SALE-003",
      invoiceNo: "INV-000003",
      customerName: "Mike Johnson",
      grandTotal: 849.5,
      createdAt: "2024-01-15T14:20:00Z",
      paymentMethod: "card",
      warehouseName: "Main Warehouse",
    },
  ],

  // Low stock products
  lowStockProducts: [
    {
      id: "PROD-001",
      name: "iPhone 15 Pro",
      barcode: "123456789012",
      quantity: 3,
      unit: "piece",
      warehouseName: "Main Warehouse",
    },
    {
      id: "PROD-002",
      name: "AirPods Pro",
      barcode: "123456789016",
      quantity: 0,
      unit: "piece",
      warehouseName: "Downtown Branch",
    },
    {
      id: "PROD-003",
      name: "MacBook Air M3",
      barcode: "123456789014",
      quantity: 2,
      unit: "piece",
      warehouseName: "Main Warehouse",
    },
  ],

  // Sales by warehouse
  salesByWarehouse: [
    { name: "Main Warehouse", sales: 45, revenue: 23456.78 },
    { name: "Downtown Branch", sales: 38, revenue: 18234.56 },
    { name: "North Store", sales: 42, revenue: 21987.43 },
    { name: "South Outlet", sales: 31, revenue: 15432.89 },
  ],

  // Customer types distribution
  customerTypes: [
    { name: "Retail", value: 65, color: "#3b82f6" },
    { name: "Wholesale", value: 24, color: "#10b981" },
  ],

  // User roles distribution
  userRoles: [
    { name: "Sales", value: 7, color: "#3b82f6" },
    { name: "Admin", value: 3, color: "#10b981" },
    { name: "Purchase", value: 2, color: "#f59e0b" },
  ],

  // Monthly sales trend
  monthlySales: [
    { month: "Jan", sales: 45, revenue: 23456 },
    { month: "Feb", sales: 52, revenue: 28934 },
    { month: "Mar", sales: 48, revenue: 25678 },
    { month: "Apr", sales: 61, revenue: 32145 },
    { month: "May", sales: 55, revenue: 29876 },
    { month: "Jun", sales: 67, revenue: 35432 },
  ],

  // Product performance
  topProducts: [
    { name: "iPhone 15 Pro", sales: 23, revenue: 22977 },
    { name: "MacBook Air M3", sales: 18, revenue: 23382 },
    { name: "Samsung Galaxy S24", sales: 15, revenue: 12735 },
    { name: "iPad Pro 12.9", sales: 12, revenue: 13188 },
    { name: "AirPods Pro", sales: 28, revenue: 6972 },
  ],
}

export default function DashboardPage() {

  return (
    <>
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
          <SystemStatus/>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's what's happening with your business.</p>
            </div>
            
          </div>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.totalSales}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${dashboardData.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8%</span> from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.totalProducts}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-blue-600">3</span> low stock items
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.totalCustomers}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+5</span> new this week
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Secondary Metrics */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Warehouses</CardTitle>
                <Warehouse className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.totalWarehouses}</div>
                <p className="text-xs text-muted-foreground">Active locations</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Users</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData.totalUsers}</div>
                <p className="text-xs text-muted-foreground">Active accounts</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Sale Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${(dashboardData.totalRevenue / dashboardData.totalSales).toFixed(2)}
                </div>
                <p className="text-xs text-muted-foreground">Per transaction</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Monthly Sales Trend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Monthly Sales Trend
                </CardTitle>
                <CardDescription>Sales volume and revenue over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={dashboardData.monthlySales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "revenue" ? `$${value.toLocaleString()}` : value,
                        name === "revenue" ? "Revenue" : "Sales",
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stackId="1"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="sales"
                      stackId="2"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Sales by Warehouse */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Warehouse className="h-5 w-5" />
                  Sales by Warehouse
                </CardTitle>
                <CardDescription>Performance comparison across warehouses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dashboardData.salesByWarehouse}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "revenue" ? `$${value.toLocaleString()}` : value,
                        name === "revenue" ? "Revenue" : "Sales",
                      ]}
                    />
                    <Bar dataKey="sales" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Distribution Charts */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Customer Types */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5" />
                  Customer Distribution
                </CardTitle>
                <CardDescription>Breakdown by customer type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={dashboardData.customerTypes}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {dashboardData.customerTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {dashboardData.customerTypes.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-sm">
                        {item.name}: {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Roles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Roles Distribution
                </CardTitle>
                <CardDescription>System users by role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.userRoles.map((role, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: role.color }} />
                        <span className="text-sm font-medium">{role.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={(role.value / dashboardData.totalUsers) * 100} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">{role.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Tables */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Sales */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Sales
                </CardTitle>
                <CardDescription>Latest transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentSales.map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{sale.invoiceNo}</div>
                        <div className="text-sm text-muted-foreground">{sale.customerName}</div>
                        <div className="text-xs text-muted-foreground">{sale.warehouseName}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">${sale.grandTotal.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {sale.paymentMethod.replace("_", " ")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(sale.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Low Stock Alert */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  Low Stock Alert
                </CardTitle>
                <CardDescription>Products requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.lowStockProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.barcode}</div>
                        <div className="text-xs text-muted-foreground">{product.warehouseName}</div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={product.quantity === 0 ? "destructive" : "secondary"}
                          className={product.quantity === 0 ? "" : "text-yellow-600 border-yellow-600"}
                        >
                          {product.quantity} {product.unit}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {product.quantity === 0 ? "Out of Stock" : "Low Stock"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Products Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Top Performing Products
              </CardTitle>
              <CardDescription>Best selling products by revenue and volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData.topProducts} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "revenue" ? `$${value.toLocaleString()}` : value,
                      name === "revenue" ? "Revenue" : "Sales",
                    ]}
                  />
                  <Bar dataKey="revenue" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
                  <ShoppingCart className="h-6 w-6" />
                  <span>New Sale</span>
                </Button>
                <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
                  <Package className="h-6 w-6" />
                  <span>Add Product</span>
                </Button>
                <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
                  <Users className="h-6 w-6" />
                  <span>Add Customer</span>
                </Button>
                <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
                  <BarChart3 className="h-6 w-6" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
  )
}
