import { useMediaQuery } from "../../hooks/useMediaQuery";
import ToggleMobileNavButton from "./ToggleMobileNavButton";
import NavBarContainer from "./NavBarContainer";
import { Wrapper } from "./styles";
import { useState } from "react";
const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showDesktopNav, setShowDesktopNav] = useState<boolean>(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Wrapper>
      <h3>Platform Launch</h3>
      {isMobile && <ToggleMobileNavButton toggleMobileNav={setShowMobileNav} />}
      {isMobile && showMobileNav ? <NavBarContainer /> : null}
      {!isMobile ? (
        <NavBarContainer
          showDesktopNavBar={showDesktopNav}
          toggleDesktopNavBar={setShowDesktopNav}
        />
      ) : null}
    </Wrapper>
  );
};

export default NavBar;
