import React from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";

export default function page() {
  return (
    <section className='container mx-auto flex'>
      <div className='flex gap-1'>
        
        <div className='w-[400px] h-[400px] p-3 overflow-hidden'>
          <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
        </div>

        <div className='w-[90%] p-6 h-auto'>
          <h2 className='font-opensans font-semibold text-2xl'>Mens Cotton Jacket</h2>
          
          <div className='mt-3 mb-5 flex flex-col gap-1'>
            <div className='flex gap-3'>
              <div className='flex gap-1 items-center'>
                <span>Rating:</span>
                <span className='flex text-orange-500'>
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                  <GoStarFill />
                </span>
              </div>
              <div>|</div>
              <div className='font-opensans'>
                10000+ Sold
              </div>
            </div>

            <div className='flex gap-1 font-opensans items-center'>
              Category:
              <span className='font-semibold text-orange-500'>Men's Clothing</span>
            </div>
          </div>

          <div className='flex gap-[6px] my-2 items-end'>
            <span className='font-opensans font-bold text-[32px]'>PKR 55.99</span>
            <span className='text-gray-700 line-through relative bottom-[6px]'>PKR 999</span>
          </div>

          <div className='grid'>
            <span className='my-2'>Color: Black</span>
            <div className='flex gap-1'>
              <div className='w-[70px] h-[70px] cursor-pointer border p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
              <div className='w-[70px] h-[70px] cursor-pointer border border-gray-300 p-[3px]'>
                <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
              </div>
            </div>
          </div>

        </div>

      </div>


      <div className='font-opensans w-[300px] border border-black rounded-lg'>
        <div className='flex items-center justify-between  py-3 px-4'>
          <span className='font-semibold text-[15px]'>Ship to</span>
          <span className='flex gap-[2px] items-center font-medium text-[15px]'>
            <MdLocationOn />
            Pakistan
          </span>
        </div>

        <div className='w-full text-center h-20 bg-gradient-to-t from-transparent to-lightPeachClr'>
          <span className='text-[15px] font-bold tracking-[-1px]'>Lenmi Store Commitment</span>
        </div>
      </div>
    </section>
  )
}