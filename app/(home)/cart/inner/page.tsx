'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";

export default function page() {

    const [quantity, setQuantity] = useState(1)

  return (
    <div className='bg-gray-100 min-h-screen h-full'>
        <div className="container mx-auto font-opensans">
            <div>
                <h1 className='font-bold text-2xl'>Cart</h1>
                <p><span className='font-semibold text-[15px]'> 2 Items </span> in cart</p>
            </div>

            <div className='w-full h-full'>
                <table className='bg-white rounded-2xl shadow-xl'>
                    <thead>
                        <tr className='flex font-semibold p-4'>
                            <td>Products</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total Price</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className='flex gap-4 p-5'>
                                <span className='rounded-xl !h-[160px] p-1 !w-[140px] overflow-hidden'>
                                    <Image src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover' alt='pikachu' width={100} height={100} />
                                </span>
                                <span className='w-[70%]'>
                                    <h2 className='font-semibold tracking-[-1px] w-[40%] line-clamp-2 my-2'>Lenovo | N21 | 6th Gen | 16GB Storage | 4GB RAM | 11.6″ Display | Rotatable Camera | Playstore Supported | Chromebook Daraz Like New Slightly Used Import American Stock</h2>


                                    <p className='text-[15px] mt-[15px]'>Color: <span className='font-semibold'>Black</span></p>
                                    <p className='text-[15px]'>Category: <span className='font-semibold'>Electonics</span></p>


                                    <span className='text-[13px] flex items-center gap-2 py-3'>
                                        <div className='flex'>
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                            <GoStarFill />
                                        </div>
                                        <p className='text-gray-600  content-center'>10000+ sold</p>
                                    </span>
                                </span>
                            </td>

                            <td className='p-5'>
                                <span className='content-center'>
                                    <h3 className='font-bold'>$20.50</h3>
                                </span>
                            </td>
                            <td className='p-5'>
                                <span className='flex'>
                                    <button className={`px-1 py-[6px] w-9 text-[22px] ${quantity == 1 ? "text-gray-400" : "text-black"}`} onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
                                    <input className='p-1 font-medium text-center' type="number" placeholder='1' readOnly value={quantity} min={1} max={10} />
                                    <button className='p-[6px] w-9 text-[22px]' onClick={() => setQuantity(quantity + 1)}>+</button>
                                </span>
                            </td>
                            <td className='p-5'>
                                <span className='content-center'>
                                    <h3 className='font-bold text-[17px]'>$41.00</h3>
                                </span>
                            </td>
                        </tr>
                    </tbody>

                </table>


            </div>
        </div>
    </div>
  )
}