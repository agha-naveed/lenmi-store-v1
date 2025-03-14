import dbConnection from "@/lib/database/dbConnection"
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    await dbConnection()

    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const q = searchParams.get('q') || ""
    const category = searchParams.get('category') || "all"
    const shippedOverseas = searchParams.get('shippedOverseas') || ""
    const color = searchParams.get('color') || ""
    const warrantyType = searchParams.get('warrantyType') || ""


    const query = q?.split('+').join(" ")

    console.log(searchParams)
    
    const queryConditions:any = {
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
    
    
    const productData = await Product.find(queryConditions);
    
    return NextResponse.json({
        data: productData,
        message: 'done'
    }, { status: 201 });
}