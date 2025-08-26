import { NextRequest, NextResponse } from "next/server";
import offlinePrisma from "@/lib/oflinePrisma";

export async function GET(req: NextRequest) {
    try {
        console.log("Testing quotation functionality...");

        // Check if we can access the quotation table
        const allQuotations = await offlinePrisma.quotation.findMany({
            take: 5,
            include: {
                selectedCustomer: true,
                quotationItems: true
            }
        });

        console.log("All quotations:", allQuotations);
        
        // Test the same query as the list API
        const testWarehouse = await offlinePrisma.warehouses.findFirst();
        console.log("Test warehouse:", testWarehouse);
        
        if (testWarehouse) {
            const warehouseQuotations = await offlinePrisma.quotation.findMany({
                where: { 
                    warehousesId: testWarehouse.warehouseCode,
                    isDeleted: false 
                },
                include: {
                    selectedCustomer: true,
                    quotationItems: true
                }
            });
            console.log("Warehouse quotations:", warehouseQuotations);
        }

        // Check if we can access customers
        const customers = await offlinePrisma.customer.findMany({
            take: 5
        });

        console.log("Sample customers:", customers);

        // Check if we can access warehouses
        const warehouses = await offlinePrisma.warehouses.findMany({
            take: 5
        });

        console.log("Sample warehouses:", warehouses);

        return NextResponse.json({
            message: "Test successful",
            quotationsCount: allQuotations.length,
            customersCount: customers.length,
            warehousesCount: warehouses.length,
            quotations: allQuotations,
            customers: customers.map(c => ({ id: c.id, name: c.name, warehouseId: c.warehousesId })),
            warehouses: warehouses.map(w => ({ id: w.id, code: w.warehouseCode, name: w.name }))
        });

    } catch (error) {
        console.error("Test error:", error);
        return NextResponse.json({ 
            error: "Test failed", 
            details: error.message,
            stack: error.stack 
        }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { warehouseId } = await req.json();
        
        console.log("Creating test quotation for warehouse:", warehouseId);

        // Get first customer for this warehouse
        const customer = await offlinePrisma.customer.findFirst({
            where: { warehousesId: warehouseId, isDeleted: false }
        });

        if (!customer) {
            return NextResponse.json({ error: "No customer found for this warehouse" }, { status: 400 });
        }

        // Get first product for this warehouse
        const product = await offlinePrisma.product.findFirst({
            where: { warehousesId: warehouseId, isDeleted: false }
        });

        if (!product) {
            return NextResponse.json({ error: "No product found for this warehouse" }, { status: 400 });
        }

        const quotationNo = `TEST-QUO-${Date.now()}`;
        const selectedPrice = product.retailPrice;
        const quantity = 2;
        const total = selectedPrice * quantity;

        // Create test quotation
        const quotation = await offlinePrisma.quotation.create({
            data: {
                quotationNo,
                subTotal: total,
                taxRate: 0,
                grandTotal: total,
                warehousesId: warehouseId,
                selectedCustomerId: customer.id,
                status: "pending"
            }
        });

        // Create quotation item
        await offlinePrisma.quotationItem.create({
            data: {
                quotationId: quotationNo,
                productId: product.id,
                productName: product.name,
                cost: product.cost,
                selectedPrice: selectedPrice,
                priceType: "retail",
                quantity: quantity,
                discount: 0,
                total: total,
                warehousesId: warehouseId
            }
        });

        return NextResponse.json({
            message: "Test quotation created successfully",
            quotation,
            customer: { id: customer.id, name: customer.name },
            product: { id: product.id, name: product.name }
        });

    } catch (error) {
        console.error("Error creating test quotation:", error);
        return NextResponse.json({ 
            error: "Failed to create test quotation", 
            details: error.message 
        }, { status: 500 });
    }
}