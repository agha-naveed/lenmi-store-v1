import dbConnection from "@/lib/database/dbConnection"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req:NextRequest) {
    await dbConnection()

    const url = new URL(req.url); // Convert req.url into a URL object
    const searchParams = url.searchParams;

    console.log(req.url)

    // let a = await req.json()
    // let searchQuery = await a.data
    
    // let productData = await Product.find({ $text: { $search: searchQuery } })

    return NextResponse.json({
        data: "",
        message: 'done'
    }, { status: 201 })

}