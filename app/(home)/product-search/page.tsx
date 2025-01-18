'use client'

import React, { useState } from 'react'
import { FaRegStar } from "react-icons/fa";
import ProductCard from '@/app/components/products-cards/ProductCard';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io"

export default function page() {
    const [toggleFilter, setToggleFilter] = useState(false)
  return (
    <div>
        <div className="container mx-auto py-3 md:flex grid gap-14 font-opensans">
            
            <button onClick={() => setToggleFilter(!toggleFilter)} className='md:hidden flex gap-1'>
                <CiFilter className='text-2xl' />
                <span>Filter</span>
            </button>
            

                <aside className={`p-3 md:w-[250px] w-full md:h-auto transition-all ${toggleFilter ? "left-0" : "left-[-100%]"}  min-h-screen flex flex-col md:relative md:left-0 fixed top-0 bg-white z-30`}>
                
                <IoMdCloseCircle onClick={() => setToggleFilter(!toggleFilter)} className='absolute right-2 md:hidden block text-3xl' />
                
                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Category</span>
                    <select name="" id="" className='bg-transparent cursor-pointer border-none outline-none text-gray-600 text-[14px]'>
                        <option value="*">All Categories</option>
                        <option value="">Technology</option>
                        <option value="">Grocery</option>
                        <option value="">Fashion</option>
                    </select>
                </div>

                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Shipped From</span>
                    <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                        <input type="checkbox" id='overseas-check' />
                        <label htmlFor='overseas-check' className='ml-2 cursor-pointer'>Overseas</label>
                    </div>
                </div>

                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Price</span>
                    <div className='text-gray-600 flex gap-2 cursor-pointer font-medium mt-1 text-[14px] w-fit'>
                        <input type="number" className='border border-gray-600 rounded-md w-20 px-2 py-[6px]' min={0} placeholder='Min' />
                        <span className='text-xl content-center text-gray-600'>-</span>
                        <input type="number" className='border border-gray-600 rounded-md w-20 px-2 py-[6px]' min={0} placeholder='Max' />
                    </div>
                </div>

                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Rating</span>
                    <div className='text-gray-600 flex gap-1 cursor-pointer font-medium text-[14px] w-fit'>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                </div>

                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Warranty Type</span>
                    <div className='mt-1'>
                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='no-warranty' />
                            <label htmlFor='no-warranty' className='ml-2 cursor-pointer'>No Warranty</label>
                        </div>

                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='seller-warranty' />
                            <label htmlFor='seller-warranty' className='ml-2 cursor-pointer'>Seller Warranty</label>
                        </div>

                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='brand-warranty' />
                            <label htmlFor='brand-warranty' className='ml-2 cursor-pointer'>Brand Warranty</label>
                        </div>

                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='local-seller-warranty' />
                            <label htmlFor='local-seller-warranty' className='ml-2 cursor-pointer'>Local Seller Warranty</label>
                        </div>

                    </div>
                </div>

                <div className='grid gap-1 py-5 border-t-2'>
                    <span className='font-semibold'>Color Family</span>
                    <div className='mt-1'>
                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='black-color' />
                            <label htmlFor='black-color' className='ml-2 cursor-pointer'>Black</label>
                        </div>

                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='white-color' />
                            <label htmlFor='white-color' className='ml-2 cursor-pointer'>White</label>
                        </div>

                        <div className='text-gray-600 flex cursor-pointer text-[14px] w-fit'>
                            <input type="checkbox" id='multi-color' />
                            <label htmlFor='multi-color' className='ml-2 cursor-pointer'>Multicolor</label>
                        </div>
                    </div>
                </div>

                </aside>
                

            <main>
                <div className='product-search-items flex flex-wrap'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </main>

        </div>
    </div>
  )
}