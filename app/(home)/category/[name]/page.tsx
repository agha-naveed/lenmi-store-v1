'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/app/components/products-cards/ProductCard'

export default function page() {
  const param = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/category/${param.name}/api`)
      if(res.status == 200) {
        setProducts(await res.data.data)
      }
    }
    fetchData()
  }, [])

  return (
    <section className='font-opensans'>
      <div className='flex flex-col justify-center items-center h-72 bg-electronics bg-cover bg-center text-white'>
        <span className='font-semibold text-xl'>Category</span>
        <h3 className='font-bold text-[42px] relative -top-2'>Electronics</h3>
      </div>

      <div className='container mx-auto flex flex-wrap gap-5 px-3 py-8'>
        {
          products.map((item, index) => {
            return (
              <ProductCard key={`product-by-category-${index}`} data={item} />
            )
          })
        }
      </div>
    </section>
  )
}