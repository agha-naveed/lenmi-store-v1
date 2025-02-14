'use client'

import { IoStar } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import jethalal from '@/images/jethalal.jpeg'
import Image from 'next/image'
import Link from "next/link";

export default function ProductReviews({data}:any) {
  
  const [isLiked, setIsLiked] = useState(false)

  let [ratingCount, setRatingCount] = useState([])

  useEffect(() => {
    let newArray:any = []
    for(let i=0; i<data.rating; i++) {
      newArray.push(i)
    }
    setRatingCount(newArray)
    console.log(data)
  }, [])

  return (
    <div className='container mx-auto font-opensans grid gap-4 max-h-[400px] overflow-auto border-y py-8 px-5'>
      
      <div className="flex justify-between">
        <div className='flex gap-2'>
          <div className='w-10 h-10 overflow-hidden rounded-full'>
              <Image src={jethalal} alt='' className='w-full h-full object-cover' />
          </div>
          <div className="grid">
            <span className='font-medium content-center'>{data.userId.first_name} {data.userId.last_name}</span>
            <div className="flex gap-[1px] text-orangeClr">
              {
                ratingCount.length > 0 ?
                ratingCount.map((item, index) => {
                  return (
                    <IoStar key={`rating-star-${index}`} />
                  )
                })
                : <p>Loading...</p>
              }
            </div>
          </div>
        </div>
        <p className="text-[15px] text-zinc-800 content-center">Date: Feb 8, 2025</p>
      </div>
        
      <div className="grid gap-5">
        <div className="text-[15px]">
          {
            data.comment
          }
        </div>
        <div className="flex gap-2">
          {
            data.images.map((item:any, index:number) => {
              return (
                <Link key={`product-review-image-${index}`} href={item} target="_blank" className="w-32 h-32 overflow-hidden rounded-md border border-zinc-400 p-1">
                  <Image src={item}
                    alt=""
                    className="w-full h-full object-cover rounded-md"
                    width={400}
                    height={400}
                    />
                </Link>
              )
            })
          }
        </div>
      </div>

      <div className="flex items-center">
        <button title="Like if you find Helpful"
        onClick={() => setIsLiked(!isLiked)}
        className="relative flex items-center gap-1 w-fit p-2 transition-all group rounded-full text-white bg-slate-800 hover:px-4">
          <AiOutlineLike className="text-2xl" />
          <p className="hidden group-hover:block">Like</p>
        </button>
        <p className="font-medium text-xl ml-2">{isLiked ? 1 : 0}</p>
      </div>

    </div>
  )
}
