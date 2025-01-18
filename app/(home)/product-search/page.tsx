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
            </aside>
        </div>
    </div>
  )
}