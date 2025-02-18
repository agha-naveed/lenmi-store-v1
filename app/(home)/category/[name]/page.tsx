'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
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
      <div className='category-bg h-60 bg-electronics bg-cover bg-center text-white'>
        <h3 className='font-bold text-4xl text-center h-full place-content-center'>Electronics</h3>
      </div>

      <div className='container mx-auto flex flex-wrap'>
        <Suspense fallback={"<p>Loading...</p>"}>
          {
            products.map((item, index) => {
              return (
                <ProductCard key={`product-by-category-${index}`} data={item} />
              )
            })
          }
        </Suspense>
      </div>
    </section>
  )
}