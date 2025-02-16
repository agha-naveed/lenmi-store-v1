"use client";
import React from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-800">
            <div className="container mx-auto py-10">
                <div>
                    <div className="w-32">
                        <Image src={logo} alt="Lenmi Store Logo" width={300} height={300} className="w-full h-full" />
                    </div>

                </div>
                <div>
                    <h4>Customer Service</h4>
                    <Link href={""}></Link>
                </div>
            </div>
        </footer>
    );
}
