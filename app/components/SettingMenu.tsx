'use client'
import React, { useEffect, useState } from 'react'
import { TbMessageDots } from "react-icons/tb";
import { VscAccount } from "react-icons/vsc";
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';

export default function SettingMenu() {
  
  const [activeMenu, setActiveMenu] = useState("/")

  useEffect(() => {
    console.log(window.location.pathname)
    setActiveMenu(window.location.pathname)
  }, [])
  return (
    <div className='font-opensans !w-fit flex flex-col border-r-2 md:pr-1 md:w-72'>
      <Link href={'/setting'} onClick={() => setActiveMenu("/setting")} className={`${activeMenu === "/setting" ? "bg-gray-200" : ""} w-[225px] h-[60px] flex gap-2 md:px-5 px-4 items-center border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Manage Account'>
        <VscAccount className='text-[25px]' />
        <span className='md:block hidden'>Manage Account</span>
      </Link>
      <Link href={'/setting/message'} onClick={() => setActiveMenu("/message")} className={`${activeMenu === "/setting/message" ? "bg-gray-200" : ""} h-[60px] flex gap-2 w-[225px] md:px-5 px-4 items-center border-t transition-all hover:bg-gray-100 cursor-pointer`} title='Manage Account'>
        <TbMessageDots className='text-[25px]' />
        <span className='md:block hidden'>Messages</span>
      </Link>
    </div>
  )
}