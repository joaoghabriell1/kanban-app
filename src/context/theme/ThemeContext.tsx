import { createContext, useState } from "react";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";

interface Theme {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;

    headerBg: string;
  };
}

interface ThemeContext {
  currentTheme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContext>({
  currentTheme: light,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prev) => (prev.title === "light" ? dark : light));
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
