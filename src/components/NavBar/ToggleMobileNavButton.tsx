import downArrow from "../../assets/icon-down-arrow.svg";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";

interface Props {
  toggleMobileNav: Dispatch<SetStateAction<boolean>>;
}

const ToggleMobileNavButton = ({ toggleMobileNav }: Props) => {
  return (
    <Button
      onClick={() => {
        toggleMobileNav((prev) => !prev);
      }}
    >
      <img src={downArrow} alt="down arrow icon" />
    </Button>
  );
};

const Button = styled.button`
  background: none;
  border: 0;
`;

export default ToggleMobileNavButton;
