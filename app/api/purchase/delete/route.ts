import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function DELETE(req: NextRequest) {
    try {
        const { referenceNo } = await req.json()

        if (!referenceNo) {
            return NextResponse.json({ error: "Reference number is required" }, { status: 400 })
        }

        // First, get the purchase and its items
        const purchase = await prisma.purchase.findUnique({
            where: { referenceNo },
            include: {
                purchaseItem: true
            }
        })

        if (!purchase) {
            return NextResponse.json({ error: "Purchase not found" }, { status: 404 })
        }

        // Remove products from stock (reverse the purchase)
        for (const item of purchase.purchaseItem) {
            if (item.productId) {
                const product = await prisma.product.findUnique({
                    where: { id: item.productId }
                })

                if (product) {
                    // Check if we have enough stock to remove
                    if (product.quantity >= item.quantity) {
                        await prisma.product.update({
                            where: { id: item.productId },
                            data: {
                                quantity: {
                                    decrement: item.quantity
                                }
                            }
                        })
                    } else {
                        return NextResponse.json({ 
                            error: `Cannot delete purchase: Insufficient stock for product ${item.productName}. Current stock: ${product.quantity}, trying to remove: ${item.quantity}` 
                        }, { status: 400 })
                    }
                }
            }
        }

        // Delete purchase items
        await prisma.purchaseItem.deleteMany({
            where: { purchaseId: referenceNo }
        })

        // Delete the purchase
        await prisma.purchase.delete({
            where: { referenceNo }
        })

        return NextResponse.json({ 
            message: "Purchase deleted successfully and products removed from stock" 
        })

    } catch (error) {
        console.error("Error deleting purchase:", error)
        return NextResponse.json({ error: "Failed to delete purchase" }, { status: 500 })
    }
}