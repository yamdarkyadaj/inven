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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Warehouse,
  MapPin,
  Users,
  Package,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Truck,
  MoreHorizontal,
  Edit,
  Trash2,
  UserPlus,
  Eye,
  BarChart3,
  PieChartIcon,
  Activity,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  BarChart,
  Bar,
  Cell
} from "recharts"

// Sample warehouse data
const warehouseData = {
  id: "WH-001",
  code: "MAIN",
  name: "Main Warehouse",
  address: "123 Warehouse District, Industrial Area, City 12345",
  phone: "+1234567890",
  email: "main@inventorypro.com",
  manager: "John Manager",
  capacity: 10000,
  currentStock: 7500,
  totalProducts: 1234,
  assignedUsers: 8,
  status: "active",
  createdDate: "2024-01-01",
}

// Sample financial data
const financialData = {
  totalSales: 125750.5,
  totalPurchases: 89320.25,
  totalProfit: 36430.25,
  profitMargin: 28.9,
  monthlyGrowth: 12.5,
  topSellingProduct: "iPhone 15 Pro",
  averageOrderValue: 847.32,
}

// Sample monthly data for charts
const monthlyData = [
  { month: "Jan", sales: 12500, purchases: 8900, profit: 3600 },
  { month: "Feb", sales: 15200, purchases: 10200, profit: 5000 },
  { month: "Mar", sales: 18700, purchases: 12800, profit: 5900 },
  { month: "Apr", sales: 16300, purchases: 11500, profit: 4800 },
  { month: "May", sales: 21400, purchases: 14200, profit: 7200 },
  { month: "Jun", sales: 19800, purchases: 13100, profit: 6700 },
]

// Sample category data for pie chart
const categoryData = [
  { name: "Electronics", value: 45, color: "#0088FE" },
  { name: "Computers", value: 30, color: "#00C49F" },
  { name: "Audio", value: 15, color: "#FFBB28" },
  { name: "Tablets", value: 10, color: "#FF8042" },
]

// Sample recent transactions
const recentSales = [
  {
    id: "SALE-001",
    date: "2024-01-15",
    customer: "John Doe",
    amount: 999.0,
    profit: 249.0,
    items: 1,
    status: "completed",
  },
  {
    id: "SALE-002",
    date: "2024-01-14",
    customer: "Jane Smith",
    amount: 849.0,
    profit: 199.0,
    items: 1,
    status: "completed",
  },
  {
    id: "SALE-003",
    date: "2024-01-13",
    customer: "Mike Johnson",
    amount: 1299.0,
    profit: 299.0,
    items: 1,
    status: "completed",
  },
]

const recentPurchases = [
  {
    id: "PO-001",
    date: "2024-01-12",
    supplier: "Tech Distributors",
    amount: 7500.0,
    items: 10,
    status: "received",
  },
  {
    id: "PO-002",
    date: "2024-01-10",
    supplier: "Electronics Supply",
    amount: 5200.0,
    items: 8,
    status: "received",
  },
  {
    id: "PO-003",
    date: "2024-01-08",
    supplier: "Mobile Solutions",
    amount: 3200.0,
    items: 5,
    status: "pending",
  },
]

// Sample assigned users
const assignedUsers = [
  {
    id: "USR-001",
    name: "John Manager",
    email: "john@inventorypro.com",
    role: "manager",
    avatar: null,
    lastActive: "2024-01-15 10:30:00",
    permissions: ["read", "write", "delete"],
  },
  {
    id: "USR-002",
    name: "Jane Staff",
    email: "jane@inventorypro.com",
    role: "staff",
    avatar: null,
    lastActive: "2024-01-14 15:45:00",
    permissions: ["read", "write"],
  },
  {
    id: "USR-003",
    name: "Mike Clerk",
    email: "mike@inventorypro.com",
    role: "staff",
    avatar: null,
    lastActive: "2024-01-13 09:15:00",
    permissions: ["read"],
  },
]

// Sample available users to add
const availableUsers = [
  { id: "USR-004", name: "Sarah Admin", role: "admin", email: "sarah@inventorypro.com" },
  { id: "USR-005", name: "Tom Worker", role: "staff", email: "tom@inventorypro.com" },
  { id: "USR-006", name: "Lisa Supervisor", role: "manager", email: "lisa@inventorypro.com" },
]

