'use client'
import React, { useEffect } from 'react'
import { useBuyContext } from "@/app/components/BuyContext";
import Image from 'next/image';
import cod from '@/images/payment-methods/cod.png'

export default function page() {

  const { buyData, setBuyData }:any = useBuyContext();


  
  
  return (
    <div className='container mx-auto py-8'>
      <div className='rounded-2xl shadow-xl bg-white font-opensans py-3 px-6'>
        <h1 className='text-[18px] font-semibold'>Payment Method:</h1>

        <div className='flex'>

          <div className='w-32 h-32 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={cod} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Cash on Delivery</span>
          </div>
          
          <div className='w-32 h-32 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={cod} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Paypal</span>
          </div>

          <div className='w-32 h-32 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={cod} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Cash on Delivery</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}