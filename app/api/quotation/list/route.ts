import { NextRequest, NextResponse } from "next/server";
import offlinePrisma from "@/lib/oflinePrisma";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const warehouseId = searchParams.get('warehouseId')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const status = searchParams.get('status') || ''

    console.log("Quotation List API called with:", { warehouseId, page, limit, search, status })

    try {
        if (!warehouseId) {
            console.log("No warehouse ID provided")
            return NextResponse.json("Warehouse ID is required", { status: 400 })
        }

        const skip = (page - 1) * limit

        // Build where clause
        const whereClause: any = {
            warehousesId: warehouseId,
            isDeleted: false
        }

        if (search) {
            whereClause.OR = [
                { quotationNo: { contains: search } },
                { selectedCustomer: { name: { contains: search } } },
                { notes: { contains: search } }
            ]
        }

        if (status) {
            whereClause.status = status
        }

        console.log("Where clause:", whereClause)

        // First, check if the table exists and get basic quotations
        let quotations = [];
        let totalCount = 0;

        try {
            // Try to get quotations with minimal includes first
            quotations = await offlinePrisma.quotation.findMany({
                where: whereClause,
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            });

            console.log("Basic quotations found:", quotations.length);

            // If basic query works, try with includes
            if (quotations.length > 0 || true) { // Always try the full query
                const [fullQuotations, count] = await Promise.all([
                    offlinePrisma.quotation.findMany({
                        where: whereClause,
                        include: {
                            selectedCustomer: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true,
                                    phone: true
                                }
                            },
                            quotationItems: {
                                where: { isDeleted: false },
                                select: {
                                    id: true,
                                    productName: true,
                                    quantity: true,
                                    selectedPrice: true,
                                    total: true
                                }
                            }
                        },
                        orderBy: { createdAt: 'desc' },
                        skip,
                        take: limit
                    }),
                    offlinePrisma.quotation.count({
                        where: whereClause
                    })
                ]);

                quotations = fullQuotations;
                totalCount = count;
            }
        } catch (includeError) {
            console.error("Error with includes, trying basic query:", includeError);
            
            // Fallback to basic query without includes
            quotations = await offlinePrisma.quotation.findMany({
                where: whereClause,
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit
            });

            totalCount = await offlinePrisma.quotation.count({
                where: whereClause
            });
        }

        console.log("Found quotations:", quotations.length, "Total count:", totalCount)

        const totalPages = Math.ceil(totalCount / limit)

        const result = {
            quotations,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1
            }
        }

        console.log("Returning result:", result)

        return NextResponse.json(result)

    } catch (error) {
        console.error("Error fetching quotations list:", error)
        return NextResponse.json("Error fetching quotations", { status: 500 })
    }
}