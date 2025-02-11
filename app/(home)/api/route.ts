import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnection()

    const response = await Product.find().limit(3)

    if(response){
        return NextResponse.json({
            message: "ok",
            data: response
        }, { status: 200 })
    }
    else {
        return NextResponse.json({
            message: "some problem occurred!",
            data: response
        }, { status: 404 })
    }
}

export async function POST(req:NextRequest) {
    await dbConnection()
    
    let a = await req.json()
    let searchQuery = a.data

    let productData = await Product.find({ $text: { $search: searchQuery } })

    return NextResponse.json({
        data: productData,
        message: 'done'
    }, { status: 201 })

}