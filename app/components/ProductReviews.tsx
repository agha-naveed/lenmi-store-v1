'use client'
import { TiStar } from "react-icons/ti";
import { IoStar } from "react-icons/io5";
import React from 'react'
import jethalal from '@/images/jethalal.jpeg'
import Image from 'next/image'

export default function ProductReviews() {
  return (
    <div className='font-opensans grid gap-3 border-y'>
      
      <div className='flex gap-2'>
        <div className='w-10 h-10 overflow-hidden rounded-full'>
            <Image src={jethalal} alt='' className='w-full h-full object-cover' />
        </div>
        <div className="grid">
          <span className='font-medium content-center'>Syed Naveed Abbas</span>
          <div className="flex gap-[1px] text-orangeClr">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
        </div>
      </div>
        
      <div>
        <div>
          This is my third pair of Crocs, and not because I wore the others out. In fact, I’ve had my previous pairs for years, but I decided it was time to get another. I do a lot of woodworking, and I always struggle with tracking wood pulp into the house on whatever footwear I’m wearing. But with my garage Crocs, that’s not an issue at all. I also love working in my yard, which is full of mud, rocks, and who knows what else I’m stepping in. My yard Crocs are super easy to clean, and they dry in just a minute or two. So, I thought, why not get some work Crocs? They’re incredibly comfortable, stylish, and offer all the benefits I’ve come to rely on. I bought these, and I absolutely love them. I can take walks on my breaks and stand at my desk for hours without my feet feeling like they’re on fire by the time I get home.
        </div>
      </div>

    </div>
  )
}
