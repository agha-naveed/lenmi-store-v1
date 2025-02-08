"use client";

import React from "react";
import Form from "next/form";
import { useForm } from 'react-hook-form'
import axios from "axios";


interface IFormInputs {
  recipients_name: string;
  phone_number: number;
  district: string;
  address: string;
}

export default function page() {

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>();
 
  const onSubmit = async (data: IFormInputs) => {
    const res = await axios.post("/account/api", data)
    console.log(data)
    if(res.status == 201) {

      setTimeout(() => {
        window.location.reload()
      }, 800)
    }
    else {
      // setError("Invalid Email or Password")
    }
} 

  return (
    <div className="container mx-auto font-opensans">

      <section>
            <div className="w-[80%] h-full mt-5 rounded-2xl shadow-xl bg-white md:p-7 p-2">
                <h4 className="mb-5 text-[18px] font-semibold">Delivery Details</h4>
                
                <Form action={""} onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap gap-3 mb-3">
                    <div className="grid gap-1">
                        <label htmlFor="">Recipient's Name</label>
                        <input
                          type="text"
                          className="border h-9 px-3 rounded-lg"
                          {...register("recipients_name")}  
                        />
                    </div>

                    <div className="grid gap-1">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" min={11} className="border h-9 px-3 rounded-lg" {...register("phone_number")} />
                    </div>

                    <div className="grid gap-1 w-44">
                      <label htmlFor="">District</label>
                      <select {...register("district")} className="h-9 px-2 rounded-lg cursor-pointer">
                          <option value="">-- select --</option>
                          <option value="Ghanche">Ghanche</option>
                          <option value="Rondu">Rondu</option>
                          <option value="Shigar">Shigar</option>
                          <option value="Kharmang">Kharmang</option>
                          <option value="Gilgit">Gilgit</option>
                          <option value="Astore">Astore</option>
                          <option value="Ghizer">Ghizer</option>
                          <option value="Nagar">Nagar</option>
                          <option value="Hunza">Hunza</option>
                      </select>
                    </div>
                        
                  </div>

                  <div className="grid gap-1">
                    <label htmlFor="">Full Address</label>
                    <textarea {...register("address")} className="border border-zinc-400 rounded-lg w-[80%] h-20 py-2 px-3"></textarea>
                  </div>
                  <button type="submit"
                    className="bg-slate-800
                    text-white
                    py-2 px-6
                    rounded-lg
                    transition-all
                    hover:bg-slate-900
                    mt-3
                    "
                  >
                    Submit
                  </button>
                </Form>
            </div>
        </section>

    </div>
  );
}
