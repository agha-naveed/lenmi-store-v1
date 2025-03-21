'use client'
import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import Link from 'next/link';

export default function SettingMenu() {
  
  const [activeMenu, setActiveMenu] = useState("/")

  return (
    <div className='font-opensans w-fit flex flex-col border-r-2 md:pr-1 md:w-72'>
      <Link href={'#'} onClick={() => setActiveMenu("/")} className={`${activeMenu === "/" ? "bg-gray-200" : ""} h-[60px] flex gap-2 w-full md:px-5 px-4 items-center border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Manage Account'>
        <VscAccount className='text-[25px]' />
        <span className='md:block hidden'>Manage Account</span>
      </Link>
    
    </div>
  )
}