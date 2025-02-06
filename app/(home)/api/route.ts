import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextResponse } from "next/server";

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