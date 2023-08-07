import styled from "styled-components";

interface Props {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({ text, disabled }: Props) => {
  return <Button disabled={disabled}>{text}</Button>;
};

const Button = styled.button`
  color: ${(props) => props.theme.colors["fc-primary-button"]};
  background: ${(props) =>
    props.disabled
      ? props.theme.colors["bg-disabled-btns"]
      : props.theme.colors["bg-primary-btn"]};
  line-height: 0;
  font-size: 2rem;
  font-weight: bold;
  border: 0;
  padding: 1.9rem;
  border-radius: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.6rem;
  min-height: 32px;
  min-width: 40px;
`;

export default PrimaryButton;
