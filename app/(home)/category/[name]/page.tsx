'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const param = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await axios.get(`/category/${param.name}/api`)
    //   if(res.status == 200) {
    //     setProducts(await res.data.data)
    //   }
    // }
    // fetchData()
  }, [])

  return (
    <section>
      <div className='category-bg h-48 bg-slate-800 text-white'>
        <h3>Electronics</h3>
      </div>
    </section>
  )
}