import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import ProductReview from "@/lib/database/model/product-review";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
import User from "@/lib/database/model/user";


export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    const p_id = await params

    const data = await Product.findById(p_id.id)

    const productReview = await ProductReview.find({productId: data}).populate('userId', 'first_name last_name profile_pic').limit(5)

    const productRating = await ProductReview.find({productId: data})

    let rate = 0
    let count = 0
    productRating.map(i => {
        rate += i.rating
        count++
    })
    

    const cookie = await cookies()

    const objId = cookie.get("u_obj_i")

    
    let user = "";


    try {
        if(!data) {
            return NextResponse.json({message: "No data with given ID"}, { status: 404 })
        }


        if(objId) {
            const decodedData = jwt.verify(objId?.value || "", process.env.JWT_CODE || "") as { obj_id: string };
            user = await User.findById(decodedData.obj_id)
        }
        

        if(user) {
            return NextResponse.json({
                message: "ok",
                data,
                reviews: productReview,
                rating: rate / count,
                totalRate: count,
                userData: user,
                login: true,
            }, { status: 200})
        }
        else {
            return NextResponse.json({
                message: "ok",
                data,
                totalRate: count,
                rating: rate / count,
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

    const objId = cookie.get("u_obj_i")?.value

    const decodedData = jwt.verify(objId || "", process.env.JWT_CODE || "") as { obj_id: string };

    const param = await params
    const productId = param.id


    const isExist = await ProductReview.findOne({ userId: decodedData.obj_id, productId })

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

    const data = await req.json()

    const cookie = await cookies()

    const objId = cookie.get("u_obj_i")?.value

    const decodedData = jwt.verify(objId || "", process.env.JWT_CODE || "") as { obj_id: string };

    const param = await params
    const productId = param.id

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

    const totalRating = await ProductReview.find({productId})
    let totalReviews = 0;

    let ratingSum = 0;
    
    for(let i=0; i<totalRating.length; i++) {
        totalReviews++;
        ratingSum += totalRating[i].rating;
    }

    const ratingAvg = ratingSum/totalReviews;


    await Product.updateOne({
        _id: productId
    },
    {
        $set: {
            rating: ratingAvg
        }
    })

    return NextResponse.json({
        message: 'ok',
    }, { status: 201 })
}