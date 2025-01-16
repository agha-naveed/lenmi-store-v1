import type { Metadata } from "next";
import logo from '@/images/logo.png'
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}