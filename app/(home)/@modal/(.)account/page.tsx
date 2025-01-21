'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect } from 'next/navigation'
import { IoMdCloseCircle } from "react-icons/io"
import { useRouter } from 'next/navigation'
import Form from 'next/form'


interface IFormInputs {
  email: string;
  password: string;
}


export default function Login() {
  const router = useRouter()
  
      const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
      
      const [message, setMessage] = useState("")
  
  
      const onSubmit = async (data: IFormInputs) => {
          // const res = await fetch("http://localhost:3000/account/api", {
          //   method: "POST",
          //   body: JSON.stringify(data),
          //   credentials: "include"
          // })

          // console.log("this is response"+res)
  
  
          // if(res.ok) {
          //   setMessage(await res.json())
          //   redirect("/")
          // }
          // else {
          //   setMessage("error")
          //   alert("Error")
          // }
      }

  return (
      <div className='w-full min-h-screen fixed top-0 left-0 backdrop-blur-[10px] bg-black/40 grid justify-center content-center z-[200]'>
        <div className='w-fit min-h-fit rounded-2xl relative shadow-2xl'>
          <button onClick={() => router.back()} className='w-fit h-fit absolute z-10 top-6 right-6'>
            <IoMdCloseCircle title='Close' className='text-[26px] cursor-pointer' />
          </button>

          <Form action={""} onSubmit={() => handleSubmit(onSubmit)} className='grid bg-white gap-2 font-muli-regular border border-gray-400 pt-10 p-5 rounded-md'>
            <h2 className='text-3xl font-opensans text-center font-semibold'>Login</h2>

            <div className='grid'>
              <label>Email</label>
              <input
                type="email"
                placeholder='e.g: abc@xyz.com'
                className='w-[300px] h-9 px-2 rounded-md border border-gray-300'
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
            </div>

            <div className='grid'>
              <label>Password</label>
              <input
                type="password"
                className='w-[300px] h-9 px-2 rounded-md border border-gray-300'
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
            </div>

            <button
              type='submit'
              title='Login'
              className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white'
            >
              Login
            </button>

          </Form>
        </div>
      </div>
  )
}
