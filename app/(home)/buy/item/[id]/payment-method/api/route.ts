import dbConnection from "@/lib/database/dbConnection";
import Buy from "@/lib/database/model/buy";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export async function POST(req:NextRequest) {
    await dbConnection()

    const {
        buyData, paymentData
    } = await req.json()

    const delivery_address = buyData.deliveryAddress;
    
    const isExist = await Buy.findOne({ userId: buyData.userId })
    console.log(isExist)

    if(!isExist) {
        const response = await Buy.insertMany([
            {
                userId: buyData.userId,
                items: {
                    productId: buyData.productId,
                    quantity: buyData.quantity,
                    deliveryAddress: {
                        recipientName: delivery_address.recipientName,
                        phone_number: delivery_address.phone_number,
                        district: delivery_address.district,
                        address: delivery_address.address
                    },
                    paymentMethod: buyData.payMethod,
                    paymentDetails: {
                        bankName: paymentData.bank,
                        cardNumber: paymentData.cardNumber,
                        cvv: paymentData.cvv,
                        expiryDate: paymentData.expiryDate
                    }
                }
            }
        ])
        if(response) {
            return NextResponse.json({
                message: "ok"
            }, { status: 201 })
        }
        else {
            return NextResponse.json({
                message: "error",
            }, { status: 400 })
        }
    }

    else {
        const A = await Buy.updateOne({
            userId: buyData.userId
        },
        {
            $addToSet: {
                items: {
                    productId: buyData.productId,
                    quantity: buyData.quantity,
                    deliveryAddress: {
                        recipientName: delivery_address.recipientName,
                        phone_number: delivery_address.phone_number,
                        district: delivery_address.district,
                        address: delivery_address.address
                    },
                    paymentMethod: buyData.payMethod,
                    paymentDetails: {
                        bankName: paymentData.bank,
                        cardNumber: paymentData.cardNumber,
                        cvv: paymentData.cvv,
                        expiryDate: paymentData.expiryDate
                    }
                }
            }        
        })
        console.log(A)
    }

    return NextResponse.json({
        message: "done",
        data: {
            productId: buyData.productId,
            quantity: buyData.quantity,
            deliveryAddress: {
                recipientName: delivery_address.recipientName,
                phone_number: delivery_address.phone_number,
                district: delivery_address.district,
                address: delivery_address.address
            },
            paymentMethod: buyData.payMethod,
            paymentDetails: {
                bankName: paymentData.bank,
                cardNumber: paymentData.cardNumber,
                cvv: paymentData.cvv,
                expiryDate: paymentData.expiryDate
            }
        }
    }, { status: 201 })
    
}

export async function GET() {
    const cookie = await cookies()
    const userIdCookie = cookie.get("u_obj_i")?.value

    return userIdCookie ? NextResponse.json({ message: "ok" }) : NextResponse.json({ message: 'you are logged out' })
}