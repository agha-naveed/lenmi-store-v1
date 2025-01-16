import React from 'react'
import Link from 'next/link';
import { FaStar, FaCartPlus } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className='product-card w-fit'>
        <div className='bg-white border border-gray-400 rounded-lg w-52 h-[310px] p-2 grid gap-3'>
            <div className='w-[190px] select-none h-[170px] group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                <img src="https://typeshop.pk/wp-content/uploads/2024/09/749789-product-0-i-638518506623874710_06458751-c09a-4dec-b82f-416beff7e94f.webp" className='w-full h-full object-cover absolute transition_2 opacity-100 group-hover:opacity-0' alt="" />
                <img src="https://img.drz.lazcdn.com/static/pk/p/7b2a2355148607d8c12d443afbae210b.jpg_720x720q80.jpg_.webp" className='w-full h-full object-cover transition_2  group-hover:opacity-100 opacity-0 absolute' alt="" />
            </div>

            <div className='select-none'>
                <h2 className='text-[16.3px] tracking-[-1.2px] leading-5 font-opensans font-semibold line-clamp-2'><Link href={""}> Lenovo | N21 | 6th Gen | 16GB Storage | 4GB RAM | 11.6″ Display | Rotatable Camera | Playstore Supported | Chromebook Daraz Like New Slightly Used Import American Stock</Link></h2>

                <div className='flex gap-2'>
                    <div className='font-opensans font-bold tracking-[-2px]'>PKR <span className='text-[28px] font-opensans'>833</span></div>
                    <span className='line-through content-end text-[14px] relative bottom-1 text-gray-500 font-opensans'>PKR 980</span>
                </div>

                <div className='flex items-center text-[13px] my-1 gap-1'>
                    <div className='flex text-slate-900 cursor-pointer'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    <p className='text-gray-600 font-opensans'><span>10000+</span> sold</p>
                </div>

            </div>

        </div>

        <button className='bg-slate-800 text-white hidden justify-center group items-center h-9 w-full rounded-md mt-1 relative overflow-hidden'>
            <span className='absolute left-[50%] -translate-x-[50%] group-hover:-left-[50%] transition-all'>Add to Cart</span>
            <FaCartPlus className='absolute -right-[50%] group-hover:right-[50%] translate-x-[50%] transition-all' />
        </button>
    </div>
  )
}
