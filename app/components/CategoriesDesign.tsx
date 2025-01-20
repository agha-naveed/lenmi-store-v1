'use client'

import React from 'react'
import plantRender from '@/images/plant_render.png'
import Image from 'next/image'

export default function CategoriesDesign() {
  return (
        <div className='flex container mx-auto py-10 font-opensans'>
            
            <div className='w-full h-auto bg-orangeClr'></div>

            <div className='w-fit h-full text-white flex flex-wrap justify-end gap-[11px]'>
            <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                <div className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </div>
                
            </div>
        </div>
  )
}