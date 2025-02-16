"use client";
import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";
import easypaisa from '@/images/payment-methods/Easypaisa-logo.png'
import card from '@/images/payment-methods/Credit_or_Debit_Card.png'
import cod from '@/images/payment-methods/cod.png'
import jazzcash from '@/images/payment-methods/new-Jazzcash-logo.png'

export default function Footer() {
    return (
        <footer className="bg-slate-800 font-opensans mt-10">
            <div className="container mx-auto py-10 flex gap-10">
                <div className="flex flex-col gap-10">
                    <Link href={"/"} className="w-36">
                        <Image src={logo} alt="Lenmi Store Logo" width={300} height={300} className="w-full h-full" />
                    </Link>

                    <div className="flex text-[22px] justify-evenly text-white">
                        <FaFacebook />
                        <PiXLogo />
                        <FaLinkedinIn />
                        <FaGithub />
                    </div>

                </div>

                <div className="flex flex-wrap gap-8">
                    <div className="text-white flex flex-col text-[14px] gap-1">
                        <h4 className="font-bold text-[16px] pb-1">Customer Service</h4>
                        <Link href={""}>Help Center</Link>
                        <Link href={""}>Transaction Services</Link>
                        <Link href={""}>How to Buy</Link>
                        <Link href={""}>Returns & Refunds</Link>
                    </div>
                    
                    <div className="text-white flex flex-col text-[14px] gap-1">
                        <h4 className="font-bold text-[16px] pb-1">Shopping with us</h4>
                        <Link href={""}>Making Payments</Link>
                        <Link href={""}>Delivery Options</Link>
                        <Link href={""}>Buyer Protection</Link>
                    </div>

                    <div className="text-white flex flex-col text-[14px] gap-1">
                        <h4 className="font-bold text-[16px] pb-1">Payment Methods</h4>
                        <div className="flex items-center gap-1">
                            <Image className="h-10 w-fit bg-white rounded-md p-1" title="Cash on Delivery" src={cod} alt="Cash on Delivery" />
                            <Image className="h-10 w-fit bg-white rounded-md p-1" src={easypaisa} alt="Easypaisa" title="Easypaisa" />
                            <Image className="h-10 w-fit bg-white rounded-md p-1" src={jazzcash} alt="Jazzcash" title="JazzCash" />
                            <Image className="h-10 w-fit bg-white rounded-md p-1" src={card} alt="Debit/Credit Card" title="Debit/Credit Card" />
                        </div>

                    </div>
                </div>
            </div>
            <span className="w-full block font-medium text-white text-[14px] text-center">Developed @AghaNaveed_ 2025</span>
        </footer>
    );
}
