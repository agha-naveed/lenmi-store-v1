'use client'

import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='bg-gray-100 min-h-screen h-full'>
        <div className="container mx-auto font-opensans">
            <div>
                <h1 className='font-bold text-2xl'>Cart</h1>
                <p><span className='font-semibold text-[15px]'> 2 Items </span> in cart</p>
            </div>

            <div className='w-full h-full'>
                <div className='bg-white p-5 rounded-2xl shadow-xl'>
                    <div className='flex font-semibold'>
                        <h4>Products</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total Price</h4>
                    </div>
                    <div>
                        <div>
                            <Image src="https://sm.ign.com/t/ign_in/gallery/p/pokemon-le/pokemon-lets-go-pikachu-and-pokemon-lsets-go-eevee-screenshot_bg4p.1080.jpg" alt='pikachu' width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}