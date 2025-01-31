'use client'
import Image from 'next/image';
import React, { useState, ChangeEvent, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { MdAddPhotoAlternate } from "react-icons/md";
import img from '@/images/jethalal.jpeg'
import { useForm, Controller } from 'react-hook-form';
import Form from 'next/form';
import { IoCloseCircle } from "react-icons/io5";
import RichTextEditor from '@/app/components/RichTextEditor';

interface IFormInputs {
    product_name: string;
    category: string;
    description?: string;
    price: number;
    d_price: number;
    stock: number;
    color: string;
    content: string;
}


export default function page() {

  let [selectedImage, setSelectedImage] = useState<string[]>([])

  const [customColors, setCustomColors] = useState<string[]>([]);
  const [newColor, setNewColor] = useState('');

  const handleAddColor = () => {
    if (newColor.trim()) {
      setCustomColors([...customColors, newColor.trim()]);
      setNewColor(''); // Reset input
    }
  };


    const { watch, setValue, register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();

    const contentValue = watch("content");

    const onSubmit = async (data: IFormInputs) => {
        console.log("Submitted!")
        console.log(data)
        console.log(selectedImage)

            
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
      <form onSubmit={handleSubmit(onSubmit)} className='grid gap-10'>
        {/* ---------- Image Upload Section ---------- */}
        <div className='flex gap-3 shadow-md shadow-gray-400 rounded-lg w-fit p-5'>
          <div title='Upload Picture'>
            <label htmlFor="upload-product-pic" className='cursor-pointer flex justify-center items-center w-[120px] h-[120px] border border-dashed border-gray-500 rounded-lg'>
              <MdAddPhotoAlternate className='text-4xl text-gray-500' />
            </label>
            <input
              type="file"
              accept='image/*'
              id='upload-product-pic'
              disabled={selectedImage.length === 5}
              className='hidden'
              onChange={handleImageChange}
            />
          </div>

          {selectedImage.map((imgs, index) => (
            <div key={`${imgs}-${index}`} className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative'>
              <Image src={imgs} alt='' width={300} height={300} className='w-full h-full object-cover' />
              <IoCloseCircle title='remove picture' className='absolute w-5 h-5 top-0 right-0 z-20 cursor-pointer' onClick={() => handleRemoveImage(imgs)} />
            </div>
          ))}

          <div className='flex justify-center items-center w-[120px] h-[120px] border border-gray-500 rounded-lg overflow-hidden relative'>
            <span className='text-gray-600 select-none'>Photo</span>
          </div>
        </div>
        {/* ---------- Image Upload Section Ended ---------- */}

        {/* Form Fields */}
        <div className='font-opensans grid gap-4 w-fit'>
          <div className='flex gap-3'>
            <div className='grid gap-2'>
              <label htmlFor="" className='font-medium'>Product Name</label>
              <input type="text" className='w-[500px] border border-gray-400 rounded-md py-2 px-3' {...register("product_name")} required />
            </div>
            <div className='grid gap-2'>
              <label htmlFor="" className='font-medium'>Category</label>
              <select {...register("category")} className='py-2 px-3 w-44 rounded-md border border-gray-400'>
                <option value="">-- select --</option>
                <option value={`electronics`}>Electronics</option>
              </select>
            </div>
          </div>
          <div className='grid gap-2'>
            <label htmlFor="" className='font-medium'>Description</label>
            <RichTextEditor
                value={contentValue}
                onChange={(value:any) => setValue("content", value)}
            />
          </div>
          
          <div className='flex gap-3 w-fit'>
            <div className='grid gap-1'>
              <label htmlFor="" className='font-medium'>Price</label>
              <input type="text" className='border border-gray-400 rounded-md py-2 px-3' {...register("price")} required />
            </div>
            <div className='grid gap-1'>
              <label htmlFor="" className='font-medium'>Discounted Price</label>
              <input type="text" className='border border-gray-400 rounded-md py-2 px-3' {...register("d_price")} required />
            </div>
          </div>

          <div className='grid gap-1'>
            <label htmlFor="" className='font-medium'>Stock</label>
            <input type="number" className='border border-gray-400 rounded-md py-2 px-3' {...register("stock")} required />
          </div>

          <div className='grid gap-1'>
            <div>
              <label htmlFor="" className='font-medium'>Colors</label>
              <ul className='grid grid-cols-2 border border-gray-300 mt-[6px] py-2 px-1 rounded-md transition-all hover:h-fit w-fit overflow-hidden'>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"black"} className='cursor-pointer' id="p-clr-black" />
                  <label htmlFor="p-clr-black" className='cursor-pointer'>Black</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"white"} className='cursor-pointer' id="p-clr-white" />
                  <label htmlFor="p-clr-white" className='cursor-pointer'>White</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"brown"} className='cursor-pointer' id="p-clr-brown" />
                  <label htmlFor="p-clr-brown" className='cursor-pointer'>Brown</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"blue"} className='cursor-pointer' id="p-clr-blue" />
                  <label htmlFor="p-clr-blue" className='cursor-pointer'>Blue</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"silver"} className='cursor-pointer' id="p-clr-silver" />
                  <label htmlFor="p-clr-silver" className='cursor-pointer'>Silver</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"red"} className='cursor-pointer' id="p-clr-red" />
                  <label htmlFor="p-clr-red" className='cursor-pointer'>Red</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"purple"} className='cursor-pointer' id="p-clr-purple" />
                  <label htmlFor="p-clr-purple" className='cursor-pointer'>Purple</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"orange"} className='cursor-pointer' id="p-clr-orange" />
                  <label htmlFor="p-clr-orange" className='cursor-pointer'>Orange</label>
                </li>
                <li className='p-2 w-32 flex gap-2'>
                  <input type="checkbox" {...register("color")} value={"pink"} className='cursor-pointer' id="p-clr-pink" />
                  <label htmlFor="p-clr-pink" className='cursor-pointer'>Pink</label>
                </li>

                {customColors.map((color, index) => (
                  <li key={index} className='p-2 w-32 flex gap-2'>
                    <input 
                      type="checkbox"
                      id={`p-clr-${index}`}
                      value={color}
                      {...register("color")}
                      className='cursor-pointer' 
                    />
                    <label htmlFor={`p-clr-${index}`} className='cursor-pointer'>
                      {color}
                    </label>
                  </li>
                ))}

              </ul>

              <div className='grid'>
                <label htmlFor="">Other</label>
                <div className='flex gap-[6px]'>
                  <input type="text"
                  className='w-32 border border-black rounded-md py-1 px-2'
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                  />
                  <button type='button'
                  className='border bg-slate-800 text-white rounded-md w-fit py-2 px-5'
                  onClick={handleAddColor}
                  >Add</button>
                </div>
              </div>

            </div>
          </div>

          <button type="submit" className='w-full bg-slate-800 text-white p-[10px] rounded-lg hover:bg-slate-900 transition-all'>
            Add Product
          </button>
        </div>
      </form>
    </div>
    )
}