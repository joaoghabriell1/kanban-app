import styled from "styled-components";
interface Props {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const TextAreaDefaultInput = ({ onChange, value }: Props) => {
  const placeholder =
    "e.g. It’s always good to take a break. This  15 minute break will  recharge the batteries a little.";
  return (
    <Container>
      <Label htmlFor="description">Description</Label>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id="Description"
        cols={30}
        rows={10}
      ></Textarea>
    </Container>
  );
};
const Label = styled.label`
  color: ${(props) => props.theme.colors["fc-headings"]};
  font-weight: 500w;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 15px;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1.5rem;
  color: inherit;
  font-family: inherit;
  background: none;
  resize: none;
  width: 100%;
  max-height: 10rem;
  border: 1px solid rgba(130, 143, 163, 0.25);
  outline: none;
  &::placeholder {
    line-height: 2.3rem;
    font-weight: 400;
    opacity: 0.25;
  }
  &::-webkit-scrollbar {
    width: 15px;
  }
`;

export default TextAreaDefaultInput;
