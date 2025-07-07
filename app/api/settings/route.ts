import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(){
    const data = await prisma.settings.findUnique({
        where:{setting_id:1}
    })
    return NextResponse.json(data,{status:200})
}