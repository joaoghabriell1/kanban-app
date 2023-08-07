import { useThemeContext } from "../../context/theme/ThemeContext";
import downArrow from "../../assets/icon-down-arrow.svg";
import boardIcon from "../../assets/icon-board.svg";
import moonIcon from "../../assets/icon-moon.svg";
import sumIcon from "../../assets/icon-sun.svg";
import Switch from "react-switch";
import styled from "styled-components";

interface StyledLiProps {
  activeLink: boolean;
}

const NavBar = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <Wrapper>
      <h3>Platform Launch</h3>
      <img src={downArrow} alt="" />
      <NavBarContainer>
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
      </NavBarContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  display: flex;
  gap: 1rem;
  position: relative;
`;

const NavBarContainer = styled.nav`
  min-width: 250px;
  min-height: 320px;
  padding: 1.6rem;
  border-radius: 8px;

  position: absolute;
  background: ${(props) => props.theme.colors["bg-cards"]};
  box-shadow: 0px 0px 10px gray;
  top: 100%;
`;

const Header = styled.header`
  color: ${(props) => props.theme.colors["fc-text"]};

  h4 {
    text-transform: uppercase;
    letter-spacing: 2.4px;
    font-size: var(--fs-12);
  }
`;

const Ul = styled.ul`
  margin-block: 2rem 3rem;
`;

const Li = styled.li<StyledLiProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-block: 1.5rem;
  border: 0;
  font-size: var(--fs-15);
  margin-left: -1.5rem;
  padding-left: 1.5rem;
  border-top-right-radius: 100vh;
  border-bottom-right-radius: 100vh;

  background: ${(props) =>
    props.activeLink ? props.theme.colors["hv-bg-sidebar-item"] : "inhirit"};
  color: ${(props) =>
    props.activeLink
      ? props.theme.colors["fc-active-sideber-item"]
      : props.theme.colors["fc-text"]};

  img {
    width: 16px;
    height: 16px;
    filter: ${(props) =>
      props.activeLink
        ? "null"
        : "invert(50%) sepia(5%) saturate(0%) hue-rotate(346deg) brightness(96%) contrast(105%);"};
  }
`;

const NewBoardButton = styled.button`
  img {
    width: 16px;
    height: 16px;
    filter: invert(45%) sepia(83%) saturate(468%) hue-rotate(203deg)
      brightness(60%) contrast(91%);
    margin-right: 1rem;
  }

  border: 0;
  font: inherit;
  display: flex;
  background: none;
  align-items: center;
  color: ${(props) => props.theme.colors["fc-main-purple"]};
  font-weight: bold;
`;

const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 3rem;
  border-radius: 5px;
  background: ${(props) => props.theme.colors["bg-main"]};
  img {
    aspect-ratio: 1/1;
    height: 25px;
    filter: invert(50%) sepia(5%) saturate(0%) hue-rotate(346deg)
      brightness(96%) contrast(105%);
  }
`;

export default NavBar;
