import React, { ReactNode, createContext, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface UIContextTypes {
  showDesktopNavBar: boolean;
  toggleDesktopNavBar: () => void;
}

const UIContext = createContext<UIContextTypes>({
  showDesktopNavBar: true,
  toggleDesktopNavBar: () => {},
});

export const UIContextProvider = ({ children }: Props) => {
  const [showDesktopNavBar, setShowDesktopNav] = useState<boolean>(true);

  const toggleDesktopNavBar = () => {
    setShowDesktopNav((prev) => !prev);
  };

  const value = {
    showDesktopNavBar,
    toggleDesktopNavBar,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUIContext = () => {
  return useContext(UIContext);
};
