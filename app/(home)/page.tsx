import React from 'react'
import ProductCard from '../components/ProductCard'
import Carousel from '@/components/Carousel'
export default function page() {


  return (
    <div className='w-full h-auto'>
      <div className='md:block hidden'>
        <Carousel />
      </div>
      <div className="container mx-auto py-5">
        <div className="flex flex-wrap gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}