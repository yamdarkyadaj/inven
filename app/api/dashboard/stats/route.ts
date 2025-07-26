import { PrismaClient } from "@/prisma/generated/online";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET() {
  try {
    // Fetch dashboard statistics from the database
    const [
      totalUsers,
      totalWarehouses,
      totalProducts,
      totalSales,
      totalCustomers,
      recentSales
    ] = await Promise.all([
      prisma.users_online.count({where:{isDeleted:false}}),
      prisma.warehouses_online.count({where:{isDeleted:false}}),
      prisma.product_online.count({where:{isDeleted:false}}),
      prisma.sale_online.count({where:{isDeleted:false}}),
      prisma.customer_online.count({where:{isDeleted:false}}),
      prisma.sale_online.findMany({
        where:{isDeleted:false},
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          Customer_online:true,
          saleItems: {
            include: {
              Product_online: true
            }
          }
        }
      })
    ])

    // Calculate total sales amount
    const totalSalesAmount = await prisma.sale_online.aggregate({
      _sum: {
        grandTotal: true
      }
    })

    // Calculate total revenue and profit
    const totalRevenue = totalSalesAmount._sum.grandTotal || 0

    return NextResponse.json({
      totalUsers,
      totalWarehouses,
      totalProducts,
      totalSales,
      totalCustomers,
      totalRevenue,
      recentSales: recentSales.map((sale:any) => ({
        id: sale.invoiceNo,
        customer: sale.selectedCustomer?.name || 'Unknown Customer',
        amount: sale.grandTotal,
        date: sale.createdAt.toISOString(),
        items: sale.saleItems.length,
        products: sale.saleItems.map((item:any) => item.productName).join(', ')
      }))
    })
  } catch (error) {
    console.error('Failed to fetch dashboard stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard statistics' },
      { status: 500 }
    )
  }
}