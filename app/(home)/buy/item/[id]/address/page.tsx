'use client'
import React, { useEffect } from 'react'
import { useBuyContext } from "@/app/components/BuyContext";
import Image from 'next/image';
import cod from '@/images/payment-methods/cod.png'
import easypaisa from '@/images/payment-methods/Easypaisa-logo.png'
import jazzcash from '@/images/payment-methods/new-Jazzcash-logo.png'
import card from '@/images/payment-methods/Credit_or_Debit_Card.png'

export default function page() {

  const { buyData, setBuyData }:any = useBuyContext();


  
  
  return (
    <div className='container mx-auto py-8 grid justify-center'>

      <div className='w-fit rounded-2xl shadow-xl bg-white font-opensans py-3 px-6'>
        <h1 className='text-xl font-semibold mb-4'>Payment Method:</h1>

        <div className='flex gap-2'>

          <button title='Cash on Delivery' className='w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={cod} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Cash on Delivery</span>
          </button>
          
          <button title='Easypaisa' className='w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={easypaisa} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Easypaisa</span>
          </button>

          <button title='JazzCash' className='w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={jazzcash} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>JazzCash</span>
          </button>

          <button title='Credit/Debit Card' className='w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center'>
            <Image src={card} alt='Cash on Delivery' className='w-16' />
            <span className='text-center text-[15px] font-medium leading-[17px]'>Credit/Debit Card</span>
          </button>
          
        </div>
      </div>
    </div>
  )
}