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
import playstore from '@/images/app-downloads/playstore.png'
import appstore from '@/images/app-downloads/appstore.png'

export default function Footer() {
    return (
        <footer className="bg-slate-800 font-opensans mt-10">
            <div className="container mx-auto py-10 flex md:flex-row flex-col gap-16">
                <div className="flex flex-col md:gap-10 gap-4 items-center">
                    <Link href={"/"} className="w-36">
                        <Image src={logo} alt="Lenmi Store Logo" width={300} height={300} className="w-full h-full" />
                    </Link>

                    <div className="flex text-[22px] md:justify-evenly gap-4 text-white">
                        <Link href={'https://facebook.com/naveedbalti31'} target="_blank">
                            <FaFacebook />
                        </Link>
                        <Link href={"https://x.com/naveed_kazmi31"} target="_blank">
                            <PiXLogo />
                        </Link>
                        <Link href={'https://linkedin.com/agha-naveed'} target="_blank">
                            <FaLinkedinIn />
                        </Link>
                        <Link href={'https://github.com/agha-naveed'} target="_blank">
                            <FaGithub />
                        </Link>
                    </div>

                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="text-white flex flex-col text-[14px] gap-1 md:items-start items-center">
                            <h4 className="font-bold text-[16px] pb-1">Customer Service</h4>
                            <Link className="w-fit" href={""}>Help Center</Link>
                            <Link className="w-fit" href={""}>Transaction Services</Link>
                            <Link className="w-fit" href={""}>How to Buy</Link>
                            <Link className="w-fit" href={""}>Returns & Refunds</Link>
                        </div>
                        
                        <div className="text-white flex flex-col text-[14px] gap-1 md:items-start items-center">
                            <h4 className="font-bold text-[16px] pb-1">Shopping with us</h4>
                            <Link className="w-fit" href={""}>Making Payments</Link>
                            <Link className="w-fit" href={""}>Delivery Options</Link>
                            <Link className="w-fit" href={""}>Buyer Protection</Link>
                        </div>
                    </div>

                    <div className="flex md:flex-row flex-col gap-10 md:items-start items-center md:text-start text-center">
                        <div className="text-white flex flex-col text-[14px] gap-1">
                            <h4 className="font-bold text-[16px] pb-1">Payment Methods</h4>
                            <div className="flex items-center gap-1">
                                <Image className="h-10 w-fit bg-white rounded-md p-1" title="Cash on Delivery" src={cod} alt="Cash on Delivery" />
                                <Image className="h-10 w-fit bg-white rounded-md p-1" src={easypaisa} alt="Easypaisa" title="Easypaisa" />
                                <Image className="h-10 w-fit bg-white rounded-md p-1" src={jazzcash} alt="Jazzcash" title="JazzCash" />
                                <Image className="h-10 w-fit bg-white rounded-md p-1" src={card} alt="Debit/Credit Card" title="Debit/Credit Card" />
                            </div>

                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-white">Get App from:</span>
                            <div className="flex flex-col gap-1">
                                <Image src={playstore} className="w-36 cursor-pointer" alt="Get it from PlayStore" />
                                <Image src={appstore} className="w-36 cursor-pointer" alt="Get it from AppStore" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="w-full block py-1 font-medium text-white text-[14px] text-center">Developed @AghaNaveed_ 2025</span>
        </footer>
    );
}
