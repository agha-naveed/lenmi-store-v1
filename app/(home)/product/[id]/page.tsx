import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <section className='container mx-auto'>
      <div className='flex gap-3'>
        
        <div className='w-[400px] h-[400px] border border-black p-3 overflow-hidden'>
          <Image src="https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg" alt='Jacket' width={200} height={200} className='w-full h-full object-contain' />
        </div>

        <div className='border border-black'>
          <h2>Mens Cotton Jacket</h2>
        </div>

      </div>
    </section>
  )
}