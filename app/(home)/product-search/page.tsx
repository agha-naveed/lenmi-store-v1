'use client'

import React from 'react'

export default function page() {
  return (
    <div>
        <div className="container mx-auto py-3 font-opensans">
            <aside className='p-3 w-[250px]'>

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
                    <div className='text-gray-600 flex gap-2 cursor-pointer text-[14px] w-fit'>
                        <input type="number" className='border border-gray-600 rounded-md w-20 p-2' min={0} placeholder='Min' />
                        <span className='text-xl content-center'>-</span>
                        <input type="number" className='border border-gray-600 rounded-md w-20 p-2' min={0} placeholder='Max' />
                    </div>
                </div>

            </aside>
        </div>
    </div>
  )
}