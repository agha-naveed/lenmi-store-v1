import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import ProductReview from "@/lib/database/model/product-review";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/lib/database/model/user";


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    let p_id = await params

    let data = await Product.findById(p_id.id)

    let productReview = await ProductReview.find({productId: data}).populate('userId', 'first_name last_name profile_pic').limit(5)

    const cookie = await cookies()

    let objId = cookie.get("u_obj_i")

    let decodedData = jwt.verify(objId?.value || "", process.env.JWT_CODE || "") as { obj_id: string };

    
    try {
        if(!data) {
            return NextResponse.json({message: "No data with given ID"}, { status: 404 })
        }

        let user = await User.findById(decodedData.obj_id)

        if(user) {
            return NextResponse.json({
                message: "ok",
                data,
                reviews: productReview,
                userData: user,
                login: true,
            }, { status: 200})
        }
        else {
            return NextResponse.json({
                message: "ok",
                data,
                reviews: productReview,
                login: false
            }, { status: 200})
        }

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
                images: data.images,
                date: Date.now()
            }
        ])

        return NextResponse.json({
            message: 'ok',
        }, { status: 201 })
}