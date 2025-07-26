import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()



export async function POST(req:NextRequest){
    const {productId} = await req.json()
    try {
        const product = await prisma.product.findUnique({
            where:{
                id:productId,isDeleted:false
            }
        })

        if(!product) return NextResponse.json("product dose not exist",{status:402})

        const deleteProduct = await prisma.product.update({
            where:{
                id:productId
            },
            data:{
                isDeleted:true
            }
        })

        return NextResponse.json(deleteProduct,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
        
    }finally{
        await prisma.$disconnect()
    }
}