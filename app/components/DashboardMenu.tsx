'use client'
import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHistory } from "react-icons/ai";
import Link from 'next/link';

export default function DashboardMenu() {
  
  const [activeMenu, setActiveMenu] = useState("/")

  return (
    <div className='font-opensans w-fit flex flex-col border-r-2 md:pr-1 md:w-72'>
      <Link href={'/profile'} onClick={() => setActiveMenu("/")} className={`${activeMenu === "/" ? "bg-gray-200" : ""} h-[60px] flex gap-2 w-full md:px-5 px-4 items-center border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Manage Account'>
        <VscAccount className='text-[25px]' />
        <span className='md:block hidden'>Manage Account</span>
      </Link>
      <Link href={"/profile/order-history"} onClick={() => setActiveMenu("order-history")} className={`${activeMenu === "order-history" ? "bg-gray-200" : ""} h-[60px] flex gap-2 w-full md:px-5 px-4 items-center border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Order history'>
        <AiOutlineHistory className='text-[25px]' />
        <span className='md:block hidden'>Order History</span>
      </Link>
    
    </div>
  )
}