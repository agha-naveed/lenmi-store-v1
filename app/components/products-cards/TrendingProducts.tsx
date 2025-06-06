'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TrendingProducts({data}:any) {
    const [detail, setDetail] = useState<any>({})

    useEffect(() => {
        setDetail(data)
    }, [data])

  return (
    <div className='w-[380px] h-full rounded-[22px] sm:p-8 p-5 bg-lightGray'>
        <div className='w-full justify-items-center grid gap-5'>
            <div className='text-start w-full tracking-[-1px]'>
                <h5 className='text-[18px] text-left w-full font-opensans font-semibold text-slate-800'>Trending Products</h5>
                <h3 className='text-2xl text-left w-full font-opensans font-bold text-orangeC'>First Come, 50% off</h3>
            </div>

            <div className='w-full h-auto rounded-[22px] bg-white'>
                <div className='sm:p-6 p-4 grid gap-5 justify-center'>
                    
                    <Link href={`/product/${detail?._id}`} className='justify-items-center w-fit'>
                        <div className='sm:w-full sm:h-[260px] w-fit h-[200px] rounded-[22px] overflow-hidden'>
                            {
                                detail?.imgURL ?
                                <Image
                                width={500}
                                height={500}
                                src={detail.imgURL[0]} alt=""
                                className='w-full h-full object-cover' />
                                : <div className='flex justify-center items-center w-full h-full'>
                                    Loading...
                                </div>
                            }
                        </div>
                        <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center font-opensans font-medium'>
                            PKR
                            <span className='text-[22px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                            <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] '>-72%</span>
                        </span>
                    </Link>

                    <div className='flex sm:gap-5 gap-3 place-content-center w-fit'>
                        
                        <Link href={""}>
                            <div className='sm:w-full sm:h-[128px] w-fit h-[100px] rounded-[20px] overflow-hidden'>
                                <Image width={200} height={200} src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                            </div>
                            <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                                PKR
                                <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                                <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] sm:block hidden'>-72%</span>
                            </span>
                        </Link>

                        <Link href={""}>
                            <div className='sm:w-full sm:h-[128px] w-fit h-[100px] rounded-[20px] overflow-hidden'>
                                <Image width={200} height={200} src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt="" className='w-full h-full object-cover' />
                            </div>
                            <span className='text-black w-full flex gap-[2px] py-2 items-end justify-center text-[14px] font-opensans font-medium'>
                                PKR
                                <span className='text-[20px] relative top-[2px] font-opensans font-semibold'>1,116</span>
                                <span className='bg-slate-800 text-white ml-1 relative top-[-5px] text-[12px] px-1 rounded-[4px] sm:block hidden'>-72%</span>
                            </span>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}
