import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Navbar from '@/components/Navbar'
import { Suspense } from "react";

const opensans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenmi Store Online Shopping Platform",
  description: "Get Whatever you want!",
  themeColor: "#ffffff"
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${opensans.variable} antialiased`}
      >
        <Suspense fallback={"<h1>Loading</h1>"}>
          <Navbar />
          {props.children}
          {props.modal}
        </Suspense>
      </body>
    </html>
  );
}