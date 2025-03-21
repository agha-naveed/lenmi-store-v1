'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { IoMdCloseCircle } from "react-icons/io"
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface IFormInputs {
    first_name: string;
    last_name: string;
    phone_number: number;
    password: string;
    email: string,
    account_type: string
}

export default function Signup() {
  const router = useRouter()
  
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>()



  const onSubmit = async (data: IFormInputs) => {
    const res = await axios.post("/account/signup/api", data, {
        withCredentials: true
    })

    if (res.status == 201) {
        setTimeout(() => {
            router.back()
        }, 1000)
    }
    else {
        alert("Email or Password is Incorrect")
    }
  }

    function restrictSigns(e:React.KeyboardEvent<HTMLInputElement>): void {
        const char = e.key;
        if (char === '+' || char === '-') {
            e.preventDefault()
        }
    }

  return (
      <div className='w-full min-h-screen fixed top-0 left-0 backdrop-blur-[10px] bg-black/40 grid justify-center content-center z-[200]'>
        <div className='w-fit min-h-fit rounded-2xl relative shadow-2xl'>
          <button onClick={() => router.back()} className='w-fit h-fit absolute z-10 top-6 right-6'>
            <IoMdCloseCircle title='Close' className='text-[26px] cursor-pointer' />
          </button>

          <form onSubmit={handleSubmit(onSubmit)} className='grid bg-white gap-2 font-muli-regular border border-gray-400 pt-10 p-5 rounded-md' method='POST'>
            <h2 className='text-3xl font-opensans text-center font-semibold'>Signup</h2>

                <div className='flex gap-2'>
                    <div className='grid'>
                        <label htmlFor="">First Name</label>
                        <input type="text" className='h-9 px-2 rounded-md border border-gray-300' required {...register("first_name")} />
                    </div>
                    <div className='grid'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" className='h-9 px-2 rounded-md border border-gray-300' required {...register("last_name")} />
                    </div>
                </div>
                <div className='grid'>
                    <label htmlFor="">Phone Number</label>
                    <input type="number" onKeyDown={(e) => restrictSigns(e)}  className='h-9 px-2 rounded-md border border-gray-300' required {...register("phone_number", {min: 11})} />
                </div>
                <div className='grid'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='e.g: abc@xyz.com' className='h-9 px-2 rounded-md border border-gray-300' required {...register("email")} />
                </div>
                <div className='grid'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='h-9 px-2 rounded-md border border-gray-300' required {...register("password")} />
                </div>

                <div className='grid py-2'>
                    <label htmlFor="">Account Type:</label>
                    <div className='flex gap-5'>
                        <div className='flex gap-1'>
                            <input type="radio" id='personal-account' value="personal" required {...register("account_type")} />
                            <label htmlFor="personal-account">Personal</label>
                        </div>
                        <div className='flex gap-1'>
                            <input type="radio" value="business" id='business-account' required {...register("account_type")} />
                            <label htmlFor="business-account">Business</label>
                        </div>
                    </div>
                </div>

                <button type='submit' title='Sign up!' className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white '>Sign up!</button>

            </form>

        </div>
      </div>
  )
}
