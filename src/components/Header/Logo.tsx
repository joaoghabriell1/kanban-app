import { useMediaQuery } from "../../hooks/useMediaQuery";
import styled from "styled-components";
import logo from "../../assets/icon-logo.svg";
import desktopLogo from "../../assets/icon-desktop-logo.svg";
import { useThemeContext } from "../../context/theme/ThemeContext";

interface StyledProps {
  $theme: string;
}

const Logo = () => {
  const { currentTheme } = useThemeContext();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <div>
        {isMobile ? (
          <img src={logo} alt="logo icon" />
        ) : (
          <DesktopLogo $theme={currentTheme.title} src={desktopLogo} alt="" />
        )}
      </div>
    </>
  );
};

const DesktopLogo = styled.img<StyledProps>`
  filter: ${(props) =>
    props.$theme === "light"
      ? "null"
      : "invert(95%) sepia(42%) saturate(0%) hue-rotate(110deg) brightness(109%) contrast(104%)"};
`;

export default Logo;
