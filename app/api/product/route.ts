import { NextRequest, NextResponse } from "next/server";
import offlinePrisma from "@/lib/oflinePrisma";


export async function GET(req:NextRequest){
    const warehouseId = await req.json()
    
    try {
        const products = await offlinePrisma.product.findMany({where:{isDeleted:false}})

        return NextResponse.json(products,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
        
    }finally{
        await offlinePrisma.$disconnect()
    }
}

export async function POST(req:NextRequest){
    const {productName:name,productCode:barcode,productDescription:description,productQuantity:quantity,productTaxRate:taxRate,productUnit:unit,wholeSalePrice,retailPrice,costPrice:cost,warehouseId} = await req.json()
    try{
        
        const warehouse = await offlinePrisma.warehouses.findUnique({where:{warehouseCode:warehouseId,isDeleted:false}})
        
        if(!warehouse) return NextResponse.json("werehous does not exisi",{status:401})
            
        const checkProduct = await offlinePrisma.product.findMany({where:{barcode,warehousesId:warehouseId,isDeleted:false}})
       
        
        if(checkProduct.length > 0) return NextResponse.json("werehous Product Exist",{status:403})

        const product = await offlinePrisma.product.create({
            data:{
                name,
                barcode,
                wholeSalePrice:parseFloat(wholeSalePrice),
                retailPrice:parseFloat(retailPrice),
                cost:parseFloat(cost),
                taxRate:parseInt(taxRate),
                unit,
                quantity:parseInt(quantity),
                description,
                warehousesId:warehouseId
            }
        })

        
        
        return NextResponse.json(product,{status:201})
    }catch(error){
        
        return NextResponse.json(error,{status:500})
    }finally{
        await offlinePrisma.$disconnect()
    }
}

// export async function PUT(req:NextRequest){
//     const {productName:name,productCode:barcode,productDescription:description,productQuantity:quantity,productTaxRate:taxRate,productUnit:unit,wholeSalePrice,retailPrice,costPrice:cost} = await req.json()
//     try{  
//         const checkProduct = await offlinePrisma.product.findUnique({where:{barcode}})
//         if(checkProduct) return NextResponse.json("werehous Product Exist",{status:403})

//         const productUpdate = await offlinePrisma.product.update({
//             where:{barcode},
//             data:{
//                 name,
//                 barcode,
//                 wholeSalePrice:parseFloat(wholeSalePrice),
//                 retailPrice:parseFloat(retailPrice),
//                 cost:parseFloat(cost),
//                 taxRate:parseInt(taxRate),
//                 unit,
//                 quantity:parseInt(quantity),
//                 description,
//                 // warehousesId:warehouseId
//             }
//         })
        
//         return NextResponse.json(productUpdate,{status:201})
//     }catch(error){
        
//         return NextResponse.json(error,{status:500})
//     }finally{
//         await offlinePrisma.$disconnect()
//     }
// }

export async function DELETE(req:NextRequest){
    const {productId} = await req.json()
    try {
        const product = await offlinePrisma.product.findUnique({
            where:{
                id:productId
            }
        })

        if(!product) return NextResponse.json("product dose not exist",{status:402})

        const deleteProduct = await offlinePrisma.product.update({
            where:{
                id:productId
            },
            data:{
                isDeleted:true
            }
        })

        return NextResponse.json(deleteProduct,{status:200})
    } catch (error) {
        return NextResponse.json(error,{status:500})
        
    }finally{
        await offlinePrisma.$disconnect()
    }
}