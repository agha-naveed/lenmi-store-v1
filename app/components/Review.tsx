import React from 'react'
import { IoClose, IoStarOutline } from "react-icons/io5";
import jethalal from '@/images/jethalal.jpeg'
import Image from 'next/image';

export default function Review() {
    return (
        <div className='w-[550px] h-96 bg-white shadow-xl rounded-lg p-4 font-opensans flex flex-col gap-5'>
            <div className='flex justify-between items-center'>
                <button className='w-7 h-7 flex justify-center items-center text-xl rounded-full' title='Cancel'>
                    <IoClose />
                </button>

                <span className='font-semibold content-center'>Product</span>

                <button className='bg-blue-600 text-white px-4 py-1 rounded-full'>Post</button>
            </div>

            <div className='flex gap-4'>
                <div className='w-14 h-14 rounded-full overflow-hidden'>
                    <Image src={jethalal}
                        alt='DP'
                        className='w-full
                            h-full
                            object-cover
                    '/>
                </div>
                <div className='grid self-center'>
                    <span className='font-semibold text-[18px] h-[25px]'>Naveed Abbas</span>
                    <p className='text-[15px] text-zinc-800 h-[20px] font-medium cursor-pointer' title='Your Review will be display Publicly'>
                        Posting Publicly
                        <span className='ml-1 text-[14px] font-semibold relative -top-[1px]'>ⓘ</span>
                    </p>
                </div>
            </div>

            <div className='flex justify-between text-4xl px-10 text-zinc-700'>
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
            </div>
        </div>
    )
}