import type { Metadata } from "next";
import logo from '@/images/logo.png'
import Image from "next/image";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <div className='md:flex grid w-full min-h-screen h-full'>
          <div className='md:w-1/2 w-full md:min-h-screen h-32 bg-slate-800 grid justify-center content-center'>
            <Image src={logo} className='w-44' alt="Lenmi Store Logo" />
          </div>

          {children}
          
        </div>
      </>
  );
}