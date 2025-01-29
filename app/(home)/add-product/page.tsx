'use client'
import Image from 'next/image';
import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import img from '@/images/jethalal.jpeg'

export default function page() {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-3'>
                
                <div title='Upload Picture'>
                    <label htmlFor="upload-product-pic" className='cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg'>
                        <MdAddPhotoAlternate className='text-4xl text-gray-500' />
                    </label>
                    <input type="file" id='upload-product-pic' className='hidden' />
                </div>
                <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg'>
                    <span className='select-none text-gray-500 font-opensans font-medium'>Photo</span>
                </div>
                <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg'>
                    <span className='select-none text-gray-500 font-opensans font-medium'>Photo</span>
                </div>
                <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg'>
                    <span className='select-none text-gray-500 font-opensans font-medium'>Photo</span>
                </div>
                
            </div>
        </div>
    )
}