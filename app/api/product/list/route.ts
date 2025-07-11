import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()


export async function POST(req:NextRequest){
    const {warehouseId:warehousesId} = await req.json()
    console.log(warehousesId)
    try {
        const products = await prisma.product.findMany({where:{warehousesId}})

        console.log(products)
        return NextResponse.json(products,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
        
    }finally{
        await prisma.$disconnect()
    }
}

