import dbConnection from "@/lib/database/dbConnection";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import Cart from "@/lib/database/model/cart";
import Product from "@/lib/database/model/product";
import User from "@/lib/database/model/user";

export async function GET(req:NextRequest, { params }: { params: Promise<{ id: string }> }) {
    await dbConnection()

    const p_id = await params
    
    const cookie = await cookies()
    const userIdCookie = cookie.get("u_obj_i")?.value
    
    
    if(userIdCookie) {
        const userId = jwt.verify(userIdCookie, process.env.JWT_CODE ?? "") as { obj_id: string }
        
        const userDetails = await Cart.findOne({userId: userId.obj_id})

        const cartItems = await userDetails.items
    
        if(cartItems.length > 0) {
            for(let i=0; i<cartItems.length; i++) {
                if(p_id.id == cartItems[i].productId) {
                    const productDetails = await Product.findById(cartItems[i].productId)

                    return NextResponse.json({
                        message: "done",
                        data: {
                            userData: userDetails.userId,
                            productData: productDetails,
                            itemQuantity: cartItems[i].quantity
                        }
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

export async function POST(req:NextRequest) {
    await dbConnection()

    const { productId, recipients_name, phone_number, district, address, userId, itemQuantity } = await req.json()

    const cookie = await cookies()
    const user_id = cookie.get("u_obj_i")?.value
    const originalId = jwt.verify(user_id ?? "", process.env.JWT_CODE ?? "") as { obj_id: string }


    await User.findByIdAndUpdate(
        
    )


    return NextResponse.json({ 
        message: "done"
    }, { status: 201 })
}