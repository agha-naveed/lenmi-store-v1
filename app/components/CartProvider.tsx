'use client'

import "../globals.css";
import { createContext, useContext, useState } from "react";


type CartData = {
  length: number;
  setLength: (length: number) => void
}

const defaultCartLength: CartData = {
  length: 0,
  setLength: () => {}
}

const cartContext = createContext<CartData>(defaultCartLength)

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [length, setLength] = useState<number>(0);

  return (
      <cartContext.Provider value={{length, setLength}}>
        {children}
      </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext)