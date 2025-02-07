import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'

export async function POST(req:NextRequest) {
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
        .then(() => {
            return NextResponse.json({
                message: "Successfully Added Data",
            }, { status: 201 })
        }).catch(() => {
            return NextResponse.json({
                message: "Some Error Occurred!",
            }, { status: 400 })
        })
        
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
        }).then(() => {
            return NextResponse.json({
                message: "Successfully Added Data",
            }, { status: 201 })
        }).catch(() => {
            return NextResponse.json({
                message: "Some Error Occurred!",
            }, { status: 400 })
        })
    }

    return NextResponse.json({})
}