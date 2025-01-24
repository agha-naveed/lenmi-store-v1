'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import defaultPic from '@/images/account/default-pic.jpg'
import { redirect } from 'next/navigation'
import axios from 'axios';
import Form from 'next/form';


export default function page() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
  
  interface IFormInputs {
    first_name: string;
    last_name: string;
    phone_number: number;
    email: string,
    password: string;
    account_type: string
  }
  
  
      let [message, setMessage] = useState("")
      let [emailError, setEmailError] = useState("")

  const onSubmit = async (data: IFormInputs) => {
          
          if(data.email.includes(".com") || data.email.includes(".net") || data.email.includes(".org")) {
              setEmailError("")
              const res = await axios.patch("http://localhost:3000/account/signup/api", {
                  method: "POST",
                  body: JSON.stringify(data)
              })
              // if(res.ok) {
              //     setMessage(await res.json())
              // }
              // else {
              //     setMessage("error")
              // }
  
              
              if(message != "error") {
                  redirect("/account")
              }
              else {
                  alert("Invalid Email or Password")
              }
          }
          else {
              setEmailError("Not Valid Email...")
          }
      }
      
  
      function restrictSigns(e:any): void {
          const char = e.key;
          if (char === '+' || char === '-') {
              e.preventDefault()
          }
      }

  return (
    <div className='font-opensans px-2 lg:gap-10 flex lg:flex-row gap-2 items-center flex-col w-full justify-center'>
      
      <div className='w-[200px] justify-items-center grid gap-2 content-start px-1'>
        <div className='w-[135px] h-[135px] rounded-full overflow-hidden border-2 p-1'>
          <Image src={defaultPic} className='rounded-full' alt='Default Profile picture' />
        </div>
        <div className='flex flex-col gap-1'>
          <button className='bg-slate-800 hover:bg-slate-900 transition-all text-white text-[15px] py-[6px] px-4 rounded-[8px] h-[42px]'>Upload Picture</button>
          <button className='bg-slate-800 hover:bg-slate-900 transition-all text-white text-[15px] py-[6px] px-4 rounded-[8px] h-[42px]'>Remove Picture</button>
        </div>
      </div>

      <div className='border-r-2 h-full'></div>
      
      <Form action={""} onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular p-5 rounded-md' formMethod='POST'>
        <div className='flex content-center justify-between'>
            <label htmlFor="">First Name</label>
            <input type="text" className='h-9 px-2 rounded-md border border-gray-300 w-[300px]' required {...register("first_name")} />
        </div>
        <div className='flex content-center justify-between'>
            <label htmlFor="">Last Name</label>
            <input type="text" className='h-9 px-2 rounded-md border border-gray-300 w-[300px]' required {...register("last_name")} />
        </div>
          
          <div className='flex content-center justify-between gap-10'>
              <label htmlFor="">Phone Number</label>
              <input type="number" onKeyDown={(e) => restrictSigns(e)}  className='h-9 w-[300px] px-2 rounded-md border border-gray-300' required {...register("phone_number", {min: 11})} />
          </div>
          <div className='flex content-center justify-between'>
              <label htmlFor="">Email</label>
              <input type="email" placeholder='e.g: abc@xyz.com' className='h-9 px-2 rounded-md border border-gray-300 w-[300px]' required {...register("email")} />
              {emailError ? <span className='text-red-600 text-[15px]'> {emailError} </span> : ""}
          </div>
          <div className='flex content-center justify-between'>
              <label htmlFor="">Password</label>
              <input type="password" className='h-9 px-2 rounded-md border border-gray-300 w-[300px]' required {...register("password")} />
          </div>

          <button type='submit' title='Sign up!' className='w-fit px-5 h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white '>Update</button>

      </Form>

    </div>
  )
}