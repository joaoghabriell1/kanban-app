import { useThemeContext } from "../../context/Theme/ThemeContext";
import { useAuthContext } from "../../context/Auth/AuthContext";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useUIContext } from "../../context/UI/UIContext";
import { useBoards } from "../../hooks/useBoards";
import showNavIcon from "../../assets/icon-eye-2.svg";
import hideNavIcon from "../../assets/icon-eye.svg";
import boardIcon from "../../assets/icon-board.svg";
import moonIcon from "../../assets/icon-moon.svg";
import sumIcon from "../../assets/icon-sun.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
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
  const { toggleTheme, currentTheme } = useThemeContext();
  const isMobile = useMediaQuery("(max-width:768px)");
  const { toggleDesktopNavBar, toggleNewBoardModal, handleOpenNewBoardModal } =
    useUIContext();
  const { logOut } = useAuthContext();
  const { dataArray } = useBoards();
  const { boardId } = useParams();
  const totalBoards = dataArray?.reduce((total) => (total += 1), 0) || 0;
  const navigate = useNavigate();
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
          <h4>all boards({totalBoards})</h4>
        </Header>
        <Ul>
          {dataArray?.map((board, index) => {
            return (
              <Li key={index}>
                <img src={boardIcon} alt="board icon" />
                {board.title}
                <Link to={`/${board.apiKey}`}></Link>
              </Li>
            );
          })}
          <Li
            onClick={() => {
              toggleNewBoardModal();
              navigate(`/${boardId ? boardId : "-"}/addnewboard`);
            }}
            activeLink={false}
          >
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
