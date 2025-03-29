"use client";

import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

type LoadingContextType = {
  loading: boolean;
  setLoading: (state: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType | null>(null);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();
    setLoading(true);

    const timer = setTimeout(() => {
      NProgress.done();
      setLoading(false);
    }, 500); // Simulating loading time

    return () => {
      clearTimeout(timer);
      NProgress.done();
      setLoading(false);
    };
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
        {children}
    </LoadingContext.Provider>
  );
}
