import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TrendingProducts() {
  return (
    <div className='w-[380px] h-full rounded-[22px] p-8 bg-lightGray'>
        <div className='w-full justify-items-center grid gap-5'>
            <div className='text-start w-full tracking-[-1px]'>
                <h5 className='text-[18px] text-left w-full font-opensans font-semibold text-slate-800'>Trending Products</h5>
                <h3 className='text-2xl text-left w-full font-opensans font-bold text-orangeC'>First Come, 50% off</h3>
            </div>

            <div className='w-full h-auto rounded-[22px] bg-white'>
                <div className='p-6 grid gap-5'>
                    
                    <Link href={""}>
                        <div className='w-full h-[260px] rounded-[22px] overflow-hidden'>
                            <Image width={200} height={200} src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                        </div>
                        <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center font-opensans font-medium'>
                            PKR
                            <span className='text-[22px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                            <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                        </span>
                    </Link>

                    <div className='flex gap-5'>
                        
                        <Link href={""}>
                            <div className='w-full h-[128px] rounded-[20px] overflow-hidden'>
                                <Image width={200} height={200} src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                            </div>
                            <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                                PKR
                                <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                                <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                            </span>
                        </Link>

                        <Link href={""}>
                            <div className='w-full h-[128px] rounded-[20px] overflow-hidden'>
                                <Image width={200} height={200} src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                            </div>
                            <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                                PKR
                                <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                                <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                            </span>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
