import { useBoards } from "../../hooks/useBoards";
import { NavBarWrapper } from "./styles";

import ToggleNavBarButton from "./ToggleNavBarButton.tsx";
import SwitchThemeButton from "./SwitchThemeButton.tsx";
import LogOutButton from "./LogOutButton.tsx";
import BoardsList from "./BoardsList.tsx";
import NavbarHeader from "./Header.tsx";

interface Props {
  showDesktopNavBar?: boolean;
}

const NavBarContainer = ({ showDesktopNavBar }: Props) => {
  const { dataArray } = useBoards();
  const totalBoards = dataArray?.reduce((total) => (total += 1), 0) || 0;

  return (
    <>
      <NavBarWrapper $showDesktopNavBar={showDesktopNavBar}>
        <NavbarHeader totalBoards={totalBoards} />
        <BoardsList dataArray={dataArray} />
        <LogOutButton />
        <ToggleNavBarButton />
        <SwitchThemeButton />
      </NavBarWrapper>
    </>
  );
};

export default NavBarContainer;
