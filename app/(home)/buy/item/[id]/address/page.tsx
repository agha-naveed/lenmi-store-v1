"use client";
import React, { useEffect, useState } from "react";
import { useBuyContext } from "@/app/components/BuyContext";
import Image from "next/image";
import cod from "@/images/payment-methods/cod.png";
import easypaisa from "@/images/payment-methods/Easypaisa-logo.png";
import jazzcash from "@/images/payment-methods/new-Jazzcash-logo.png";
import card from "@/images/payment-methods/Credit_or_Debit_Card.png";

export default function page() {
  const { buyData, setBuyData }: any = useBuyContext();
  useEffect(() => {
    console.log(buyData)
  }, [])

  const [payMethod, setPayMethod] = useState<string>("");

  return (
    <div className="container mx-auto py-8 grid justify-center">
      <div className="w-fit rounded-2xl shadow-xl bg-white font-opensans p-6">
        <h1 className="text-xl font-semibold mb-4">Payment Method:</h1>

        <div className="flex gap-2">
          <button
            title="Cash on Delivery"
            className="w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center"
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
            className="w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center"
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
            className="w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center"
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
            className="w-36 h-36 bg-zinc-300 rounded-lg p-2 gap-2 flex flex-col justify-center items-center"
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

      <div className="w-full h-40 rounded-2xl shadow-xl bg-white font-opensans p-6">
        {
          payMethod == "cod" ? 
          <div className="flex gap-5">
            <h3 className="text-xl content-center">
              Please Keep PKR {/*buyData.quantity * buyData.productPrice*/} 19000
              Ready
            </h3>
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
