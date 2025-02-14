'use client'

import { IoStar } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import React from 'react'
import jethalal from '@/images/jethalal.jpeg'
import Image from 'next/image'
import Link from "next/link";

export default function ProductReviews() {
  return (
    <div className='font-opensans grid gap-4 max-h-[320px] overflow-auto border-y py-8 px-5'>
      
      <div className="flex justify-between">
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
        <p className="text-[15px] text-zinc-800 content-center">Date: Feb 8, 2025</p>
      </div>
        
      <div className="grid gap-5">
        <div className="text-[15px]">
          This is my third pair of Crocs, and not because I wore the others out. In fact, I’ve had my previous pairs for years, but I decided it was time to get another. I do a lot of woodworking, and I always struggle with tracking wood pulp into the house on whatever footwear I’m wearing. But with my garage Crocs, that’s not an issue at all. I also love working in my yard, which is full of mud, rocks, and who knows what else I’m stepping in. My yard Crocs are super easy to clean, and they dry in just a minute or two. So, I thought, why not get some work Crocs? They’re incredibly comfortable, stylish, and offer all the benefits I’ve come to rely on. I bought these, and I absolutely love them. I can take walks on my breaks and stand at my desk for hours without my feet feeling like they’re on fire by the time I get home.
          I’m wearing. But with my garage Crocs, that’s not an issue at all. I also love working in my yard, which is full of mud, rocks, and who knows what else I’m stepping in. My yard Crocs are super easy to clean, and they dry in just a minute or two. So, I thought, why not get some work Crocs? They’re incredibly comfortable, stylish, and offer all the benefits I’ve come to rely on. I bought these, and I absolutely love them. I can take walks on my breaks and stand at my desk for hours without my feet feeling like they’re on fire by the time I get home.I’m wearing. But with my garage Crocs, that’s not an issue at all. I also love working in my yard, which is full of mud, rocks, and who knows what else I’m stepping in. My yard Crocs are super easy to clean, and they dry in just a minute or two. So, I thought, why not get some work Crocs? They’re incredibly comfortable, stylish, and offer all the benefits I’ve come to rely on. I bought these, and I absolutely love them. I can take walks on my breaks and stand at my desk for hours without my feet feeling like they’re on fire by the time I get home.
        </div>
        <div className="flex gap-2">
          <Link href={""} className="w-32 h-32 overflow-hidden rounded-md border border-zinc-400 p-1">
            <Image src={jethalal} alt="" className="w-full h-full object-cover rounded-md" />
          </Link>
          <Link href={""} className="w-32 h-32 overflow-hidden rounded-md border border-zinc-400 p-1">
            <Image src={jethalal} alt="" className="w-full h-full object-cover rounded-md" />
          </Link>
        </div>
      </div>

      <button title="Like if you find Helpful" className="flex items-center gap-1 w-fit bg-slate-800 p-2 transition-all hover:px-4 group rounded-full text-white">
        <AiOutlineLike className="text-2xl" />
        <span className={`font-medium transition-all text-[18px] hidden group-hover:block`}>Like</span>
      </button>

    </div>
  )
}
