import { HideDesktopSideBarButton, ShowDesktopSideBarButton } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useUIContext } from "../../context/ui/UiContext";
import hideNavIcon from "../../assets/icon-eye.svg";
import showNavIcon from "../../assets/icon-eye-2.svg";

const ToggleNavBarButton = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { toggleDesktopNavBar, showDesktopNavBar } = useUIContext();

  return (
    <>
      {!isMobile && (
        <HideDesktopSideBarButton
          onClick={() => {
            toggleDesktopNavBar();
          }}
        >
          <img src={hideNavIcon} alt="eyeicon" />
          Hide SideBar
        </HideDesktopSideBarButton>
      )}
      {!showDesktopNavBar && !isMobile ? (
        <ShowDesktopSideBarButton
          onClick={() => {
            toggleDesktopNavBar();
          }}
        >
          <img src={showNavIcon} alt="eyeicon" />
        </ShowDesktopSideBarButton>
      ) : null}
    </>
  );
};

export default ToggleNavBarButton;
