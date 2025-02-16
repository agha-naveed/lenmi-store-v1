import type { Metadata } from "next";
import "../globals.css";
import Navbar from '@/components/Navbar'
import { Suspense } from "react";
import Loader from "../components/Loading";
import { CartProvider } from "../components/CartProvider";
import { SearchProvider } from "../components/SearchContext";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lenmi Store Online Shopping Platform",
  description: "Get Whatever you want!",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <CartProvider>
        <SearchProvider>
          <body>
              <Suspense fallback={<Loader />}>
                <Navbar />
                <Suspense fallback={<Loader />}>
                  {props.children}
                  {props.modal}
                  <Footer />
                </Suspense>
              </Suspense>
          </body>
        </SearchProvider>
      </CartProvider>
    </html>
  );
}