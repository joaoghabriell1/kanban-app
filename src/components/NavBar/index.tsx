import ToggleMobileNavButton from "./ToggleMobileNavButton";
import { useUIContext } from "../../context/UI/UIContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import NavBarContainer from "./NavBarContainer";
import { Wrapper } from "./styles";
import { useState } from "react";

const NavBar = () => {
  const { showDesktopNavBar } = useUIContext();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Wrapper>
      <h3>Platform Launch</h3>
      {isMobile && <ToggleMobileNavButton toggleMobileNav={setShowMobileNav} />}
      {isMobile && showMobileNav ? <NavBarContainer /> : null}
      {!isMobile ? (
        <NavBarContainer showDesktopNavBar={showDesktopNavBar} />
      ) : null}
    </Wrapper>
  );
};

export default NavBar;
