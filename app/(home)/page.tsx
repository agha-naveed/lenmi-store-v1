'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products-cards/ProductCard'
import Carousel from '@/components/Carousel'
import TrendingProducts from '../components/products-cards/TrendingProducts'
import HorizontalCard from '@/components/products-cards/HorizontalCard'
import CategoriesDesign from '../components/CategoriesDesign'
import axios from 'axios'

export default function page() {

  const [productData, setProductData] = useState<object[]>()
  const [trending, setTrending] = useState<object[]>()

  useEffect(() => {
    let productCardData = async () => {
      const res = await axios.get("/api")
      if(res.status == 200) {
        setProductData(await res.data.data)
        setTrending(await res.data.trending)
      }
    }

    productCardData()
  }, [])


  return (
    <div className='w-full h-auto'>
      <div className='md:block hidden'>
        <Carousel />
      </div>

      <div className="container mx-auto">
        
        <div className='py-5'>
          <div className='flex gap-2 justify-around flex-wrap'>
            {
              // trending ?
              // trending.map((item, index) => {
                // return (
                  <TrendingProducts data={trending?.[0]} />
                // )
              // }) : "Loading..."
            }

            <div className='grid gap-2'>
              <HorizontalCard />
              <span className='sm:block hidden'>
                <HorizontalCard />
              </span>
            </div>
            <span className='sm:block hidden'>
              <TrendingProducts data={trending?.[1]} />
            </span>
          </div>

          <div>
            <CategoriesDesign />
          </div>
          
          {
            productData ? 
            <div className="flex flex-wrap gap-5">
              {
                productData.map((item, index) => {
                  return (
                    <ProductCard key={`product-card-${index}`} data={item} />
                  )
                })
              }
            </div>
            : null
          }
        </div>
      </div>
    </div>
  )
}