import React from 'react'

export default function MyLoader() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-slate-800'>
        
      <div className='flex items-center'>
        <div className="pacman"></div>
        <div className='dots'>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <p className='font-opensans font-medium mt-2 text-[22px] text-white tracking-[-1px]'>Loading...</p>

    </div>
  )
}