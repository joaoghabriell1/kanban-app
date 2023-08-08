import { useThemeContext } from "../../context/Theme/ThemeContext";
import { useAuthContext } from "../../context/Auth/AuthContext";
import { useUIContext } from "../../context/UI/UiContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import showNavIcon from "../../assets/icon-eye-2.svg";
import hideNavIcon from "../../assets/icon-eye.svg";
import boardIcon from "../../assets/icon-board.svg";
import moonIcon from "../../assets/icon-moon.svg";
import sumIcon from "../../assets/icon-sun.svg";
import Switch from "react-switch";
import {
  HideDesktopSideBarButton,
  ShowDesktopSideBarButton,
  NavBarWrapper,
  NewBoardButton,
  SwitchContainer,
  Header,
  Ul,
  Li,
} from "./styles";
interface Props {
  showDesktopNavBar?: boolean;
}

const NavBarContainer = ({ showDesktopNavBar }: Props) => {
  const { toggleDesktopNavBar } = useUIContext();
  const { toggleTheme, currentTheme } = useThemeContext();
  const isMobile = useMediaQuery("(max-width:768px)");
  const { logOut } = useAuthContext();

  return (
    <>
      <NavBarWrapper showDesktopNavBar={showDesktopNavBar}>
        <button
          onClick={() => {
            logOut();
          }}
        >
          logout
        </button>
        <Header>
          <h4>all boards(3)</h4>
        </Header>
        <Ul>
          <Li activeLink={true}>
            <img src={boardIcon} alt="board icon" />
            Platform Launch
          </Li>
          <Li activeLink={false}>
            <img src={boardIcon} alt="board icon" />
            item
          </Li>
          <Li activeLink={false}>
            <NewBoardButton>
              <img src={boardIcon} alt="board icon" />
              <span>+ Create New Board</span>
            </NewBoardButton>
          </Li>
        </Ul>
        <SwitchContainer>
          <img src={moonIcon} alt="moon icon" />
          <Switch
            onChange={() => {
              toggleTheme();
            }}
            checked={currentTheme.title === "light"}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            onColor="#6460c7"
            offColor="#2a2854"
          />
          <img src={sumIcon} alt="moon icon" />
        </SwitchContainer>
        <HideDesktopSideBarButton onClick={toggleDesktopNavBar}>
          <img src={hideNavIcon} alt="eyeicon" />
          Hide SideBar
        </HideDesktopSideBarButton>
      </NavBarWrapper>
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

export default NavBarContainer;
