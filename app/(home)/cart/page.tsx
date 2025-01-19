'use client'

import React from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";

export default function page() {
  return (
    <div className='bg-gray-100 min-h-screen h-full'>
        <div className="container mx-auto font-opensans">
            <div>
                <h1 className='font-bold text-2xl'>Cart</h1>
                <p><span className='font-semibold text-[15px]'> 2 Items </span> in cart</p>
            </div>

            <div className='w-full h-full'>
                <div className='bg-white p-5 rounded-2xl shadow-xl'>
                    <div className='flex font-semibold'>
                        <h4>Products</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total Price</h4>
                    </div>

                    <div className='flex gap-4'>
                        <div className='bg-orange-500 rounded-xl h-[160px] p-1 w-[140px] overflow-hidden'>
                            <Image src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover' alt='pikachu' width={100} height={100} />
                        </div>
                        <div>
                            <h2 className='font-semibold tracking-[-1px] w-[40%] line-clamp-2'>Lenovo | N21 | 6th Gen | 16GB Storage | 4GB RAM | 11.6″ Display | Rotatable Camera | Playstore Supported | Chromebook Daraz Like New Slightly Used Import American Stock</h2>

                            <div className='flex'>
                                <h1 className='flex tracking-[-1px] gap-[2px]'><span className='relative bottom-[6px] flex font-semibold text-xl items-end'>PKR</span> <span className="font-bold flex text-[32px] items-end">833</span></h1>
                                <h3 className='ml-1 text-gray-500 tracking-[-0.5px] text-[15px] line-through content-end relative bottom-[8px]'>PKR 900</h3>
                            </div>

                            <div>
                                <div className='flex py-2'>
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                    <GoStarFill />
                                </div>
                                <p className='text-gray-500'>10000+ sold</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}