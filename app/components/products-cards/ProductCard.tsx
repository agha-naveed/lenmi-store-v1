import React from 'react'
import Link from 'next/link';
import { FaStar, FaCartPlus } from "react-icons/fa";
import Image from 'next/image';

export default function ProductCard({data}:any) {
  return (
    <div className='product-card w-fit transition-all'>
        <div className='bg-white border border-gray-400 rounded-lg w-[47vmin] md:w-52 sm:w-[260px] sm:h-[370px] md:h-[auto] p-2 grid gap-3'>
            <div className='md:w-[190px] w-full md:h-[170px] h-[35vmin] select-none group transition_2 rounded-lg overflow-hidden border relative cursor-pointer'>
                <Image src={data.imgURL[0]} className='w-full h-full object-cover absolute transition_2 opacity-100 group-hover:opacity-0' alt="" width={500} height={500}/>
                {
                    data.imgURL.length > 1 ?
                    <Image src={data.imgURL[1]} className='w-full h-full object-cover transition_2  group-hover:opacity-100 opacity-0 absolute' alt="" width={500} height={500}/>
                    : ""
                }
            </div>

            <div className='select-none'>
                <h2 className='text-[16.3px] min-h-10 tracking-[-1.2px] leading-5 font-opensans font-semibold line-clamp-2'><Link href={`/product/${data._id}`}>{data.name}</Link></h2>

                <div className='flex gap-2'>
                    <div className='font-opensans font-bold tracking-[-2px]'>PKR <span className='sm:text-[28px] text-[7vmin] font-opensans'>{(data.price).toLocaleString()}</span></div>
                    <span className='line-through sm:block hidden content-end text-[14px] relative bottom-1 text-gray-500 font-opensans'>PKR 980</span>
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
