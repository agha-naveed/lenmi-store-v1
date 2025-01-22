import React from 'react'
import loader from '@/images/loader.gif'
import Image from "next/image";

export default function Loader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Image src={loader} alt='Loader' width={400} height={400} />
    </div>
  )
}