'use client'

import React from 'react'
import plantRender from '@/images/plant_render.png'
import Image from 'next/image'

export default function CategoriesDesign() {
  return (
        <div className='flex container mx-auto py-10 font-opensans'>
            
            <div className='w-full h-auto bg-orangeClr'></div>

            <div className='w-fit h-full text-white flex flex-wrap justify-end gap-[11px]'>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-slate-600 hover:scale-105 text-black hover:text-white hover:shadow-custom-light'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center'>
                        <Image src={plantRender} alt='Plant render' className='w-auto !h-[130px]' />
                    </div>
                </div>
                <div className='bg-gray-700 w-72 h-36'>
                    <span>Home & Garden</span>
                </div>
                <div className='bg-gray-700 w-72 h-36'>
                    <span>Home & Garden</span>
                </div>
                <div className='bg-gray-700 w-72 h-36'>
                    <span>Home & Garden</span>
                </div>
                <div className='bg-gray-700 w-72 h-36'>
                    <span>Home & Garden</span>
                </div>
                <div className='bg-gray-700 w-72 h-36'>
                    <span>Home & Garden</span>
                    
                </div>
            </div>
        </div>
  )
}