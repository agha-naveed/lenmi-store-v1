'use client'
import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { MdAddPhotoAlternate } from "react-icons/md";
import img from '@/images/jethalal.jpeg'
import { useForm } from 'react-hook-form';
import Form from 'next/form';
import { IoCloseCircle } from "react-icons/io5";
import RichTextEditor from '@/app/components/RichTextEditor';

interface IFormInputs {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string,
    password: string;
    account_type: string
}


export default function page() {
    let [selectedImage, setSelectedImage] = useState<string[]>([])
     
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();


    const onSubmit = async (data: IFormInputs) => {
            
            // if(data.email.includes(".com") || data.email.includes(".net") || data.email.includes(".org")) {
            //     setEmailError("")
            //     const res = await fetch("http://localhost:3000/account/signup/api", {
            //         method: "POST",
            //         body: JSON.stringify(data)
            //     })
            //     if(res.ok) {
            //         setMessage(await res.json())
            //     }
            //     else {
            //         setMessage("error")
            //     }
    
                
            //     if(message != "error") {
            //         redirect("/account")
            //     }
            //     else {
            //         alert("Invalid Email or Password")
            //     }
            // }
            // else {
            //     setEmailError("Not Valid Email...")
            // }
        }



    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setSelectedImage((prevImages) => [...prevImages, URL.createObjectURL(file)]);
        }
      };
    
    const handleRemoveImage = (imageUrl: string) => {
        setSelectedImage((prevImages) => prevImages.filter(image => image !== imageUrl));
    };
    

    return (
        <div className='container mx-auto'>
            <Form action={''} onSubmit={handleSubmit(onSubmit)} formMethod='POST' className='grid gap-10'>

                <div className='flex gap-3 shadow-md shadow-gray-400 rounded-lg w-fit p-5'>
                    
                    <div title='Upload Picture'>
                        <label htmlFor="upload-product-pic" className='cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg'>
                            <MdAddPhotoAlternate className='text-4xl text-gray-500' />
                        </label>
                        <input type="file" accept='image/*'
                         id='upload-product-pic' disabled={selectedImage.length == 5 ? true : false}
                         className='hidden'
                         onChange={handleImageChange}
                         />
                    </div>

                    {
                        selectedImage.map((imgs, index) => {
                            return (
                                    <div key={`${imgs} - ${index}`} className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative'>
                                    { 
                                        <>
                                            <Image src={imgs} alt='' width={300} height={300} className='w-full h-full object-cover' />
                                            <IoCloseCircle title='remove picture' className='absolute w-5 h-5 top-0 right-0 z-20 cursor-pointer' onClick={() => handleRemoveImage(imgs)} />
                                        </>
                                    }
                                    </div>
                            )
                        })
                    }
                    <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative'>
                        <span className='text-gray-600 select-none'>Photo</span>
                    </div>
                </div>

                <div className='font-opensans grid gap-4 w-fit'>
                    <div className='flex gap-3'>
                        <div className='grid gap-2'>
                            <label htmlFor="" className='w-[500px] font-medium'>Product Name</label>
                            <input type="text" className='border py-2 px-3' />
                        </div>
                        <div className='grid gap-2'>
                            <label htmlFor="" className='font-medium'>Category</label>
                            <select name="" id="" className='py-2 px-3 w-40'>
                                <option value="">-- select --</option>
                                <option value={`electronics`}>Electronics</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid gap-2'>
                        <label htmlFor="" className='font-medium'>Description</label>
                        <RichTextEditor />
                    </div>

                    <button className='w-full bg-slate-800 text-white p-[10px] rounded-lg hover:bg-slate-900 transition-all'>Add Product</button>
                </div>
            </Form>
        </div>
    )
}