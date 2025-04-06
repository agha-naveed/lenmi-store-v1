'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

interface Delivery_Address {
    recipientName: string;
    phone_number: string;
    district: string;
    address: string;
}
interface APIItems {
    imgURL: string;
    productName: string;
    productPrice: string;
    quantity: string;
    paymentMethod: string;
    deliveryAddress: Delivery_Address;
}
interface APIResponse {
    items: APIItems[];
    userId: string;
}

export default function Page() {
    const [message, setMessage] = useState<APIResponse[]>()
    useEffect(() => {
        async function getData() {
            const res = await axios.get("/setting/message/api")
            const restr = await res.data
            if(restr.isExist.email.length > 0) {
                console.log(await res.data.totalMessages)
                setMessage(await res.data.totalMessages)
            }
        }
        getData()
    }, [])

    return (
        <div>
            {
                message?.[0] ?
                message.map((i, idx) => (
                    <div className="p-5 flex gap-5 border-b border-b-lightGray hover:bg-lightGray transition-all cursor-pointer group" key={`seller-notification-${idx}`}>
                        <div className="!w-[120px] h-[120px] border-b border-b-lightGray rounded-lg outline outline-1 overflow-hidden">
                            <Image src={i?.items[0].imgURL} className="w-full h-full object-cover" alt="" width={200} height={200}/>
                        </div>
                        <div className="lg:w-[90%] w-[300px]">
                            <h3 className="font-semibold group-hover:text-orangeClr line-clamp-2 mb-2">
                                {i?.items[0].productName}
                            </h3>
                            <p>
                                Price: <b>{(i?.items[0].productPrice).toLocaleString()} Pkr</b>
                            </p>
                            <p>
                                Quantity: <b>{i?.items[0].quantity}</b>
                            </p>

                            <div className="py-2 hidden group-hover:block">
                                <div>
                                    <div className="flex flex-col">
                                        <span>
                                            Recipient's Name: <b>
                                                {i?.items[0].deliveryAddress.recipientName}
                                            </b>
                                        </span>
                                        <span>
                                            Cell Number:
                                            <b>
                                                {i?.items[0].deliveryAddress.phone_number}
                                            </b>
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>
                                            District: <b>
                                                {i?.items[0].deliveryAddress.district}
                                            </b>
                                        </span>
                                        <span>
                                            Address:
                                            <b>
                                                {i?.items[0].deliveryAddress.address}
                                            </b>
                                        </span>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                )) : ""
            }
        </div>
    )
}