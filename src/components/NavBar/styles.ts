import styled from "styled-components";

interface StyledLiProps {
  activeLink?: boolean;
  showDesktopNavBar?: boolean;
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
    left: ${(props) => (props.showDesktopNavBar ? "0" : "-265px")};
    bottom: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
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
  margin-block: 2rem 3rem;
  flex: 1;
`;

export const Li = styled.li<StyledLiProps>`
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

export const NewBoardButton = styled.button`
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
  margin-block: 2.2rem 4.7rem;
`;

export const ShowDesktopSideBarButton = styled.button`
  background: none;
  border: 0;
  position: absolute;
  left: 0;
  bottom: 5rem;
  transition: all 1s;
`;
