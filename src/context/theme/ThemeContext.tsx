import { DefaultTheme } from "styled-components";
import { createContext, useEffect, useState } from "react";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { useContext } from "react";

interface ThemeContext {
  currentTheme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({
  currentTheme: dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useState(dark);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme === "dark" ? dark : light);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev.title === "light" ? dark : light));
    localStorage.setItem("theme", currentTheme === dark ? "light" : "dark");
  };

  const value = {
    currentTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
