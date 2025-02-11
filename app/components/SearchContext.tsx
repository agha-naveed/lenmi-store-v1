'use client'

import "../globals.css";
import { createContext, useContext, useState } from "react";


type SearchContextType = {
  query: object;
  setQuery: (query: object[]) => void
}

const defaultSearch: SearchContextType = {
  query: {},
  setQuery: () => {}
}

const searchContext = createContext<SearchContextType>(defaultSearch)

export function SearchProvider({ children }: { children: React.ReactNode }) {

  const [searchQuery, setSearchQuery] = useState<object[]>([]);

  return (
      <searchContext.Provider value={{query: searchQuery, setQuery: setSearchQuery}}>
        {children}
      </searchContext.Provider>
  );
}

export const useSearchQuery = () => useContext(searchContext)