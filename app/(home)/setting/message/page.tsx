'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

interface APIItems {
    imgURL: string;
}
interface APIResponse {
    items: APIItems[];
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
                    <React.Fragment key={`seller-notification-${idx}`}>
                        <div className="w-[120px] h-[120px] mb-10 border-b border-b-lightGray rounded-lg outline outline-1 overflow-hidden">
                            <Image src={i?.items[0].imgURL} className="w-full h-full object-cover" alt="" width={200} height={200}/>
                        </div>
                        <div>
                            <h3>
                            </h3>
                        </div>
                    </React.Fragment>
                )) : ""
            }
        </div>
    )
}