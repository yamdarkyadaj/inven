import { PrismaClient } from "@/prisma/generated/offline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    const { warehouseId } = await req.json()

    try {
        const suppliers = await prisma.supplier.findMany({
            where: {
                warehousesId: warehouseId
            },
            orderBy: {
                name: 'asc'
            }
        })

        return NextResponse.json(suppliers)
    } catch (error) {
        console.log(error)
        return NextResponse.json(error, { status: 500 })
    }
}