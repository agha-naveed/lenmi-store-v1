"use client";
import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="bg-slate-800 font-opensans">
            <div className="container mx-auto py-10 flex">
                <div>
                    <div className="w-32">
                        <Image src={logo} alt="Lenmi Store Logo" width={300} height={300} className="w-full h-full" />
                    </div>

                    <div>
                        <FaFacebook />
                        <PiXLogo />
                        <FaLinkedinIn />
                        <FaGithub />
                    </div>

                </div>

                <div className="flex flex-wrap gap-8">
                    <div className="text-white flex flex-col text-[14px]">
                        <h4 className="font-bold text-[16px] pb-1">Customer Service</h4>
                        <Link href={""}>Help Center</Link>
                        <Link href={""}>Transaction Services</Link>
                        <Link href={""}>How to Buy</Link>
                        <Link href={""}>Returns & Refunds</Link>
                    </div>
                    
                    <div className="text-white flex flex-col text-[14px]">
                        <h4 className="font-bold text-[16px] pb-1">Shopping with us</h4>
                        <Link href={""}>Making Payments</Link>
                        <Link href={""}>Delivery Options</Link>
                        <Link href={""}>Buyer Protection</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
