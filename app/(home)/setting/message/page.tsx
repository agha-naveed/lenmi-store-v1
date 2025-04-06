'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

interface APIItems {
    imgURL: string;
}
interface APIResponse {
    items: APIItems[];
}

export default function page() {
    const [message, setMessage] = useState<APIResponse>()
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
            <div className="w-[150px] h-[150px] rounded-lg outline ring-offset-2 overflow-hidden">
                {
                    message?.[0] ?
                    <Image src={message[0]?.items[0].imgURL} className="w-full h-full object-cover" alt="" width={200} height={200}/>
                    : ""
                }
            </div>
        </div>
    )
}