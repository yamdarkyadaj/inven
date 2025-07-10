import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const data = await req.json()
    try {
        console.log(data)
    } catch (error) {
        return NextResponse.json(error,{status:500})
    }
}