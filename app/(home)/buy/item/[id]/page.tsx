'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'

export default function page() {
  
  let param = useParams()

  const [productData, setProductData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/buy/item/${param.id}/api`)

      if(res.status == 200) {
        setProductData(await res.data.data)
      }
    }
    fetchData()
  })  

  return (
    <div className='container mx-auto'>
      
    </div>
  )
}