'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import Form from 'next/form'
import Link from 'next/link';
import { redirect } from 'next/navigation'

export default function Signup() {
    
    const { register, handleSubmit } = useForm<IFormInputs>();
    
    const [message, setMessage] = useState("")
    const [emailError, setEmailError] = useState("")


    interface IFormInputs {
        first_name: string;
        last_name: string;
        phone_number: number;
        email: string,
        password: string;
        account_type: string
    }


    const onSubmit = async (data: IFormInputs) => {
        
        if(data.email.includes(".com") || data.email.includes(".net") || data.email.includes(".org")) {
            setEmailError("")
            const res = await fetch("/account/signup/api", {
                method: "POST",
                body: JSON.stringify(data)
            })
            if(res.ok) {
                setMessage(await res.json())
            }
            else {
                setMessage("error")
            }

            
            if(message != "error") {
                // redirect("/account")
            }
            else {
                alert("Invalid Email or Password")
            }
        }
        else {
            setEmailError("Not Valid Email...")
        }
    }
    

    function restrictSigns(e:React.KeyboardEvent): void {
        const char = e.key;
        if (char === '+' || char === '-') {
            e.preventDefault()
        }
    }

    return (
        <>
            <div className='w-full min-h-full grid justify-center content-center'>
                
                <h2 className='text-4xl p-6 font-muli-bold text-center'>Signup</h2>
                
                <Form action={''} onSubmit={handleSubmit(onSubmit)} className='grid gap-2 font-muli-regular border border-gray-400 p-5 rounded-md' formMethod='POST'>
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
                        {<span className='text-red-600 text-[15px]'> {emailError} </span>}
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

                </Form>

                <p className='py-2 text-[18px]' title='Login if already have an account'>Already have an account? <Link href="/account" className='text-red-400 hover:underline'>Login</Link></p>
            </div>
            
        </>
    )
}