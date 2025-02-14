import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import ProductReview from "@/lib/database/model/product-review";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    let p_id = await params

    let data = await Product.findById(p_id.id)

    const cookie = await cookies()

    let objId = cookie.get("u_obj_i")

    try {
        if(!data) {
            return NextResponse.json({message: "No data with given ID"}, { status: 404 })
        }
        return NextResponse.json({
            message: "ok",
            data,
            login: objId ? true : false
        }, { status: 200})

    } catch(err) {
        return NextResponse.json({message: "No data with given ID"}, { status: 404 })
    }
}


export async function POST(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    
    await dbConnection()


    const cookie = await cookies()

    let objId = cookie.get("u_obj_i")?.value

    let decodedData = jwt.verify(objId || "", process.env.JWT_CODE || "") as { obj_id: string };

    let param = await params
    let productId = param.id

    
    let isExist = await ProductReview.findOne({ userId: decodedData.obj_id, productId })

    if(isExist) {
        return NextResponse.json({
            message: "duplicate entry"
        }, { status: 409 })
    }
    else {
        return NextResponse.json({
            message: "ok"
        }, { status: 200 })
    }
}

export async function PATCH(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    
    await dbConnection()

    let data = await req.json()

    const cookie = await cookies()

    let objId = cookie.get("u_obj_i")?.value

    let decodedData = jwt.verify(objId || "", process.env.JWT_CODE || "") as { obj_id: string };

    let param = await params
    let productId = param.id

        await ProductReview.insertMany([
            {
                userId: decodedData.obj_id,
                productId,
                rating: data.rating,
                comment: data.data,
                images: data.images
            }
        ])

        return NextResponse.json({
            message: 'ok',
        }, { status: 201 })
}