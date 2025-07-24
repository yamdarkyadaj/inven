
import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function DELETE(req: NextRequest) {
    try {
        const { invoiceNo } = await req.json()

        if (!invoiceNo) {
            return NextResponse.json({ error: "Invoice number is required" }, { status: 400 })
        }

        // First, get the sale and its items
        const sale = await prisma.sale.findUnique({
            where: { invoiceNo },
            include: {
                saleItems: true,
                paymentMethod: true
            }
        })

        if (!sale) {
            return NextResponse.json({ error: "Sale not found" }, { status: 404 })
        }

        // Return products back to stock
        for (const item of sale.saleItems) {
            if (item.productId) {
                await prisma.product.update({
                    where: { id: item.productId },
                    data: {
                        quantity: {
                            increment: item.quantity
                        }
                    }
                })
            }
        }

        // Delete payment methods
        await prisma.paymentMethod.deleteMany({
            where: { saleId: invoiceNo }
        })

        // Delete sale items
        await prisma.saleItem.deleteMany({
            where: { saleId: invoiceNo }
        })

        // Delete the sale
        await prisma.sale.delete({
            where: { invoiceNo }
        })

        return NextResponse.json({ 
            message: "Sale deleted successfully and products returned to stock" 
        })

    } catch (error) {
        console.error("Error deleting sale:", error)
        return NextResponse.json({ error: "Failed to delete sale" }, { status: 500 })
    }
}
