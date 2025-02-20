'use client'

import "../globals.css";
import { createContext, useContext, useState } from "react";


type loginData = {
  loggedin: boolean;
  setLoggedin: (isLogin: boolean) => void
}

const defaultLoginData: loginData = {
    loggedin: false,
    setLoggedin: () => {}
}

const loginContext = createContext<loginData>(defaultLoginData)

export function LoginProvider({ children }: { children: React.ReactNode }) {

  const [loggedin, setLoggedin] = useState<boolean>(false);

  return (
      <loginContext.Provider value={{loggedin, setLoggedin}}>
        {children}
      </loginContext.Provider>
  );
}

export const useLoginData = () => useContext(loginContext)