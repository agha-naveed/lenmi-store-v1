"use client";
import React from "react";
import { BuyDataProvider } from '@/components/BuyContext'

export default function layout({ children } : {children: React.ReactNode}) {

  return (
    <div>
      <BuyDataProvider>
        {children}
      </BuyDataProvider>
    </div>
  )
}