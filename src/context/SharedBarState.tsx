import React, { useState, createContext, useContext, ReactNode } from "react";

// Define the shape of the context value
interface SharedBarStateContextValue {
  isMobileBarVisible: boolean;
  turnOnBar: () => void;
  turnOffBar: () => void;
}

// Define the props for the provider
interface SharedBarStateProviderProps {
  children: ReactNode;
}

// Create the context with a default value of undefined
const SharedBarStateContext = createContext<SharedBarStateContextValue | undefined>(undefined);

// Custom hook to use the shared bar state context
export const useSharedBarState = (): SharedBarStateContextValue => {
  const context = useContext(SharedBarStateContext);
  if (!context) {
    throw new Error("useSharedBarState must be used within a SharedBarStateProvider");
  }
  return context;
};

// Provider component
export const SharedBarStateProvider: React.FC<SharedBarStateProviderProps> = ({ children }) => {
  const [isMobileBarVisible, setMobileBarVisibility] = useState(false);

  const turnOnBar = () => {
    setMobileBarVisibility(true);
  };

  const turnOffBar = () => {
    setMobileBarVisibility(false);
  };

  return (
    <SharedBarStateContext.Provider value={{ isMobileBarVisible, turnOnBar, turnOffBar }}>
      {children}
    </SharedBarStateContext.Provider>
  );
};
