import styled from "styled-components";
import editIcon from "../../assets/icon-edit.svg";

interface Props {
  title: string | undefined;
  onClick: () => void;
}

const Heading = ({ title, onClick }: Props) => {
  return (
    <Container>
      <span>{title}</span>
      <button onClick={onClick}>
        <img src={editIcon} alt="edit task icon" />
      </button>
    </Container>
  );
};

const Container = styled.h3`
  color: ${(props) => props.theme.colors["fc-headings"]};
  display: flex;
  & span {
    flex: 1;
  }

  & button {
    background: none;
    border: 0;
  }
`;
export default Heading;
