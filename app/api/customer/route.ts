import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req:NextRequest){
    const {
        address,
        company,
        email,
        name,
        phone,
        userType,
        wholesale,
        warehouseId
    } = await req.json()

        try {
            const newcustomer = await prisma.customer.create({
                data:{
                    name,
                    type:userType,
                    companyName:company,
                    email,
                    address,
                    warehousesId:warehouseId,
                    phone:phone
                }
            })
            console.log(newcustomer)
            return NextResponse.json("ok",{status:201})
        } catch (error) {
            return NextResponse.json("",{status:500})
            
        }finally{
            await prisma.$disconnect()
        }
        
}