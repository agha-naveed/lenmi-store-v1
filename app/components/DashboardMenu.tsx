'use client'
import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHistory } from "react-icons/ai";
import Link from 'next/link';

export default function DashboardMenu() {
  
  const [activeMenu, setActiveMenu] = useState("/")

  return (
    <div className='font-opensans grid border-r-2 pr-1 w-56'>
      <Link href={'/profile'} onClick={() => setActiveMenu("/")} className={`${activeMenu === "/" ? "bg-gray-200" : ""} flex gap-2 p-3 border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Manage Account'>
        <VscAccount className='text-[25px]' />
        <span>Manage Account</span>
      </Link>
      <Link href={"/profile/order-history"} onClick={() => setActiveMenu("order-history")} className={`${activeMenu === "order-history" ? "bg-gray-200" : ""} flex gap-2 p-3 border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Order history'>
        <AiOutlineHistory className='text-[25px]' />
        <span>Order History</span>
      </Link>

    </div>
  )
}