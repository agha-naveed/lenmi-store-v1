'use client'

import "../globals.css";
import { createContext, useContext, useState } from "react";

type DeliveryAddress = {
  recipientName: string;
  phone_number: number;
  district: string;
  address: string;
};

type BuyData = {
  userId: number;
  productId: number;
  quantity: number;
  deliveryAddress: DeliveryAddress;
}

const defaultBuyData: BuyData = {
  userId: 0,
  productId: 0,
  quantity: 0,
  deliveryAddress: {
    recipientName: "",
    phone_number: 0,
    district: "",
    address: ""
  },
}

const buyContext = createContext<{
  buyData: BuyData;
  setBuyData: React.Dispatch<React.SetStateAction<BuyData>>;
} | undefined>(undefined);


export function BuyDataProvider({ children }: { children: React.ReactNode }) {
  const [buyData, setBuyData] = useState<BuyData>(defaultBuyData);
  return (
      <buyContext.Provider value={{buyData, setBuyData}}>
        {children}
      </buyContext.Provider>
  );
}

export const useBuyContext = () => useContext(buyContext)