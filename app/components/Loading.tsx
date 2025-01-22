import React from 'react'

export default function MyLoader() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        
      <div className='flex items-center'>
        <div className="pacman"></div>
        <div className='dots'>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <p className='font-opensans font-semibold mt-2 text-[22px] tracking-[-1px]'>Loading...</p>

    </div>
  )
}