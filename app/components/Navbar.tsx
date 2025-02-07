"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineAccountCircle, MdOutlineHelpOutline } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import logo from '@/images/logo.png'
import { FaBars } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { TbMessageDots } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5"
import axios from 'axios';

interface ApiResponse {
    first_name: string;
    last_name: string;
    account_type: string;
}


export default function Navbar() {    
    
    const [message, setMessage] = useState<ApiResponse | null>(null);

    const [logOut, setLogOut] = useState(false)


    useEffect(() => {
        
        if(logOut == false) {
            const getData = async () => {
                
                let fetchData = await axios.get("/account/api", {
                    withCredentials: true
                })

                if(fetchData != null) {
                    let Data = await fetchData.data
                    setMessage(Data)
                }
                else {
                    setMessage(null)
                }
            }
            getData()
        }

        if(logOut == true) {
            async function logout() {
                await axios.patch("/account/api")
                    setMessage(null)
            }

            logout()
        }

    }, [logOut])
    
    useEffect(() => {
        async function cartData() {
            const res = await axios.get("/cart/api")
            if(res.status == 201) {
                
            }
        }
        cartData()
    }, [])

    return (
        <div className='w-full md:h-[130px] h-[135px] relative z-30 bg-slate-800 py-3'>
            <div className="container mx-auto">
                <div className='flex w-full justify-between md:px-0 px-3'>
                    <Link href="/">
                        <Image decoding='async' className='md:w-[140px] sm:w-32 w-28' src={logo} width={200} height={200} alt="Lenmi Store Logo" />
                    </Link>
                    <div className='md:flex hidden w-1/2'>
                        <input type="text" placeholder='What are you looking for?' className='pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-opensans font-medium' />
                        <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-11' />
                    </div>

                    <div className='text-white flex gap-4'>
                        <div className='relative group'>

                            <div className='flex gap-[6px] cursor-pointer h-fit'>
                                <MdOutlineAccountCircle className='account text-[38px]' title='Account' />
                                <div className='grid content-center leading-[17px]'>
                                    <span className='text-[13px] font-opensans font-medium'>Welcome</span>
                                    <span className='font-opensans font-semibold text-[14px]'>{message?.first_name ?? "Login / Signup"}</span>
                                </div>
                            </div>
                            
                            <div className='login-signup-popup scale-y-0 group-hover:scale-y-100 transition_1 absolute -left-10 top-11 z-10 w-56 px-[6px] py-2 rounded-[10px] bg-white text-black grid gap-2 shadow-xl'>
                                {
                                    message != null ? 
                                    <div>
                                        <div>
                                            <p className='font-opensans font-medium leading-[1.2] p-2 grid text-[14px]'>Welcome: <span className='text-[16px]'> {message.first_name} {message.last_name}</span></p>
                                        </div>

                                        <div className='font-opensans font-medium'>
                                            <ul className='grid'>
                                            
                                                <li className='p-[10px] rounded-lg hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2 text-[16px]'>
                                                    <GoChecklist className='text-[18px]' />Orders
                                                </li>
                                                <li className='p-[10px] rounded-lg hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2 text-[16px]'>
                                                    <TbMessageDots className='text-[18px]' />Messages
                                                </li>
                                                <li>
                                                    <Link href={"setting"} className='p-[10px] rounded-lg hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2 text-[16px]'>
                                                        <IoSettingsOutline className='text-[18px]' />Settings
                                                    </Link>
                                                </li>
                                                <li className='p-[10px] rounded-lg hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2 text-[16px]'>
                                                    <MdOutlineHelpOutline className='text-[18px]' />Help & Support
                                                </li>
                                                <li onClick={() => setLogOut(!logOut)} className='p-[10px] rounded-lg hover:bg-gray-200 cursor-pointer transition-all flex items-center gap-2 text-[16px]'>
                                                    <LuLogOut className='text-[18px]' />Logout
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    :
                                    <div className="grid font-opensans font-medium gap-1">
                                        <button>
                                            <Link href="/account" className='flex rounded-[10px] justify-center items-center w-full h-[40px] bg-slate-800 transition-all hover:bg-white hover:text-black hover:border border-black text-white'> Login</Link>
                                        </button>
                                        <button>
                                            <Link href="/account/signup" className='w-full h-[30px] transition-all hover:underline text-[15px] rounded-[10px]'> Signup</Link>
                                        </button>
                                    </div>
                                }

                            </div>

                        </div>

                        <div className="relative group">

                            <Link href={'/cart'} className='flex gap-[6px] cursor-pointer h-fit'>
                                <TiShoppingCart className='cursor-pointer text-[38px]' title='Cart' />
                                <div className='grid content-center leading-[17px]'>
                                    <span className='text-[12.5px] text-black font-opensans  bg-white rounded-xl w-[26px] h-[14px] text-center'>
                                        <p className='relative top-[-2px] font-opensans font-bold'>0</p>
                                    </span>
                                    <span className='font-opensans font-medium text-[14px]'>Cart</span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className='md:hidden flex py-5 px-3 items-center'>
                    <FaBars className='text-white text-[34px] relative left-1' />
                    <div className='flex w-full'>
                        <input type="text" placeholder='What are you looking for?' className='relative left-7 pl-3 pr-[53px] h-[44px] w-full rounded-md outline-none font-opensans  font-medium' />
                        <FiSearch title='Search' className='text-xl cursor-pointer p-2 top-[2px] rounded-md w-11 h-10 text-white bg-slate-800 relative -left-4' />
                    </div>
                </div>

                <nav className='content-center md:block hidden font-opensans font-medium'>
                    <ul className='text-white flex w-full justify-center p-3 gap-2'>
                        <li className='flex'>
                            <Link href={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Home</Link>
                        </li>
                        <li className='flex'>
                            <Link href={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Products</Link>
                        </li>
                        <li className='flex'>
                            <Link href={"/"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Super Deals</Link>
                        </li>
                        {
                            message?.account_type == 'business' ?
                            <li className='flex'>
                                <Link href={"/add-product"} className='py-2 px-4 transition-all underline-offset-0 hover:underline  hover:underline-offset-8'>Sell</Link>
                            </li>
                            :
                            ""
                        }

                    </ul>
                </nav>
                
            </div>
        </div>
    )
}