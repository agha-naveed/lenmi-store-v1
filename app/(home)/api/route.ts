import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnection()

    const response = await Product.find().limit(3)
    const trending = await Product.find().limit(2)
    
    
    if(response && trending){
        return NextResponse.json({
            message: "ok",
            trending,
            data: response,
        }, { status: 200 })
    }
    else {
        return NextResponse.json({
            message: "some problem occurred!",
        }, { status: 404 })
    }
}