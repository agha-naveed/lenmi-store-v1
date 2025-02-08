import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import Cart from "@/lib/database/model/cart";

export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    let p_id = await params
    
    let cookie = await cookies()
    let userIdCookie = cookie.get("u_obj_i")?.value

    if(userIdCookie) {
        let userId = jwt.verify(userIdCookie, process.env.JWT_CODE ?? "") as { obj_id: string }

        let userDetails = await Cart.findOne({userId: userId.obj_id})

        if(userDetails.items.length > 0) {
            userDetails.items.map((item:any) => {
                if(p_id.id == item.productId) {
                    return NextResponse.json({
                        message: "done",
                        data: item
                    }, { status: 200 })
                }
            })
        }
        else {
            return NextResponse.json({
                message: "Cart is Empty"
            })
        }   
    }
    else {
        return NextResponse.json({
            message: "logout"
        })
    }

}