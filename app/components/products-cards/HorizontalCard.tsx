import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HorizontalCard() {
    return (
        <div className='sm:w-[500px] w-fit h-[300px] bg-lightPeachClr rounded-[22px] sm:p-8 p-4 flex flex-col gap-5'>
            <div className='text-start w-full tracking-[-1px]'>
                <h5 className='text-[18px] text-left w-full font-opensans font-semibold text-slate-800'>Hot Deals</h5>
                <h3 className='text-2xl text-left w-full font-opensans font-bold text-orangeC'>3 from <span className='text-orangeClr'> US $2.99</span></h3>
            </div>
            <div className='flex gap-4'>
                <Link href="" className='w-fit'>
                    <div className='sm:w-fit s:w-[100px] sm:h-[140px] h-[100px] rounded-[20px] overflow-hidden'>
                        <Image src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt='' width={200} height={200} className='w-full h-full hover:scale-110 transition-all cursor-pointer object-cover' />
                    </div>
                    <span className='text-black w-full flex sm:gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                        PKR
                        <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                        <span className='bg-slate-800 sm:block hidden text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                    </span>
                </Link>
                

                <Link href="" className='w-fit'>
                    <div className='sm:w-fit s:w-[100px] sm:h-[140px] h-[100px] rounded-[20px] overflow-hidden'>
                        <Image src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt='' width={200} height={200} className='w-full h-full hover:scale-110 transition-all cursor-pointer object-cover' />
                    </div>
                    <span className='text-black w-full flex sm:gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                        PKR
                        <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                        <span className='bg-slate-800 sm:block hidden text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                    </span>
                </Link>

                <Link href="" className='w-fit'>
                    <div className='sm:w-fit s:w-[100px] sm:h-[140px] h-[100px] rounded-[20px] overflow-hidden'>
                        <Image src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt='' width={200} height={200} className='w-full h-full hover:scale-110 transition-all cursor-pointer object-cover' />
                    </div>
                    <span className='text-black w-full flex sm:gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                        PKR
                        <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                        <span className='bg-slate-800 sm:block hidden text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                    </span>
                </Link>
            </div>
        </div>
    )
}