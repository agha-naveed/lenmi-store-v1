import React from 'react'
import ImgSlider from '@/components/ImgSlider'
import ProductCard from '../components/ProductCard'

export default function page() {
  return (
    <div className='w-full h-full'>
      <ImgSlider />
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