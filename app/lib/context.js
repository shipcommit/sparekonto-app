'use client';

import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [savings, setSavings] = useState(50000);

  return (
    <AppContext.Provider value={{ savings, setSavings }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
