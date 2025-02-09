'use client'
import React, { useEffect } from 'react'
import { useBuyContext } from "@/app/components/BuyContext";
export default function page() {

  const { buyData, setBuyData }:any = useBuyContext();
  useEffect(() => {
    console.log("This is Data: " + buyData)
  }, [])
  return (
    <div>page</div>
  )
}