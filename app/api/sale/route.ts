import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req:NextRequest){
    const {
        items,
        invoiceNo,
        subtotal,
        totalDiscount,
        taxRate,
        taxAmount,
        grandTotal,
        paymentMethod,
        amountPaid,
        balance,
        notes,
        cashier,
        warehouseId
    } = await req.json()

   try {
    const warehouse = await prisma.warehouses.findUnique({where:{warehouseCode:warehouseId}})
            
    if(!warehouse) return NextResponse.json("werehous does not exisi",{status:401})

    const sale = await prisma.sale.create({
        data:{
            invoiceNo,
            subTotal:subtotal,
            taxRate,
            paymentMethod,
            notes,
            amountPaid,
            grandTotal,
            paidAmount:amountPaid,
            balance,
            warehousesId:warehouseId
        }
    })

    console.log(sale)

    for (let i = 0; i < items.length; i++) {
        const savedSales = await prisma.saleItem.create({
            data:{
                saleId:sale.invoiceNo,
                productName:items[i].productName,
                productId:items[i].productCode,
                cost:items[i].costPrice,
                selectedPrice:items[i].salePrice,
                priceType:items[i].priceType ,
                quantity:items[i].quantity,
                discount:items[i].discount,
                total:items[i].total,
                warehousesId:warehouseId,
                profit:items[i].profit,
            }
        })
        console.log(savedSales)
    }
    
    
    
    return NextResponse.json("data")
   } catch (error) {
    console.log(error)
    NextResponse.json(error,{status:500})
   }
}