import dbConnection from "@/lib/database/dbConnection"
import Product from "@/lib/database/model/product";
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    await dbConnection()

    const url = new URL(req.url); // Convert req.url into a URL object
    const searchParams = url.searchParams;

    let q = searchParams.get('q') || ""

    let query = q?.split('+').join(" ")

    let productData = await Product.find({ $text: { $search: query } })

    return NextResponse.json({
        data: productData,
        message: 'done'
    }, { status: 201 })

}