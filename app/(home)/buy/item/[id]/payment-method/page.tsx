"use client";
import React, { useEffect, useState } from "react";
import { useBuyContext } from "@/app/components/BuyContext";
import Image from "next/image";
import cod from "@/images/payment-methods/cod.png";
import easypaisa from "@/images/payment-methods/Easypaisa-logo.png";
import jazzcash from "@/images/payment-methods/new-Jazzcash-logo.png";
import card from "@/images/payment-methods/Credit_or_Debit_Card.png";
import { redirect } from "next/navigation";

export default function page() {
  const { buyData, setBuyData }: any = useBuyContext();
  useEffect(() => {
    // if(buyData.userId == 0) {
    //   redirect("/cart")
    // }
    console.log(buyData)
  }, [])

  const [payMethod, setPayMethod] = useState<string>("");

  return (
    <div className="container mx-auto py-8 grid justify-center gap-4">
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
        className={`w-full h-fit
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
              group px-6
              items-center
              gap-2 py-3
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
              group px-6
              items-center
              gap-2 py-3
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
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="grid">
              <div>
                <label htmlFor="">Bank:</label>
                <select name="" id="">
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
            </div>
            <button
              className={`flex
              bg-orangeClr
              group px-6
              items-center
              gap-2 py-3
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
          ""
        }
      </div>
    </div>
  );
}
