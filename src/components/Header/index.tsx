import ThemeContext from "../../context/theme/ThemeContext";
import { HeaderTag } from "./styles";
import { useContext } from "react";

const Header = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderTag>
      header
      <button onClick={() => toggleTheme()}>
        switch to {currentTheme.title === "light" ? "dark" : "light"}
      </button>
    </HeaderTag>
  );
};

export default Header;
