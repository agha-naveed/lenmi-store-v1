import type { Metadata } from "next";
import "../globals.css";
import Navbar from '@/components/Navbar'
import { Suspense } from "react";
import Loader from "../components/Loading";
import { LoginProvider } from "../components/LoginContext";
import { CartProvider } from "../components/CartProvider";
import { SearchProvider } from "../components/SearchContext";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lenmi Store Online Shopping Platform",
  description: "Get Whatever you want!",
  metadataBase: new URL("https://www.lenmistore.com"),
  keywords: ["shopping", "online store", "Lenmi store", "buy", "products", "clothing", "electronics"],
  robots: "index, follow",
  openGraph: {
    title: "Lenmi Store Online Shopping Platform",
    description: "Get Whatever you want!",
    url: "https://www.lenmistore.com",
    siteName: "Lenmi Store",
    images: [
      {
        url: "https://www.stylefactoryproductions.com/wp-content/uploads/2022/04/how-to-make-an-online-store-copy-1024x576.png",
        width: 800,
        height: 600,
        alt: "Lenmi Store Banner"
      }
    ]
  },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LoginProvider>
        <CartProvider>
          <SearchProvider>
            <body>
                <Suspense fallback={<Loader />}>
                  <Navbar />
                  <Suspense fallback={<Loader />}>
                    {props.children}
                    {props.modal}
                  </Suspense>
                  <Footer />
                </Suspense>
            </body>
          </SearchProvider>
        </CartProvider>
      </LoginProvider>
    </html>
  );
}