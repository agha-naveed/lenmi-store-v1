import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, { params }: { params: Promise<{ name: string }> }) {
    await dbConnection()

    const categ_name = await params

    try {
        let data = await Product.aggregate([
            {
                $match: {
                    category: categ_name.name
                }
            }
        ])

        return NextResponse.json({
            message: "ok",
            data
        }, { status: 200 })
    } catch(err) {
        return NextResponse.json({
            message: "couldn't find any data",
        }, { status: 404 })
    }
}