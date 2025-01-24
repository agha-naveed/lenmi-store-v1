'use client'
import React from 'react'
import Image from 'next/image'
import defaultPic from '@/images/account/default-pic.jpg'


export default function page() {
  return (
    <div>
      <div className='w-32 h-32 rounded-full overflow-hidden border-2 p-1'>
        <Image src={defaultPic} className='rounded-full' alt='Default Profile picture' />
      </div>
    </div>
  )
}