import ToggleMobileNavButton from "./ToggleMobileNavButton";
import { useUIContext } from "../../context/ui/UiContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import NavBarContainer from "./NavBarContainer";
import { Wrapper } from "./styles";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useBoard } from "../../hooks/useBoard";

const NavBar = () => {
  const { boardId } = useParams();
  const { showDesktopNavBar } = useUIContext();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const { data } = useBoard(boardId);
  const title = data?.data?.title;

  return (
    <Wrapper>
      <h3>{title ? title : null}</h3>
      {isMobile && <ToggleMobileNavButton toggleMobileNav={setShowMobileNav} />}
      {isMobile && showMobileNav ? <NavBarContainer /> : null}
      {!isMobile ? (
        <NavBarContainer showDesktopNavBar={showDesktopNavBar} />
      ) : null}
    </Wrapper>
  );
};

export default NavBar;
