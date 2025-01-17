'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Link from 'next/link'
import { IoMdCloseCircle } from "react-icons/io"
import { useRouter } from 'next/navigation'

interface IFormInputs {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export default function Login() {
  const router = useRouter()
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>()

  const [isOpen, setIsOpen] = useState(true)


  const onSubmit = async (data: IFormInputs) => {
    try {
      const res = await axios.post("http://localhost:3000/api/user-login", data, {
        withCredentials: true
      })

      if (res.data.error) {
        alert("Email or Password is Incorrect")
      } else {
        setTimeout(() => {
          router.push("/")
        }, 1000)
      }
    } catch (error) {
      console.error("Error during login:", error)
      alert("An error occurred. Please try again.")
    }
  }

  return (
      <div className='w-full min-h-screen fixed top-0 left-0 backdrop-blur-[10px] bg-black/40 grid justify-center content-center'>
        <div className='w-fit min-h-fit rounded-2xl relative shadow-2xl'>
          <button onClick={() => router.back()} className='w-fit h-fit absolute z-10 top-6 right-6'>
            <IoMdCloseCircle title='Close' className='text-[26px] cursor-pointer' />
          </button>

          <form onSubmit={() => handleSubmit(onSubmit)} className='grid bg-white gap-2 font-muli-regular border border-gray-400 pt-10 p-5 rounded-md'>
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

            <p className='pt-2 text-[17px]' title='Click to signup'>
              Create an account?{" "}
              <Link href="/account/signup" className='text-red-900 hover:underline'>Signup</Link>
            </p>
          </form>
        </div>
      </div>
  )
}
