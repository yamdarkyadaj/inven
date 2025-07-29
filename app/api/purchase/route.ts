
import { NextRequest, NextResponse } from "next/server";

import onlinePrisma from "@/lib/onlinePrisma";
import offlinePrisma from "@/lib/oflinePrisma";

export async function POST(req: NextRequest) {
    const {
        items,
        referenceNo,
        subtotal,
        taxRate,
        taxAmount,
        shipping,
        grandTotal,
        paidAmount,
        balance,
        notes,
        warehouseId,
        supplierId,
        status
    } = await req.json()

    try {
        const warehouse = await offlinePrisma.warehouses.findUnique({
            where: { warehouseCode: warehouseId,isDeleted:false }
        })
            
        if (!warehouse) {
            return NextResponse.json("Warehouse does not exist", { status: 401 })
        }

        const purchase = await offlinePrisma.purchase.create({
            data: {
                referenceNo,
                subTotal: subtotal,
                taxRate,
                notes,
                amountPaid: paidAmount,
                grandTotal,
                paidAmount,
                balance,
                warehousesId: warehouseId,
                supplierId
            }
        })

        // Create purchase items
        for (let i = 0; i < items.length; i++) {
            await offlinePrisma.purchaseItem.create({
                data: {
                    purchaseId: purchase.referenceNo,
                    productName: items[i].productName,
                    productId: items[i].productId,
                    cost: items[i].cost,
                    selectedPrice: items[i].selectedPrice,
                    priceType: items[i].priceType,
                    quantity: items[i].quantity,
                    discount: items[i].discount,
                    total: items[i].total,
                    warehousesId: warehouseId,
                    profit: 0, // For purchases, profit is 0
                }
            })

           

            // Update product quantity (increase stock for purchases)
            await offlinePrisma.product.update({
                where: { id:items[i].productId,isDeleted:false },
                data: {
                    quantity: {
                        increment: items[i].quantity
                        
                    },
                    sync:false
                }
            })
        }

        return NextResponse.json({ 
            message: "Purchase order created successfully",
            purchase: purchase
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 500 })
    }
}