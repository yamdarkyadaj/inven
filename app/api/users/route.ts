import { PrismaClient } from "@/lib/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

export async function POST(req:NextRequest){
    const data = await req.json()
    const {username:userName,email,password,role,phone:phoneNumber,warehouse} = data.formData
    try {
        const existUser = await prisma.users.findUnique({where:{userName}})

        if(existUser) return NextResponse.json("userNameExist",{status:401})

        const hash = await bcrypt.hash(password,10)
        const user = await prisma.users.create({
            data:{
                userName,email,password:hash,role,phoneNumber,warehousesId:warehouse
            }
        }) 
     return NextResponse.json(user,{status:201})
    } catch (error) {
     return NextResponse.json(error,{status:500})
    }finally{
     prisma.$disconnect()
    }
}

export async function GET(){
    try {
        const users = await prisma.users.findMany()
        return NextResponse.json(users,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }finally{
        prisma.$disconnect()
    }
}