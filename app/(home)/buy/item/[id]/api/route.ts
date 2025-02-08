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
    
    console.log(userIdCookie)
    if(userIdCookie) {
        let userId = jwt.verify(userIdCookie, process.env.JWT_CODE ?? "") as { obj_id: string }
        
        let userDetails = await Cart.findOne({userId: userId.obj_id})

        let cartItems = await userDetails.items
    
        if(cartItems.length > 0) {
            for(let i=0; i<cartItems.length; i++) {
                if(p_id.id == cartItems[i].productId) {
                    return NextResponse.json({
                        message: "done",
                        data: cartItems[i]
                    }, { status: 200 })
                }
            }
            return NextResponse.json({
                message: "Cart data does not match with product"
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