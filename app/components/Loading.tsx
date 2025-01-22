import React from 'react'
import loader from '@/images/loader2.gif'
import Image from "next/image";

export default function Loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Image src={loader} alt='Loader' width={200} height={200} />
    </div>
  )
}