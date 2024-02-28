"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [view, setView] = useState("home");

  return (
    <GlobalContext.Provider value={{ view, setView }}>
      {children}
    </GlobalContext.Provider>
  );
}
