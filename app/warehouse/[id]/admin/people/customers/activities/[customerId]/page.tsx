"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
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
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { 
  UserCheck, 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Receipt, 
  ShoppingCart,
  Activity,
  Eye,
  CreditCard,
  AlertCircle,
  TrendingUp
} from "lucide-react"
import { useSession } from "next-auth/react"
import { getWareHouseId } from "@/hooks/get-werehouseId"
import { Loading } from "@/components/loading"
import { formatCurrency, formatDate } from "@/lib/utils"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface CustomerActivity {
  id: string
  invoiceNo: string
  date: string
  type: string
  description: string
  amount: number
  paidAmount: number
  balance: number
  items: Array<{
    productName: string
    quantity: number
    price: number
    total: number
  }>
  paymentMethods: Array<{
    method: string
    amount: number
  }>
}

interface CustomerData {
  id: string
  name: string
  type: string
  email?: string
  phone: string
  address?: string
  companyName?: string
}

interface ActivityData {
  customer: CustomerData
  activities: CustomerActivity[]
  summary: {
    totalSales: number
    totalAmount: number
    totalPaid: number
    totalBalance: number
  }
}

export default function CustomerActivitiesPage() {
  const params = useParams()
  const router = useRouter()
  const { data: session } = useSession()
  const warehouseId = getWareHouseId()
  const customerId = params.customerId as string

  const [data, setData] = useState<ActivityData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedActivity, setSelectedActivity] = useState<CustomerActivity | null>(null)
  const [endPoint, setEndPoint] = useState("")

  useEffect(() => {
    setEndPoint(`/warehouse/${warehouseId}/${session?.user?.role}`)
  }, [session, warehouseId])

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`/api/customer/${customerId}/activities`)
        if (!response.ok) {
          throw new Error('Failed to fetch customer activities')
        }
        const activityData = await response.json()
        setData(activityData)
      } catch (error) {
        console.error('Error fetching activities:', error)
      } finally {
        setLoading(false)
      }
    }

    if (customerId) {
      fetchActivities()
    }
  }, [customerId])

  const getActivityBadge = (type: string) => {
    switch (type) {
      case 'SALE':
        return <Badge className="bg-green-600">Sale</Badge>
      default:
        return <Badge variant="outline">{type}</Badge>
    }
  }

  const getBalanceColor = (balance: number) => {
    if (balance > 0) return "text-red-600"
    if (balance < 0) return "text-green-600"
    return "text-gray-600"
  }

  if (loading) {
    return <Loading />
  }

  if (!data) {
    return (
      <>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <h2 className="text-2xl font-bold text-red-600">Error</h2>
                <p className="text-gray-600 mt-2">Failed to load customer activities</p>
                <Button
                  onClick={() => router.back()}
                  className="mt-4"
                  variant="outline"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </CardContent>
            </Card>
          </div>
       </>
    )
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
                  <BreadcrumbLink href={`${endPoint}/dashboard`}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`${endPoint}/people/customers`}>Customers</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Activities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => router.back()}
                variant="outline"
                size="sm"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Activity className="h-5 w-5 text-blue-600" />
              <h1 className="text-2xl font-semibold text-blue-600">Customer Activities</h1>
            </div>
          </div>

          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="font-medium">{data.customer.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Type</label>
                  <Badge variant="outline">{data.customer.type}</Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Phone</label>
                  <p className="text-sm">{data.customer.phone}</p>
                </div>
                {data.customer.email && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-sm">{data.customer.email}</p>
                  </div>
                )}
                {data.customer.companyName && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Company</label>
                    <p className="text-sm">{data.customer.companyName}</p>
                  </div>
                )}
                {data.customer.address && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Address</label>
                    <p className="text-sm">{data.customer.address}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <Receipt className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.summary.totalSales}</div>
                <p className="text-xs text-muted-foreground">Total transactions</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(data.summary.totalAmount)}</div>
                <p className="text-xs text-muted-foreground">Total sales value</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(data.summary.totalPaid)}
                </div>
                <p className="text-xs text-muted-foreground">Amount received</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Outstanding Balance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getBalanceColor(data.summary.totalBalance)}`}>
                  {formatCurrency(data.summary.totalBalance)}
                </div>
                <p className="text-xs text-muted-foreground">Amount due</p>
              </CardContent>
            </Card>
          </div>

          {/* Activities Table */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>
                Showing {data.activities.length} transaction(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {data.activities.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">No activities found</h3>
                  <p className="text-muted-foreground">
                    This customer hasn't made any purchases yet.
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Invoice No.</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead className="text-right">Paid</TableHead>
                      <TableHead className="text-right">Balance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.activities.map((activity) => (
                      <TableRow key={activity.id}>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            {formatDate(activity.date)}
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">
                          {activity.invoiceNo}
                        </TableCell>
                        <TableCell>
                          {getActivityBadge(activity.type)}
                        </TableCell>
                        <TableCell>{activity.description}</TableCell>
                        <TableCell className="text-right font-medium">
                          {formatCurrency(activity.amount)}
                        </TableCell>
                        <TableCell className="text-right text-green-600">
                          {formatCurrency(activity.paidAmount)}
                        </TableCell>
                        <TableCell className={`text-right font-medium ${getBalanceColor(activity.balance)}`}>
                          {formatCurrency(activity.balance)}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => setSelectedActivity(activity)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-2xl">
                                <DialogHeader>
                                  <DialogTitle>Transaction Details - {activity.invoiceNo}</DialogTitle>
                                  <DialogDescription>
                                    View detailed information about this transaction
                                  </DialogDescription>
                                </DialogHeader>
                                {selectedActivity && (
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Date</label>
                                        <p>{formatDate(selectedActivity.date)}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Invoice No.</label>
                                        <p>{selectedActivity.invoiceNo}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Total Amount</label>
                                        <p className="font-medium">{formatCurrency(selectedActivity.amount)}</p>
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-500">Balance</label>
                                        <p className={getBalanceColor(selectedActivity.balance)}>
                                          {formatCurrency(selectedActivity.balance)}
                                        </p>
                                      </div>
                                    </div>
                                    
                                    <div>
                                      <label className="text-sm font-medium text-gray-500 mb-2 block">Items</label>
                                      <div className="border rounded-lg overflow-hidden">
                                        <Table>
                                          <TableHeader>
                                            <TableRow>
                                              <TableHead>Product</TableHead>
                                              <TableHead>Qty</TableHead>
                                              <TableHead>Price</TableHead>
                                              <TableHead>Total</TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {selectedActivity.items.map((item, index) => (
                                              <TableRow key={index}>
                                                <TableCell>{item.productName}</TableCell>
                                                <TableCell>{item.quantity}</TableCell>
                                                <TableCell>{formatCurrency(item.price)}</TableCell>
                                                <TableCell>{formatCurrency(item.total)}</TableCell>
                                              </TableRow>
                                            ))}
                                          </TableBody>
                                        </Table>
                                      </div>
                                    </div>

                                    {selectedActivity.paymentMethods.length > 0 && (
                                      <div>
                                        <label className="text-sm font-medium text-gray-500 mb-2 block">Payment Methods</label>
                                        <div className="space-y-2">
                                          {selectedActivity.paymentMethods.map((payment, index) => (
                                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                                              <span className="capitalize">{payment.method}</span>
                                              <span className="font-medium">{formatCurrency(payment.amount)}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </DialogContent>
                            </Dialog>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`${endPoint}/sales/${activity.invoiceNo}`}>
                                <Receipt className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
     </>
  )
}