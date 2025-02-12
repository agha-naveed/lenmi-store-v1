import dbConnection from "@/lib/database/dbConnection"
import Product from "@/lib/database/model/product";
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    await dbConnection()

    const url = new URL(req.url);
    const searchParams = url.searchParams;

    let q = searchParams.get('q') || ""
    let category = searchParams.get('category') || "all"
    let shippedOverseas = searchParams.get('shippedOverseas') || ""
    let color = searchParams.get('color') || ""
    let warrantyType = searchParams.get('warrantyType') || ""


    let query = q?.split('+').join(" ")

    
    let queryConditions:any = {
        $text: {
            $search: query
        }
    };
    
    if (category !== "all") {
        queryConditions.category = category;
    }
    
    if (shippedOverseas) {
        queryConditions.shippedOverseas = shippedOverseas;
    }
    
    if (color) {
        queryConditions.color = color;
    }
    
    if (warrantyType) {
        queryConditions.warrantyType = warrantyType;
    }
    
    
    let productData = await Product.find(queryConditions);
    
    console.log(productData)
    return NextResponse.json({
        data: productData,
        message: 'done'
    }, { status: 201 });

    
}