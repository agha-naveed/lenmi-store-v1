import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
// import User from "@/lib/database/model/product";


import { NextRequest, NextResponse } from "next/server";


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    let p_id = await params

    let data = await Product.findById(p_id.id)

    try {
        if(!data) {
            return NextResponse.json({message: "No data with given ID"}, { status: 404 })
        }
        return NextResponse.json({
            message: "ok",
            data
        }, { status: 200})

    } catch(err) {
        return NextResponse.json({message: "No data with given ID"}, { status: 404 })
    }
}

export async function POST(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {

}