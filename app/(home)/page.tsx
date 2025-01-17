import React from 'react'
import ProductCard from '../components/products-cards/ProductCard'
import Carousel from '@/components/Carousel'
import TrendingProducts from '../components/products-cards/TrendingProducts'
import HorizontalCard from '@/components/products-cards/HorizontalCard'


export default function page() {

  return (
    <div className='w-full h-auto'>
      <div className='md:block hidden'>
        <Carousel />
      </div>

      <div className="container mx-auto">
        
        <div className='py-5'>
          <div className='flex'>
            <TrendingProducts />
            <HorizontalCard />
          </div>
          
          <div className="flex flex-wrap gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}