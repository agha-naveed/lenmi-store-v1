import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
// import 

import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    let p_id = await params

    let data = await Product.findOne({_id: p_id})


    return NextResponse.json({
        message: "ok",
        data
    }, { status: 200 })
}