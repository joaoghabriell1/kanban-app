import { useThemeContext } from "../../context/theme/ThemeContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Dispatch, SetStateAction } from "react";
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
  toggleDesktopNavBar?: Dispatch<SetStateAction<boolean>>;
}

const NavBarContainer = ({ showDesktopNavBar, toggleDesktopNavBar }: Props) => {
  const { toggleTheme, currentTheme } = useThemeContext();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <NavBarWrapper showDesktopNavBar={showDesktopNavBar}>
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
        <HideDesktopSideBarButton
          onClick={() => {
            if (toggleDesktopNavBar) {
              toggleDesktopNavBar((prev) => !prev);
            }
          }}
        >
          <img src={hideNavIcon} alt="eyeicon" />
          Hide SideBar
        </HideDesktopSideBarButton>
      </NavBarWrapper>
      {!showDesktopNavBar && !isMobile ? (
        <ShowDesktopSideBarButton
          onClick={() => {
            if (toggleDesktopNavBar) {
              toggleDesktopNavBar((prev) => !prev);
            }
          }}
        >
          <img src={showNavIcon} alt="eyeicon" />
        </ShowDesktopSideBarButton>
      ) : null}
    </>
  );
};

export default NavBarContainer;
