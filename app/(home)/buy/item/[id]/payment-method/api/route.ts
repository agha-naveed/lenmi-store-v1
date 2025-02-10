import dbConnection from "@/lib/database/dbConnection";
import Buy from "@/lib/database/model/buy";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    await dbConnection()

    let {
        buyData, paymentData
    } = await req.json()

    let delivery_address = buyData.deliveryAddress;
    
    let isExist = await Buy.findOne({ userId: buyData.userId })

    if(!isExist) {
        await Buy.insertMany([
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
    }

    else {
        await Buy.updateOne({
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
    }

    return NextResponse.json({
        message: "done"
    }, { status: 201 })
    
}