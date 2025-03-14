'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/app/components/products-cards/ProductCard'

export default function Page() {
  const param = useParams()
  const [products, setProducts] = useState([])

  const paramName = param.name?.toString()
  let titleName = paramName?.split("-").join(" ")

  if(titleName?.includes("%26")) {
    titleName = titleName.split("%26").join("&")
  }

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
      <div className={` 
        flex flex-col
        justify-center
        items-center
        h-72
        ${paramName == "electronics" ?
        "bg-electronics" :
        paramName == "accessories" ?
        "bg-accessories" :
        paramName == "clothes" ?
        "bg-clothes" :
        paramName == 'home-and-garden' ?
        "bg-home-garden" :
        paramName == "home-improvement-%26-lighting" ?
        "bg-home-improvement" : "bg-sports"
        }
        bg-cover
        bg-center
        text-white
      `}>
        <span className='font-semibold text-xl'>Category</span>
        <h3 className='font-bold text-[42px] relative -top-2'>{titleName?.[0].toUpperCase()}{titleName?.slice(1)}</h3>
      </div>

      <div className='container mx-auto flex flex-wrap sm:gap-5 gap-2 sm:px-3 px-1 py-8 md:justify-start justify-center'>
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