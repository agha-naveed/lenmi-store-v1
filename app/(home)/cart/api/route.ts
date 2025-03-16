import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'

export async function POST(req:NextRequest) {
    await dbConnection()

    const data = await req.json();
    const product_objId = await data.id
    const product_quantity = await data.quantity
    
    const cookie = await cookies()
    
    const user_id = cookie.get("u_obj_i")?.value
    if(!user_id) {
        return NextResponse.json({
            message: "Some Error Occurred!",
        }, { status: 400 })
    }

    if(user_id) {
        const originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE) as { obj_id: string }

        const isExist = await Cart.findOne({userId: originalId.obj_id})
        
        if(!isExist) {
            const dbData = await Cart.insertMany([
                {
                    userId: originalId.obj_id,
                    items: [{
                        productId: product_objId,
                        quantity: product_quantity
                    }]
                }
            ])

            if(dbData) {
                return NextResponse.json({
                    message: "Successfully Added Data",
                }, { status: 201 })
            }

            else {
                return NextResponse.json({
                    message: "Some Error Occurred!",
                }, { status: 400 })
            }
            
        }

        else {
            const dbData = await Cart.updateOne({
                userId: originalId.obj_id
            }, {
                $addToSet: {
                    items: {
                        productId: product_objId,
                        quantity: product_quantity
                    }
                }
            })
            
            if(dbData) {
                return NextResponse.json({
                    message: "Successfully Added Data",
                }, { status: 201 })
            }
            else {
                return NextResponse.json({
                    message: "Some Error Occurred!",
                }, { status: 400 })
            }
        }
    }
    
   
}


export async function GET() {
    await dbConnection()

    const cookie = await cookies()

    const user_id = cookie.get("u_obj_i")?.value

    if(user_id) {
        const originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE ?? "") as { obj_id: string }

        const data = await Cart.findOne({ userId: originalId.obj_id })

        if(data) {
            return NextResponse.json({
                message: "ok",
                data: data.items.length
            }, { status: 201 })
        }
        else {
            return NextResponse.json({
                message: "some error occurred",
                data: 0,
            }, { status: 201 })
        }
    }
    else {
        return NextResponse.json({
            message: "some error occurred"
        })
    }
}