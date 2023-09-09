import styled from "styled-components";
import editIcon from "../../assets/icon-edit.svg";

interface Props {
  title: string | undefined;
  onClick: () => void;
}

const Heading = ({ title, onClick }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <button onClick={onClick}>
        <img src={editIcon} alt="edit task icon" />
      </button>
    </Container>
  );
};

const Title = styled.h3`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 15px;
  }
  margin-right: 1rem;
`;

const Container = styled.div`
  color: ${(props) => props.theme.colors["fc-headings"]};
  display: flex;
  align-items: center;
  & h3 {
    flex: 1;
  }

  & button {
    background: none;
    border: 0;
  }
`;
export default Heading;
