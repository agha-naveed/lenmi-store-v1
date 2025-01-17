import React from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";

export default function page() {
  return (
    <section className='container mx-auto'>
      <div className='flex gap-1'>
        
        <div className='w-[400px] h-[400px] border border-black p-3 overflow-hidden'>
          <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
        </div>

        <div className='w-[90%] p-3 h-auto border border-black'>
          <h2 className='font-opensans font-semibold text-2xl'>Mens Cotton Jacket</h2>
          
          <div className='mt-3 mb-5'>
            <div className='flex gap-1 items-center'>
              <span>Rating:</span>
              <span className='flex'>
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
              </span>
            </div>

            <div className='flex gap-1 font-opensans items-center'>
              Category:
              <span className='font-semibold'>Men's Clothing</span>
            </div>
          </div>

          <div className='flex gap-[6px] items-end'>
            <span className='font-opensans font-bold text-[32px]'>PKR 55.99</span>
            <span className='text-gray-700 line-through relative bottom-[6px]'>PKR 999</span>
          </div>

        </div>

      </div>
    </section>
  )
}