import React from 'react'
import Link from 'next/link';
import { FaStar, FaCartPlus } from "react-icons/fa";
import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className='product-card w-fit transition-all'>
        <div className='bg-white border border-gray-400 rounded-lg sm:w-52 w-[156px] sm:h-[310px] p-2 grid gap-3'>
            <div className='sm:w-[190px] w-[140px] sm:h-[170px] h-[120px] select-none group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                <Image src="https://mrlaptop.pk/wp-content/uploads/2024/11/s-l400.jpg" className='w-full h-full object-cover absolute transition_2 opacity-100 group-hover:opacity-0' alt="" width={200} height={200}/>
                <Image src="https://img.drz.lazcdn.com/static/pk/p/7b2a2355148607d8c12d443afbae210b.jpg_720x720q80.jpg_.webp" className='w-full h-full object-cover transition_2  group-hover:opacity-100 opacity-0 absolute' alt="" width={200} height={200}/>
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
                    <p className='text-gray-600 font-opensans text-[12px] sm:text-[13px]'><span>10000+</span> sold</p>
                </div>

            </div>

        </div>

        <div className='relative pt-2'>
            <button className='bg-slate-800 text-white absolute top-[2px] left-[50%] -translate-x-[50%] hidden justify-center group items-center h-9 w-full rounded-md z-20 overflow-hidden  shadow-custom-light'>
                <span className='w-full absolute left-[50%] -translate-x-[50%] group-hover:-left-[50%] transition-all'>Add to Cart</span>
                <FaCartPlus className='absolute -right-[50%] group-hover:right-[50%] translate-x-[50%] transition-all' />
            </button>
        </div>
    </div>
  )
}
