import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import Cart from "@/lib/database/model/cart";
import jwt from 'jsonwebtoken'
import Product from "@/lib/database/model/product";


export async function GET() {
    await dbConnection()
    

    let cookie = await cookies()

    let user_id = cookie.get("u_obj_i")?.value

    if(user_id) {
        let originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE ?? "") as { obj_id: string }

        let data = await Cart.findOne({ userId: originalId.obj_id })
        let items = data.items
        
        let cartDatas:any = []

        await Promise.all(
            items.map(async (item:any, index:number) => {
                let data = await Product.findById(item.productId)
                await cartDatas.push(data)
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