'use client'; // Required for context usage in client components

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface AppContextType {
    showFloatingHeart: boolean;
    setShowFloatingHeart: (value: boolean) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export function AppProvider({ children }: { children: ReactNode }) {
    const [showFloatingHeart, setShowFloatingHeart] = useState(false);

  return (
    <AppContext.Provider value={{ showFloatingHeart, setShowFloatingHeart }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the AppContext
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
