'use client'
import React, { useEffect } from 'react'
import { useBuyContext } from "@/app/components/BuyContext";
export default function page() {

  const { buyData, setBuyData }:any = useBuyContext();
  
  
  
  return (
    <div>page</div>
  )
}