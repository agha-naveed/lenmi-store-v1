import dbConnection from "@/lib/database/dbConnection";
import Product from "@/lib/database/model/product";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";


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
    await dbConnection()

    let data = await req.json();
    let product_objId = await data.id
    let product_quantity = await data.quantity
    
    let cookie = await cookies()
    
    let user_id = cookie.get("u_obj_i")?.value
    let originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE ?? "") as { obj_id: string }

    let isExist = await Cart.find({userId: originalId.obj_id})
    
    if(!isExist) {
        await Cart.insertMany([
            {
                userId: originalId.obj_id,
                items: [{
                    productId: product_objId,
                    quantity: product_quantity
                }]
            }
        ])
    }
    else {
        await Cart.updateOne({
            userId: originalId.obj_id
        }, {
            $addToSet: {
                items: {
                    productId: product_objId,
                    quantity: product_quantity
                }
            }
        })
    }

    return NextResponse.json({})
}