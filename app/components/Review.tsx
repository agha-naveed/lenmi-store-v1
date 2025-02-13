import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import jethalal from '@/images/jethalal.jpeg'
import Image from 'next/image';

export default function Review() {
    let [rating, setRating] = useState(0)
    let [ratingClicked, setRatingClicked] = useState(0)

    return (
        <div className='w-[550px] h-96 bg-white shadow-xl rounded-lg p-4 font-opensans flex flex-col gap-5 overflow-hidden'>
            <div className='flex justify-between items-center'>
                <button className='w-7 h-7 flex justify-center items-center text-xl rounded-full' title='Cancel'>
                    <IoClose />
                </button>

                <span className='font-semibold content-center'>Product Review</span>

                <button className='bg-blue-600 text-white px-4 py-1 rounded-full'>Post</button>
            </div>

            <div className='flex gap-4'>
                <div className='w-14 h-14 rounded-full overflow-hidden'>
                    <Image src={jethalal}
                        alt='DP'
                        className='w-full
                            h-full
                            object-cover
                    '/>
                </div>
                <div className='grid self-center'>
                    <span className='font-semibold text-[18px] h-[25px]'>Naveed Abbas</span>
                    <p className='text-[15px] text-zinc-800 h-[20px] font-medium cursor-pointer' title='Your Review will be display Publicly'>
                        Posting Publicly
                        <span className='ml-1 text-[14px] font-semibold relative -top-[1px]'>ⓘ</span>
                    </p>
                </div>
            </div>

            <div className='w-full mb-2 justify-center flex gap-6 text-4xl px-10 text-zinc-700'>
                
                <IoIosStar
                    className={`
                        cursor-pointer
                        ${ratingClicked >= 1 ? "text-orangeClr" : ""}
                        ${rating > 0 && rating <=5 ? "text-orangeClr" : ""}
                    `}
                    onMouseOver={() => setRating(1)} 
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRatingClicked(1)}
                />
                
                <IoIosStar
                    className={`
                        cursor-pointer
                        ${ratingClicked >= 2 ? "text-orangeClr" : ""}
                        ${rating > 1 && rating <=5 ? "text-orangeClr" : ""}
                    `}
                    onMouseOver={() => setRating(2)} 
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRatingClicked(2)}
                />
                
                <IoIosStar
                    className={`
                        cursor-pointer
                        ${ratingClicked >= 3 ? "text-orangeClr" : ""}
                        ${rating > 2 && rating <=5 ? "text-orangeClr" : ""}
                    `}
                    onMouseOver={() => setRating(3)} 
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRatingClicked(3)}
                />
                
                <IoIosStar
                    className={`
                        cursor-pointer
                        ${ratingClicked >= 4 ? "text-orangeClr" : ""}
                        ${rating > 3 && rating <=5 ? "text-orangeClr" : ""}
                    `}
                    onMouseOver={() => setRating(4)} 
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRatingClicked(4)}
                />
                
                <IoIosStar
                    className={`
                        cursor-pointer
                        ${ratingClicked >= 5 ? "text-orangeClr" : ""}
                        ${rating > 4 && rating <=5 ? "text-orangeClr" : ""}
                    `}
                    onMouseOver={() => setRating(5)} 
                    onMouseLeave={() => setRating(0)}
                    onClick={() => setRatingClicked(5)}
                />
                


            </div>

            <textarea className='review-txtarea border border-zinc-400 w-full h-[155px] resize-none rounded-[8px] py-2 px-3' placeholder='How was the product?'></textarea>
            
        </div>
    )
}