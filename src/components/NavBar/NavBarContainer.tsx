import { useAuthContext } from "../../context/Auth/AuthContext";
import { useBoards } from "../../hooks/useBoards";
import { NavBarWrapper } from "./styles";
import NavbarHeader from "./Header.tsx";
import BoardsList from "./BoardsList.tsx";
import ToggleNavBarButton from "./ToggleNavBarButton.tsx";
import SwitchThemeButton from "./SwitchThemeButton.tsx";
interface Props {
  showDesktopNavBar?: boolean;
}

const NavBarContainer = ({ showDesktopNavBar }: Props) => {
  const { logOut } = useAuthContext();
  const { dataArray } = useBoards();
  const totalBoards = dataArray?.reduce((total) => (total += 1), 0) || 0;

  return (
    <>
      <NavBarWrapper $showDesktopNavBar={showDesktopNavBar}>
        <button
          onClick={() => {
            logOut();
          }}
        >
          logout
        </button>
        <NavbarHeader totalBoards={totalBoards} />
        <BoardsList dataArray={dataArray} />
        <ToggleNavBarButton />
        <SwitchThemeButton />
      </NavBarWrapper>
    </>
  );
};

export default NavBarContainer;
