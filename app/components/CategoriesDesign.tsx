'use client'

import React from 'react'
import plantRender from '@/images/plant_render.png'
import electronicRender from '@/images/electronic_render.png'
import clothesRender from '@/images/clothes_render.png'
import lampRender from '@/images/lamp_render.png'
import watchRender from '@/images/watch_render.png'
import sportsRender from '@/images/sports_render.png'
import Image from 'next/image'
import Link from 'next/link'

export default function CategoriesDesign() {
  return (
        <div className='flex md:flex-row flex-col container mx-auto py-10 font-opensans'>
            
            <div className='w-full md:h-auto h-[100px] flex justify-center items-center bg-slate-800'>
                <span className='font-semibold text-3xl text-white'>Categories</span>
            </div>

            <div className='w-fit h-full text-white flex flex-wrap md:justify-end justify-center gap-[11px]'>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Home & Garden</span>
                    <div className='content-center relative'>
                        <Image src={plantRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={plantRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Electronics Accessories</span>
                    <div className='content-center relative'>
                        <Image src={electronicRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={electronicRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group justify-between'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Clothes</span>
                    <div className='content-center relative pr-4'>
                        <Image src={clothesRender} alt='Plant render' className='relative z-10 w-auto !h-[130px]' />
                        <Image src={clothesRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group justify-between'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5 w-[70%]'>Home Improvement & Lighting</span>
                    <div className='content-center relative pr-5'>
                        <Image src={lampRender} alt='Plant render' className='relative z-10 w-auto !h-[110px]' />
                        <Image src={lampRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group justify-between'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Accessories</span>
                    <div className='content-center relative'>
                        <Image src={watchRender} alt='Plant render' className='relative z-10 w-auto !h-[120px]' />
                        <Image src={watchRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                <Link href={""} className='bg-zinc-200 w-72 h-36 flex overflow-hidden transition-all cursor-pointer hover:bg-gray-300 hover:scale-105 relative text-black hover:shadow-custom-light group'>
                    <span className='flex text-[19px] font-semibold pt-5 pl-5'>Sports & Entertainment</span>
                    <div className='content-center relative'>
                        <Image src={sportsRender} alt='Plant render' className='relative z-10 w-[150px] !h-[110px]' />
                        <Image src={sportsRender} alt='Plant render' className='absolute left-32 transition_2 group-hover:left-10 blur-[2px] z-[0] -top-2 w-[450px] h-fit opacity-50' />
                    </div>
                </Link>
                
                
            </div>
        </div>
  )
}