import styled from "styled-components";

interface StyledProps {
  width: string | undefined;
}

interface Props {
  text: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const SecondaryButton = ({ onClick, text, disabled, width }: Props) => {
  return (
    <Button onClick={onClick} width={width} disabled={disabled}>
      {text}
    </Button>
  );
};

export default SecondaryButton;

const Button = styled.button<StyledProps>`
  color: ${(props) => props.theme.colors["fc-secondary-button"]};
  background: ${(props) =>
    props.disabled
      ? props.theme.colors["bg-disabled-btns"]
      : props.theme.colors["bg-seconday-btn"]};
  line-height: 0;
  font-weight: bold;
  border: 0;
  padding: 1.9rem;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  width: ${({ width }) => (width ? width : "100%")};

  &:hover {
    background: ${(props) => props.theme.colors["hv-bg-secondary-btn"]};
  }
`;
