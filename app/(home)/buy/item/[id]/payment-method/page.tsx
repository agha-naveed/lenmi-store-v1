"use client";
import React, { useEffect, useState } from "react";
import { useBuyContext } from "@/app/components/BuyContext";
import Image from "next/image";
import cod from "@/images/payment-methods/cod.png";
import easypaisa from "@/images/payment-methods/Easypaisa-logo.png";
import jazzcash from "@/images/payment-methods/new-Jazzcash-logo.png";
import card from "@/images/payment-methods/Credit_or_Debit_Card.png";
import Form from "next/form";
import { useForm } from "react-hook-form";
import axios from "axios";
import { redirect, useParams } from "next/navigation";


interface IFormInputs {
  bank: string;
  cardNumber: number;
  cvv: number;
  expiryDate: Date;
}

export default function Page() {

  const param = useParams()
  
  const { register, handleSubmit } = useForm<IFormInputs>();
 
  const { buyData } = useBuyContext();
  
  useEffect(() => {
    async function checkLogin() {
      const res = await axios.get(`/buy/item/${param.id}/payment-method/api`)
      if(await res.data.message != "ok")
        redirect("/")
    }
    checkLogin()
  }, [])

  const onSubmit = async (data: IFormInputs | string) => {
    console.log(data, buyData)
    const obj = {
      buyData,
      paymentData: data
    }

    obj.buyData['payMethod'] = payMethod
    
    const res = await axios.post(`/buy/item/${param.id}/payment-method/api`, obj)

    if(res.status == 201) {
      redirect("/")
    }
    else {
      alert("Some Error Occurred!")
    }
    
  }

  const [payMethod, setPayMethod] = useState<string>("");


  return (
    <div className="container mx-auto py-8 grid justify-items-center gap-4">
      <div className="w-fit rounded-2xl shadow-xl bg-white font-opensans p-6">
        <h1 className="text-xl font-semibold mb-4">Payment Method:</h1>

        <div className="flex md:gap-2 gap-3 flex-wrap justify-center">
          <button
            title="Cash on Delivery"
            className={`md:w-36 md:h-36
              w-28 h-28
              bg-zinc-300
              rounded-lg p-2
              gap-2 flex flex-col
              justify-center
              items-center
              ${payMethod == "cod" ?
                "outline outline-2 outline-offset-1 outline-black" : ""}
              `}
            onClick={() => {
              setPayMethod("cod")
            }}
          >
            <Image src={cod} alt="Cash on Delivery" className="w-16" />
            <span className="text-center text-[15px] font-medium leading-[17px]">
              Cash on Delivery
            </span>
          </button>

          <button
            title="Easypaisa"
            className={`md:w-36 md:h-36
              w-28 h-28
              bg-zinc-300
              rounded-lg p-2
              gap-2 flex flex-col
              justify-center
              items-center
              ${payMethod == "easypaisa" ?
                "outline outline-2 outline-offset-1 outline-black" : ""}
              `}
            onClick={() => {
              setPayMethod("easypaisa")
            }}
          >
            <Image src={easypaisa} alt="Cash on Delivery" className="w-16" />
            <span className="text-center text-[15px] font-medium leading-[17px]">
              Easypaisa
            </span>
          </button>

          <button
            title="JazzCash"
            className={`md:w-36 md:h-36
              w-28 h-28
              bg-zinc-300
              rounded-lg p-2
              gap-2 flex flex-col
              justify-center
              items-center
              ${payMethod == "jazzcash" ?
                "outline outline-2 outline-offset-1 outline-black" : ""}
              `}
            onClick={() => {
              setPayMethod("jazzcash")
            }}
          >
            <Image src={jazzcash} alt="Cash on Delivery" className="w-16" />
            <span className="text-center text-[15px] font-medium leading-[17px]">
              JazzCash
            </span>
          </button>

          <button
            title="Credit/Debit Card"
            className={`md:w-36 md:h-36
              w-28 h-28
              bg-zinc-300
              rounded-lg p-2
              gap-2 flex flex-col
              justify-center
              items-center
              ${payMethod == "card" ?
                "outline outline-2 outline-offset-1 outline-black" : ""}
              `}
            onClick={() => {
              setPayMethod("card")
            }}
          >
            <Image src={card} alt="Cash on Delivery" className="w-16" />
            <span className="text-center text-[15px] font-medium leading-[17px]">
              Credit/Debit Card
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:w-[648px]
        w-full
        h-fit
        rounded-2xl
        shadow-xl
      bg-white
        font-opensans
        p-6 ${payMethod.length > 0 ? "block" : "hidden"}`}
      >
        {
          payMethod == "cod" ? 
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="grid">
              <h3 className="text-xl content-center">
                Please Keep 
                <span className="font-bold">
                  <span className="text-[16px]"> PKR </span>
                   <span className="relative -left-[1px]"> {buyData.quantity * buyData.productPrice} </span>
                </span>
                Ready
              </h3>
              <h4>When the parcel arrives at your door</h4>
            </div>
            <button
              className={`flex
                bg-orangeClr
                group sm:px-6
                px-5
                items-center
                gap-2 sm:py-3
                py-2
                text-white
                rounded-lg
                relative
                transition-all
                overlay-btn
                overflow-hidden
              `}
            >
              <span className='transition-all relative z-10' onClick={() => onSubmit("cod")}>Click to Finish</span>
            </button>
          </div>
          :
          payMethod == "jazzcash" ?
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="grid">
              <h3 className="text-xl content-center">
                Please Keep 
                <span className="font-bold">
                  <span className="text-[16px]"> PKR </span>
                   <span className="relative -left-[1px]"> {buyData.quantity * buyData.productPrice} </span>
                </span>
                Ready
              </h3>
              <h4>When the parcel arrives at your door</h4>
            </div>
            <button
            type="submit"
            className={`flex
              bg-orangeClr
              group sm:px-6
              px-5
              items-center
              gap-2 sm:py-3
              py-2
              text-white
              rounded-lg
              relative
              transition-all
              overlay-btn
              overflow-hidden
            `}
            >
              <span className='transition-all relative z-10 '>Click to Finish</span>
            </button>
          </div>
          :
          payMethod == "easypaisa" ?
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="grid">
              <h3 className="text-xl content-center">
                Please Keep 
                <span className="font-bold">
                  <span className="text-[16px]"> PKR </span>
                   <span className="relative -left-[1px]"> {buyData.quantity * buyData.productPrice} </span>
                </span>
                Ready
              </h3>
              <h4>When the parcel arrives at your door</h4>
            </div>
            <button
              className={`flex
              bg-orangeClr
              group sm:px-6
              px-5
              items-center
              gap-2 sm:py-3
              py-2
              text-white
              rounded-lg
              relative
              transition-all
              overlay-btn
              overflow-hidden
            `}
            >
              <span className='transition-all relative z-10 '>Click to Finish</span>
            </button>
          </div>
          :
          payMethod == "card" ?
          <Form action={""} onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-5 justify-between">
            <div className="grid gap-1 w-full">
                <label htmlFor="">Select Bank:</label>
                <select id="" className="w-full h-10 rounded-lg bg-transparent border border-gray-400 px-3 cursor-pointer" {...register("bank")} title="Select Bank">
                  <option value="">-- select --</option>
                  <option value="hbl">HBL Habib Bank Limited</option>
                  <option value="alhabib">Bank Al Habib Limited</option>
                  <option value="habib_metro">Habib Metro Bank</option>
                  <option value="soneri">Soneri Bank</option>
                  <option value="allied">Allied Bank</option>
                  <option value="js">JS Bank</option>
                  <option value="mcb">MCB Bank</option>
                </select>
            </div>

            <div className="grid gap-1 w-full">
              <label htmlFor="">Card Number</label>
              <input type="number" minLength={16} maxLength={16} className="w-full h-10 px-3 border border-gray-400 rounded-lg" title="Enter 16-digit Card Number" required {...register("cardNumber")} />
            </div>

            <div className="flex sm:flex-row flex-col gap-4 w-full">
              <div className="grid gap-1">
                <label htmlFor="">CVV</label>
                <input type="number" minLength={3} maxLength={4} className="sm:w-40 w-full h-10 px-3 border border-gray-400 rounded-lg" required {...register("cvv")} />
              </div>
              <div className="grid gap-1">
                <label htmlFor="">Expiry Date</label>
                <input type="date" minLength={3} maxLength={4} className="sm:w-44 w-full h-10 px-3 border border-gray-400 rounded-lg" required {...register("expiryDate")} />
              </div>
            </div>


            <button
              className={`flex
              bg-orangeClr
              group sm:px-6
              px-5
              items-center
              gap-2 sm:py-3
              py-2
              text-white
              rounded-lg
              relative
              transition-all
              overlay-btn
              overflow-hidden
              `}
              type="submit"
            >
              <span className='transition-all relative z-10 '>Click to Finish</span>
            </button>
          </Form>
          :
          ""
        }
      </div>
    </div>
  );
}