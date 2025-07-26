import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req:NextRequest){
    const {
        warehouseId
    } = await req.json()
        try {
            const them = await prisma.customer.findMany({where:{warehousesId:warehouseId,isDeleted:false}})
            return NextResponse.json(them,{status:201})
        } catch (error) {
            return NextResponse.json("",{status:500})
        }finally{
            await prisma.$disconnect()
        }
        
}