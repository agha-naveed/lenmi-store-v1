'use client'
import React from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";

export default function page() {
    return (
        <div className='container mx-auto'>
            <div>
                <div className='border border-dashed border-gray-500 rounded-lg w-fit p-10'>
                    <MdAddPhotoAlternate className='text-4xl text-gray-500' />
                </div>
            </div>
        </div>
    )
}