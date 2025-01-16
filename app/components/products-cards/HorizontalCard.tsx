import Image from 'next/image'
import React from 'react'

export default function HorizontalCard() {
    return (
        <div className='w-[500px] h-80 bg-orange-200 rounded-[22px] p-8'>
            <div className='w-fit h-[140px] rounded-[20px] overflow-hidden'>
                <Image src="https://www.space-tech.co/cdn/shop/files/LE-30-Lifestyle_c501ee74-78ea-4157-8b02-e723ca8eab44_2048x2048.jpg?v=1735718661" alt='' width={200} height={200} className='w-full h-full hover:scale-110 transition-all cursor-pointer object-cover' />
            </div>
        </div>
    )
}