'use client'
import { useEffect, useState } from "react"
import axios from "axios"

export default function page() {
    const [message, setMessage] = useState()
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
            
        </div>
    )
}