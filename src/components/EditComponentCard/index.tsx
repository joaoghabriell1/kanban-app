import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const EditCard = () => {
  const { action, boardId, currentColumnId, currentTaskId } = useParams();
  const navigate = useNavigate();

  const isTask = action === "managecurrenttask";

  const handleEdit = () => {
    if (isTask) {
    }
  };
  const handleDelete = () => {
    if (isTask) {
      navigate(`/${boardId}/deletetask/${currentColumnId}/${currentTaskId}`);
    }
  };

  return (
    <Container>
      <EditButton onClick={handleEdit}>
        Edit {isTask ? "Task" : "Board"}
      </EditButton>
      <DeleteButton onClick={handleDelete}>
        Delete {isTask ? "Task" : "Board"}
      </DeleteButton>
    </Container>
  );
};

const EditButton = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors["fc-text"]};
  text-align: start;
`;

const DeleteButton = styled.button`
  background: none;
  border: 0;
  color: ${({ theme }) => theme.colors["fc-red"]};
  text-align: start;
`;
const Container = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors["bg-main"]};
  right: 1rem;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: 8px;
  gap: 1.6rem;
  & button:hover {
    opacity: 0.8;
  }
`;

export default EditCard;
