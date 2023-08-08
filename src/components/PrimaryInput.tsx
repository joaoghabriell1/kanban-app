import styled from "styled-components";

interface Props {
  label: string;
  placeholder: string;
  id: string;
}

const PrimaryInput = ({ label, placeholder, id }: Props) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} placeholder={placeholder} type="text" />
    </Container>
  );
};

const Label = styled.label`
  color: ${(props) => props.theme.colors["fc-text"]};
  font-weight: bold;
`;

const Input = styled.input`
  font-size: 13px;
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PrimaryInput;
