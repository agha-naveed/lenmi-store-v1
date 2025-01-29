'use client'
import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect } from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import img from '@/images/jethalal.jpeg'
import { useForm } from 'react-hook-form';
import Form from 'next/form';

export default function page() {

    interface IFormInputs {
        first_name: string;
        last_name: string;
        phone_number: number;
        email: string,
        password: string;
        account_type: string
    }

    let [selectedImage, setSelectedImage] = useState<string | undefined>()
     
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();


    return (
        <div className='container mx-auto'>
            <Form action={""} formMethod='POST'>
                <div className='flex gap-3'>
                    
                    <div title='Upload Picture'>
                        <label htmlFor="upload-product-pic" className='cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg'>
                            <MdAddPhotoAlternate className='text-4xl text-gray-500' />
                        </label>
                        <input type="file" accept='image/*'
                         id='upload-product-pic'
                         className='hidden'
                         onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // const file = e.target?.files?.[0];
                            // setSelectedImage(file ? URL.createObjectURL(file) : "@/images/jethalal.jpeg")
                         }}
                         />
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden'>
                        <Image src={img} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden'>
                        <Image src={img} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg'>
                        <span className='select-none text-gray-500 font-opensans font-medium'>Photo</span>
                    </div>
                    
                </div>
            </Form>
        </div>
    )
}