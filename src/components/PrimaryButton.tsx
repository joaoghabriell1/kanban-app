import { useMediaQuery } from "../hooks/useMediaQuery";
import styled from "styled-components";

interface StyledProps {
  width: string | undefined;
}

interface Props {
  mobileText?: string;
  text: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({ text, width, mobileText, onClick }: Props) => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Button onClick={onClick} width={width}>
      {isMobile && mobileText ? mobileText : text}
    </Button>
  );
};

const Button = styled.button<StyledProps>`
  color: ${(props) => props.theme.colors["fc-primary-button"]};
  background: ${(props) =>
    props.disabled
      ? props.theme.colors["bg-disabled-btns"]
      : props.theme.colors["bg-primary-btn"]};
  line-height: 0;
  font-weight: bold;
  border: 0;
  padding: 1.9rem;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  min-width: ${({ width }) => (width ? width : "100%")};

  &:hover {
    background: ${(props) => props.theme.colors["hv-bg-primary-btn"]};
  }
`;

export default PrimaryButton;
