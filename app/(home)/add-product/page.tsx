'use client'
import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect } from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import img from '@/images/jethalal.jpeg'
import { useForm } from 'react-hook-form';
import Form from 'next/form';
import { IoCloseCircle } from "react-icons/io5";

export default function page() {

    interface IFormInputs {
        first_name: string;
        last_name: string;
        phone_number: number;
        email: string,
        password: string;
        account_type: string
    }

    let [selectedImage, setSelectedImage] = useState<string[]>([])
     
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();


    return (
        <div className='container mx-auto'>
            <Form action={""} formMethod='POST'>
                <div className='flex gap-3 shadow-lg shadow-gray-400 rounded-lg w-fit p-5'>
                    
                    <div title='Upload Picture'>
                        <label htmlFor="upload-product-pic" className='cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg'>
                            <MdAddPhotoAlternate className='text-4xl text-gray-500' />
                        </label>
                        <input type="file" accept='image/*'
                         id='upload-product-pic' disabled={selectedImage.length == 3 ? true : false}
                         className='hidden'
                         onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            const file = event.target.files?.[0];
                            if(file) {
                                setSelectedImage((prevImages) => [...prevImages, URL.createObjectURL(file)]);
                            }
                         }}
                         />
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden'>
                    {
                        selectedImage[0] ? 
                        <>
                            <Image src={selectedImage[0]} alt='' width={300} height={300} className='w-full h-full object-cover' />
                            <IoCloseCircle className='' />
                        </>
                        : null
                    }
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden'>
                    {
                        selectedImage[1] ? 
                        <>
                            <Image src={selectedImage[1]} alt='' width={300} height={300} className='w-full h-full object-cover' />
                        </>
                        : null
                    }
                    </div>
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg'>
                    {
                        selectedImage[2] ? 
                        <Image src={selectedImage[2]} alt='' width={300} height={300} className='w-full h-full object-cover' />
                        : null
                    }
                    </div>
                </div>

                <div className='font-opensans'>
                    <div className='flex'>
                        <div className='grid'>
                            <label htmlFor="" className='text-[15px] font-medium'>Product Name</label>
                            <input type="text" className='border' />
                        </div>
                        <div className='grid'>
                            <label htmlFor="" className='text-[15px] font-medium'>Category</label>
                            <select name="" id="">
                                <option value="">-- select --</option>
                                <option value={`electronics`}>Electronics</option>
                            </select>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}