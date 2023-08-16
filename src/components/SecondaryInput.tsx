import styled from "styled-components";
import cancelIcon from "../assets/icon-close.svg";

interface StyledProps {
  $disabled: boolean | undefined;
}

interface Props {
  disabled?: boolean;
  id: string;
  value: string;
  onClick: (id: string) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SecondaryInput = ({ disabled, onClick, value, id, onChange }: Props) => {
  return (
    <>
      <Container>
        <Input
          required
          id={id}
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Add a title to yout coloumn."
        />
        <Button
          $disabled={disabled}
          disabled={disabled}
          type="button"
          onClick={() => onClick(id)}
        >
          <img src={cancelIcon} alt="cancel input icon" />
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

const Input = styled.input`
  font-size: 13px;
  width: 100%;
  color: ${(props) => props.theme.colors["fc-inputs"]};
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: none;
  &::placeholder {
    opacity: 0.25;
  }
`;

const Button = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  background: none;
  border: 0;
`;

export default SecondaryInput;
