'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { GoStarFill } from "react-icons/go";
import Link from 'next/link';
import axios from 'axios';

export default function page() {

    const [quantity, setQuantity] = useState(1)
    const [cartItems, setCartItems] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/cart/cart-data/api")
            if(res.status == 200) {
                setCartItems(await res.data.data)
                console.log(await res.data.data)
            }
        }
        fetchData()
    }, [])

  return (
    <div className='bg-gray-100 min-h-screen h-full'>
        <div className="container mx-auto font-opensans py-7 grid gap-9">
            <div>
                <h1 className='font-bold text-3xl'>Cart</h1>
                <p><span className='font-semibold text-[15px]'> 2 Items </span> in cart</p>
            </div>

            <div className='w-full h-full rounded-2xl shadow-xl bg-white'>
                <div className='md:p-7 p-2'>
                    <table>
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

                                
                                    <tr key={`cart-item-${index}`} className='border-b-2'>
                                        <td>
                                            <Link href={""} title={item.name} className='cursor-pointer flex sm:gap-4 gap-2 py-5 group'>
                                                <span className='rounded-xl !h-fit p-1 sm:!w-[220px] w-[190px] overflow-hidden'>
                                                    <Image src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover' alt='pikachu' width={100} height={100} />
                                                </span>
                                                <span className='w-full'>
                                                    <h2 className='font-semibold tracking-[-1px] md:w-[60%] w-full line-clamp-2 my-2 sm:text-[16px] text-[15px] transition-all group-hover:text-orangeClr'>
                                                        {item.name}
                                                    </h2>


                                                    <p className='sm:text-[15px] text-[13px] mt-[10px]'>Color: <span className='font-semibold'>Black</span></p>
                                                    <p className='sm:text-[15px] text-[13px]'>Category: <span className='font-semibold'>{item.category}</span></p>


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
                                                            <span className='font-bold text-[17px] text-orangeClr'>PKR {item.price}</span>
                                                        </h5>
                                                    </span>
                                                </span>
                                            </Link>
                                        </td>

                                        <td className='p-5 text-center md:table-cell hidden'>
                                            <span className='content-center'>
                                                <h3 className='font-bold'>{item.price}</h3>
                                            </span>
                                        </td>
                                        <td className='p-5 text-center md:table-cell hidden'>
                                            <span className='flex'>
                                                <button className={`px-1 py-[6px] w-9 text-[22px] ${quantity == 1 ? "text-gray-400" : "text-black"}`} onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
                                                <input className='p-1 font-medium text-center' type="number" placeholder='1' readOnly value={quantity} min={1} max={10} />
                                                <button className='p-[6px] w-9 text-[22px]' onClick={() => setQuantity(quantity + 1)}>+</button>
                                            </span>
                                        </td>
                                        <td className='p-5 text-center md:table-cell hidden'>
                                            <span className='content-center'>
                                                <h3 className='font-bold'>$41.00</h3>
                                            </span>
                                        </td>
                                    </tr>
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