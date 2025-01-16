import React from 'react'
import ProductCard from '../components/ProductCard'
import Carousel from '../components/Carousel'


export default function page() {
  return (
    <div className='w-full h-full'>
      <Carousel />
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}