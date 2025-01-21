'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from 'next/form'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


interface IFormInputs {
    email: string;
    password: string;
}


export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
    
    const [message, setMessage] = useState("")


    const onSubmit = async (data: IFormInputs) => {
        const res = await fetch("http://localhost:3000/account/api", {
          method: "POST",
          body: JSON.stringify(data),
          credentials: "include"
        })
        console.log("this is response"+res)

        // const router = useRouter()

        // if(res.ok) {
        //   setMessage(res)
        //   // router.push("/")
        // }
        // else {
        //   setMessage("error")
        // }
    }
    

    return (
      <>
          <div className='w-full min-h-full grid justify-center content-center'>
              
              <h2 className='text-4xl p-6 font-muli-bold text-center'>Login</h2>
              
              <Form action='' onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular border border-gray-400 p-5 rounded-md' formMethod='post'>
                  
                <div className='grid'>
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder='e.g: abc@xyz.com' className='w-[300px] h-9 px-2 rounded-md border border-gray-300' required {...register("email")} />
                </div>

                <div className='grid'>
                  <label htmlFor="">Password</label>
                  <input type="password" className='w-[300px] h-9 px-2 rounded-md border border-gray-300' required {...register("password")} />
                </div>

                <button type='submit' title='Login' className='w-full h-10 transition-all rounded-md border font-muli-semibold bg-slate-800 hover:bg-slate-900 text-white '>Login</button>

              </Form>

              <p className='py-2 text-[18px]' title='Click to signup'>Create an account? <Link href="/account/signup" className='text-red-400 hover:underline'>Signup</Link></p>
          </div>
      </>
    )
}