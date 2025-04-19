'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { MdCancelScheduleSend } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { redirect } from "next/navigation";

interface Delivery_Address {
    recipientName: string;
    phone_number: string;
    district: string;
    address: string;
}
interface APIItems {
    imgURL: string;
    productId: string;
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
            try {
                const res = await axios.get("/setting/message/api")
                const restr = await res.data
                if(restr.isExist.email.length > 0) {
                    console.log(await res.data.totalMessages)
                    setMessage(await res.data.totalMessages)
                }
            } catch(err) {
                alert("You are not logged in!")
                redirect("/")
            }
        }
        getData()
    }, [])

    const confirmOrder = async (data: string) => {
        const res = await fetch("/setting/message/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        
    }

    return (
        <div>
            {
                message?.[0] ?
                message.map((i, idx) => (
                    <div className="p-5 flex gap-5 border-b border-b-lightGray hover:bg-lightGray rounded-lg  transition-all cursor-pointer group" key={`seller-notification-${idx}`}>
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

                            <div className="py-2 hidden group-hover:flex justify-between">
                                <div>
                                    <div className="flex flex-col">
                                        <span>
                                            Recipient{"\'"}s Name: <b>
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

                                <div className="flex gap-2 self-end">
                                    <button className="flex transition-all items-center gap-2 bg-orangeClr hover:bg-orange-500 text-white py-2 px-4 rounded-md h-fit">
                                        <MdCancelScheduleSend className="text-[18px]" />
                                        <span>Cancel</span>
                                    </button>
                                    <button className="flex transition-all items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white py-2 px-4 rounded-md h-fit" onClick={() => confirmOrder(i?.items[0].productId)}>
                                        <FaArrowRight />
                                        <span>Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ""
            }
        </div>
    )
}