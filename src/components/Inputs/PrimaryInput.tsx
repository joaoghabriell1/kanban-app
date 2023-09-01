import styled from "styled-components";
import { PrimaryInputTag, Label } from "./styles";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  placeholder: string;
  id?: string;
}

const PrimaryInput = ({ value, onChange, label, placeholder, id }: Props) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <PrimaryInputTag
        onChange={onChange}
        value={value}
        required
        id={id}
        placeholder={placeholder}
        type="text"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default PrimaryInput;
