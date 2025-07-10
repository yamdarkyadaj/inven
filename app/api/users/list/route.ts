import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()


export async function POST(req:NextRequest){
    const {warehouseId} = await req.json()
    try {
        const users = await prisma.users.findMany({where:{warehousesId:warehouseId}})
        return NextResponse.json(users,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }finally{
        await prisma.$disconnect()
    }
}