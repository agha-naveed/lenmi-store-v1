'use client'

import "../globals.css";
import { createContext, useContext, useState } from "react";


type BuyData = {
  userId: number;
  productId: number;
  quantity: number;
  deliveryAddress: object;
}

const defaultBuyData: BuyData = {
  userId: 0,
  productId: 0,
  quantity: 0,
  deliveryAddress: {},
}

const buyContext = createContext<BuyData>(defaultBuyData)

export function buyDataProvider({ children }: { children: React.ReactNode }) {

  return (
      <buyContext.Provider value={defaultBuyData}>
        {children}
      </buyContext.Provider>
  );
}

export const useBuyContext = () => useContext(buyContext)