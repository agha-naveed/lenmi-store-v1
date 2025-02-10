import dbConnection from "@/lib/database/dbConnection";
import Buy from "@/lib/database/model/buy";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    await dbConnection()

    let {
        buyData, paymentData
    } = await req.json()

    let delivery_address = buyData.deliveryAddress;
    
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
                }
            }
        }
    ])
}