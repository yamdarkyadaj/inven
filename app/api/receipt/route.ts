import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient()
export async function POST(req:NextRequest){

    const {
        companyName,
        businessName,
        address,
        city,
        state,
        country,
        phone,
        email,
        website,
        warehousesId
    } = await req.json()

    try {

        const update = await prisma.receiptSettings.update({
            where:{warehousesId},
            data:{
                address,
                businessName,
                city,
                companyName,
                country,
                email,
                phone,
                state,
                website
            }
        })

        return NextResponse.json(update,{status:200})
        
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }
}