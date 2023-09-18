import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import { useNavigate } from "react-router-dom";
import { actions } from "../../consts/actions";

const EmptyBoard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/-/${actions.ADD_NEW_BOARD}`);
  };

  return (
    <Container>
      <Message>Welcome to your kanban task management app!</Message>
      <PrimaryButton
        width="5rem"
        text="Create a new board"
        onClick={handleClick}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
  height: 95%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Message = styled.p`
  font-size: 2rem;
`;
export default EmptyBoard;
