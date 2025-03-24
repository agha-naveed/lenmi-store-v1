import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'
import Product from "@/lib/database/model/product";


export async function GET() {
    await dbConnection()
    

    const cookie = await cookies()

    const user_id = cookie.get("u_obj_i")?.value

    if(user_id) {
        const originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE ?? "") as { obj_id: string }

        const objdata = await Cart.findOne({ userId: originalId.obj_id })
        
        if(objdata) {
            const items = objdata.items
            const cartDatas:any = []

            await Promise.all(
                items.map(async (item:any) => {
                    const data = await Product.findById(item.productId)
                    cartDatas.push({data, itemQuantity: item.quantity})
                })
            )
            
            return NextResponse.json({
                message: "ok",
                data: cartDatas
            }, { status: 200 })

        }

        else {
            return NextResponse.json({
                message: "some error occurred"
            })
        }

    }
    else {
        return NextResponse.json({
            message: "some error occurred"
        })
    }
}

export async function POST(req:NextRequest) {
    await dbConnection()

    const fetchId = await req.json()
    const id = fetchId.id

    const cookie = await cookies()

    const user_id = cookie.get("u_obj_i")?.value
    const originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE) as { obj_id: string }


    const data = await Cart.findOne({userId: originalId.obj_id})

    console.log(data.items.length)
    if(data.items.length == 1) {
        await Cart.deleteOne({userId: originalId.obj_id})
    }
    else {
        await Cart.updateOne({
                userId: originalId.obj_id
            },
            {
                $pull: {
                    items: {
                        productId: id
                    }
                }
            }
        )
    }


    return NextResponse.json({
        message: "ok"
    }, { status: 201 })
}