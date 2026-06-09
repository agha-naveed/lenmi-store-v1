import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnection()

    const response = await Product.find().lean().limit(3)
    const trending = await Product.find().lean().limit(2)
    
    
    if(response && trending){
        return NextResponse.json({
            message: "ok",
            trending,
            data: response,
        }, { status: 200, headers: {
            'Access-Control-Allow-Origin': '*', // Allows your Electron app to connect
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        } })
    }
    else {
        return NextResponse.json({
            message: "some problem occurred!",
        }, { status: 404, headers: {
            'Access-Control-Allow-Origin': '*', // Allows your Electron app to connect
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        } })
    }
}
