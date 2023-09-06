import styled from "styled-components";

const EmptyBoard = () => {
  return (
    <Container>
      <Message>Wellcome to your kanban task management app!</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 95%;
  align-items: center;
  justify-content: center;
`;
const Message = styled.p`
  font-size: 2rem;
`;
export default EmptyBoard;
