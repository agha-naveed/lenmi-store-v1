'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import { IoArrowForwardCircleOutline, IoArrowForwardCircle } from "react-icons/io5";

import Link from 'next/link';
import axios from 'axios';

export default function page() {

    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState<any[]>([])

    const [selectProduct, setSelectProduct] = useState<number | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/cart/cart-data/api")
            if(res.status == 200) {
                setCartItems(await res.data.data)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='bg-gray-100 min-h-screen h-full'>
        <div className="container mx-auto font-opensans py-7 grid gap-9">
            <div className='flex justify-between'>
                <div>
                    <h1 className='font-bold text-3xl'>Cart</h1>
                    <p><span className='font-semibold text-[15px]'> 2 Items </span> in cart</p>
                </div>
                <div>
                    <button
                        className={`flex
                        bg-orangeClr
                        group px-6
                        items-center
                        gap-2 py-3
                        text-white
                        rounded-lg
                        relative
                        transition-all
                        overlay-btn
                        overflow-hidden
                        ${selectProduct != null ? "bottom-0 opacity-100" : "bottom-10 opacity-0"}
                        `}
                    >
                        <span className='transition-all relative z-10 '>Continue to Buy</span>
                        <IoArrowForwardCircleOutline className='relative z-10 text-xl transition-all' />
                    </button>
                </div>
            </div>

            <div className='w-full h-full rounded-2xl shadow-xl bg-white'>
                <div className='md:p-7 p-2'>
                    <table className='w-full'>
                        <thead>
                            <tr className='font-semibold'>
                                <th className='text-start'>Products</th>
                                <th className='text-center md:table-cell hidden'>Price</th>
                                <th className='text-center md:table-cell hidden'>Quantity</th>
                                <th className='text-center md:table-cell hidden'>Total Price</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                cartItems.map((item, index) => (
                                    <React.Fragment key={`cart-item-${index}`}>
                                        <tr 
                                            onClick={() => {
                                                setSelectProduct(index)
                                            }}
                                            className={`relative ${selectProduct == index ? "border-y border-orangeClr" : "border-b-2"}`}
                                        >
                                            
                                            <td>
                                                <Link href={""} title={item.data.name} className='cursor-pointer flex items-center sm:gap-4 gap-2 py-5 group'>
                                                    <span className='rounded-xl !h-fit p-1 sm:!w-[220px] w-[190px] overflow-hidden'>
                                                        <Image src={item.data.imgURL[0]} className='w-full h-full object-cover' alt='pikachu' width={100} height={100} />
                                                    </span>
                                                    <span className='w-full'>
                                                        <h2 className='font-semibold tracking-[-1px] md:w-[60%] w-full line-clamp-2 my-2 sm:text-[16px] text-[15px] transition-all group-hover:text-orangeClr'>
                                                            {item.data.name}
                                                        </h2>


                                                        <p className='sm:text-[15px] text-[13px] mt-[10px]'>Color: <span className='font-semibold'>Black</span></p>
                                                        <p className='sm:text-[15px] text-[13px]'>Category: <span className='font-semibold'>{item.data.category}</span></p>


                                                        <span className='text-[13px] items-center gap-2 py-3 md:flex hidden'>
                                                            <div className='flex'>
                                                                <GoStarFill />
                                                                <GoStarFill />
                                                                <GoStarFill />
                                                                <GoStarFill />
                                                                <GoStarFill />
                                                            </div>
                                                            <p className='text-gray-600  content-center'>10000+ sold</p>
                                                        </span>

                                                        <span className='md:hidden block mt-1'>
                                                            <h5 className='font-medium'>
                                                                <span className='text-[15px]'> Price: </span>
                                                                <span className='font-bold text-[17px] text-orangeClr'>PKR {item.data.price}</span>
                                                            </h5>
                                                        </span>
                                                    </span>
                                                </Link>
                                            </td>

                                            <td className='p-5 text-center md:table-cell hidden'>
                                                <span className='content-center'>
                                                    <h3 className='font-bold'>{item.data.price}</h3>
                                                </span>
                                            </td>

                                            <td className='p-5 text-center md:table-cell hidden'>
                                                <span className='flex'>
                                                    <button className={`px-1 py-[6px] w-9 text-[22px] ${quantity == 1 ? "text-gray-400" : "text-black"}`} onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
                                                    <input className='p-1 font-medium text-center' type="number" placeholder='1' readOnly value={item.itemQuantity} min={1} max={10} />
                                                    <button className='p-[6px] w-9 text-[22px]' onClick={() => setQuantity(quantity + 1)}>+</button>
                                                </span>
                                            </td>

                                            <td className='p-5 text-center md:table-cell hidden'>
                                                <span className='content-center'>
                                                    <h3 className='font-bold'>{item.data.price * item.itemQuantity}</h3>
                                                </span>
                                            </td>
                                            
                                        </tr>
                                        <tr></tr>
                                    </React.Fragment>
                                ))
                            }    
                            
                        </tbody>

                    </table>
                    
                </div>


            </div>
        </div>
    </div>
  )
}