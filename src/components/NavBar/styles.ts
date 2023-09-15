import styled from "styled-components";

interface StyledLiProps {
  $activeLink?: boolean;
  $showDesktopNavBar?: boolean;
}

export const Wrapper = styled.div`
  flex: 1;
  margin-left: 1.5rem;
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    margin-left: 13.5rem;
  }
`;

export const NavBarWrapper = styled.nav<StyledLiProps>`
  min-width: 250px;
  max-width: 250px;
  min-height: 320px;
  padding: 1.6rem;
  border-radius: 8px;
  position: absolute;
  background: ${(props) => props.theme.colors["bg-cards"]};
  box-shadow: 0px 0px 10px gray;
  top: 78px;
  transition: left 0.25s;

  @media (min-width: 769px) {
    border-radius: 0;
    left: ${(props) => (props.$showDesktopNavBar ? "0" : "-265px")};
    bottom: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
  z-index: 99;
`;

export const Header = styled.header`
  color: ${(props) => props.theme.colors["fc-text"]};

  h4 {
    text-transform: uppercase;
    letter-spacing: 2.4px;
    font-size: var(--fs-12);
  }
`;

export const Ul = styled.ul`
  margin-block: 2rem 0.8rem;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 15px;
  }
  margin-left: -1.6rem;
  max-height: 367.5px;
`;

export const Li = styled.li<StyledLiProps>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-block: 1.5rem;
  border: 0;
  font-size: var(--fs-15);
  margin-left: -1.5rem;
  padding-left: 3.2rem;
  border-top-right-radius: 100vh;
  border-bottom-right-radius: 100vh;
  a {
    position: absolute;
    inset: 0;
  }
  background: ${(props) =>
    props.$activeLink
      ? props.theme.colors["bg-active-sidebar-item"]
      : "inhirit"};
  color: ${(props) =>
    props.$activeLink
      ? props.theme.colors["fc-active-sideber-item"]
      : props.theme.colors["fc-text"]};

  &:hover {
    background: ${(props) => props.theme.colors["hv-bg-sidebar-item"]};
    color: ${(props) => props.theme.colors["fc-main-purple"]};
    cursor: pointer;
    img {
      width: 16px;
      height: 16px;
      filter: invert(50%) sepia(5%) saturate(0%) hue-rotate(346deg)
        brightness(96%) contrast(105%);
    }
  }
  img {
    width: 16px;
    height: 16px;
    filter: ${(props) =>
      props.$activeLink
        ? "null"
        : "  invert(45%) sepia(15%) saturate(419%) hue-rotate(177deg) brightness(90%) contrast(91%)"};
  }
`;

export const NewBoardButton = styled.button`
  img {
    width: 16px;
    height: 16px;
    filter: invert(62%) sepia(91%) saturate(643%) hue-rotate(209deg)
      brightness(82%) contrast(89%);
    margin-right: 1rem;
  }
  margin-left: -1.55rem;
  border: 0;
  font: inherit;
  display: flex;
  background: none;
  align-items: center;
  color: ${(props) => props.theme.colors["fc-main-purple"]};
  font-weight: bold;
`;

export const SwitchContainer = styled.div`
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

export const HideDesktopSideBarButton = styled.button`
  color: ${(props) => props.theme.colors["fc-text"]};
  background: none;
  border: 0;
  font: inherit;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-block: 0 4.7rem;
  &:hover {
    zoom: 103%;
  }
`;

export const ShowDesktopSideBarButton = styled.button`
  background: none;
  border: 0;
  position: absolute;
  left: 0;
  width: 58rem;
  bottom: 9rem;
  transition: all 1s;
`;