export default function WarehouseDetailsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("6months")
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState("")

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return (
          <Badge variant="default" className="bg-red-600">
            Admin
          </Badge>
        )
      case "manager":
        return (
          <Badge variant="default" className="bg-blue-600">
            Manager
          </Badge>
        )
      case "staff":
        return <Badge variant="secondary">Staff</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge variant="default" className="bg-green-600">
            Completed
          </Badge>
        )
      case "received":
        return (
          <Badge variant="default" className="bg-green-600">
            Received
          </Badge>
        )
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getCapacityPercentage = () => {
    return Math.round((warehouseData.currentStock / warehouseData.capacity) * 100)
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
                  <BreadcrumbLink href="/warehouses/list">Warehouses</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{warehouseData.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Warehouse Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                <Warehouse className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-blue-600">{warehouseData.name}</h1>
                <p className="text-muted-foreground font-mono">{warehouseData.code}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{warehouseData.address.split(",")[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{warehouseData.assignedUsers} users</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    <span>{warehouseData.totalProducts} products</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit Warehouse
              </Button>
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${financialData.totalSales.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-600" />+{financialData.monthlyGrowth}% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${financialData.totalPurchases.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Cost of goods purchased</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">${financialData.totalProfit.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">{financialData.profitMargin}% profit margin</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Capacity Used</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{getCapacityPercentage()}%</div>
                <p className="text-xs text-muted-foreground">
                  {warehouseData.currentStock.toLocaleString()} / {warehouseData.capacity.toLocaleString()} sq ft
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales & Purchases</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="users">User Management</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Financial Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Financial Performance
                    </CardTitle>
                    <CardDescription>Sales, purchases, and profit over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                        <Line type="monotone" dataKey="sales" stroke="#0088FE" strokeWidth={2} name="Sales" />
                        <Line type="monotone" dataKey="purchases" stroke="#FF8042" strokeWidth={2} name="Purchases" />
                        <Line type="monotone" dataKey="profit" stroke="#00C49F" strokeWidth={2} name="Profit" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Product Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChartIcon className="h-5 w-5" />
                      Product Categories
                    </CardTitle>
                    <CardDescription>Distribution of products by category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </ResponsiveContainer>
                    
                  </CardContent>
                </Card>
              </div>

              {/* Warehouse Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Warehouse Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Contact Information</Label>
                        <div className="mt-2 space-y-2 text-sm">
                          <div>Phone: {warehouseData.phone}</div>
                          <div>Email: {warehouseData.email}</div>
                          <div>Manager: {warehouseData.manager}</div>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Address</Label>
                        <div className="mt-2 text-sm text-muted-foreground">{warehouseData.address}</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">Capacity Details</Label>
                        <div className="mt-2 space-y-2 text-sm">
                          <div>Total Capacity: {warehouseData.capacity.toLocaleString()} sq ft</div>
                          <div>Current Stock: {warehouseData.currentStock.toLocaleString()} sq ft</div>
                          <div>
                            Available Space: {(warehouseData.capacity - warehouseData.currentStock).toLocaleString()} sq
                            ft
                          </div>
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Statistics</Label>
                        <div className="mt-2 space-y-2 text-sm">
                          <div>Total Products: {warehouseData.totalProducts.toLocaleString()}</div>
                          <div>Assigned Users: {warehouseData.assignedUsers}</div>
                          <div>Created: {new Date(warehouseData.createdDate).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sales & Purchases Tab */}
            <TabsContent value="sales" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="3months">Last 3 months</SelectItem>
                    <SelectItem value="6months">Last 6 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {/* Recent Sales */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Recent Sales
                    </CardTitle>
                    <CardDescription>Latest sales transactions from this warehouse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Sale ID</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Profit</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentSales.map((sale) => (
                          <TableRow key={sale.id}>
                            <TableCell className="font-medium">{sale.id}</TableCell>
                            <TableCell>{sale.customer}</TableCell>
                            <TableCell>${sale.amount.toFixed(2)}</TableCell>
                            <TableCell className="text-green-600">${sale.profit.toFixed(2)}</TableCell>
                            <TableCell>{getStatusBadge(sale.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Recent Purchases */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Recent Purchases
                    </CardTitle>
                    <CardDescription>Latest purchase orders for this warehouse</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>PO ID</TableHead>
                          <TableHead>Supplier</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentPurchases.map((purchase) => (
                          <TableRow key={purchase.id}>
                            <TableCell className="font-medium">{purchase.id}</TableCell>
                            <TableCell>{purchase.supplier}</TableCell>
                            <TableCell>${purchase.amount.toFixed(2)}</TableCell>
                            <TableCell>{purchase.items}</TableCell>
                            <TableCell>{getStatusBadge(purchase.status)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6">
                {/* Monthly Performance Bar Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-5 w-5" />
                      Monthly Performance Analysis
                    </CardTitle>
                    <CardDescription>Detailed breakdown of sales, purchases, and profit by month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, ""]} />
                        <Bar dataKey="sales" fill="#0088FE" name="Sales" />
                        <Bar dataKey="purchases" fill="#FF8042" name="Purchases" />
                        <Bar dataKey="profit" fill="#00C49F" name="Profit" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Key Performance Indicators */}
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Average Order Value</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${financialData.averageOrderValue.toFixed(2)}</div>
                      <p className="text-xs text-muted-foreground">Per transaction</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Top Selling Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">{financialData.topSellingProduct}</div>
                      <p className="text-xs text-muted-foreground">Best performer</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Profit Margin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">{financialData.profitMargin}%</div>
                      <p className="text-xs text-muted-foreground">Overall margin</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* User Management Tab */}
            <TabsContent value="users" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Assigned Users</h3>
                <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add User to Warehouse</DialogTitle>
                      <DialogDescription>
                        Select a user to assign to this warehouse. They will gain access to manage inventory here.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="user-select">Select User</Label>
                        <Select value={selectedUser} onValueChange={setSelectedUser}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a user to add" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableUsers.map((user) => (
                              <SelectItem key={user.id} value={user.id}>
                                {user.name} ({user.role}) - {user.email}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddUserOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => setIsAddUserOpen(false)} disabled={!selectedUser}>
                        Add User
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead>Permissions</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assignedUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar || ""} alt={user.name} />
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{getRoleBadge(user.role)}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{new Date(user.lastActive).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              {user.permissions.map((permission) => (
                                <Badge key={permission} variant="outline" className="text-xs">
                                  {permission}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
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
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit Permissions
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Remove from Warehouse
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
            </TabsContent>
          </Tabs>
        </div>
      </>
  )
}
