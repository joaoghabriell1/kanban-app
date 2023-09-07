import SecondaryButton from "../SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import styled from "styled-components";
import Modal from "../UI/Modal";
import useDeleteTask from "../../hooks/useDeleteTask";

const DeleteComponentModal = () => {
  const { action, boardId, currentColumnId, currentTaskId } = useParams();
  const { deleteTask, isLoading } = useDeleteTask();
  const navigate = useNavigate();

  const isTask = action === "deletetask";

  const deleteTaskWarningMessage = `Are you sure you want to delete this task and its subtasks? This action cannot be reversed.`;
  const deleteBoardWarningMessage = `Are you sure you want to delete this board? This action will remove all columns and tasks and cannot be reversed.`;

  const handleDelete = () => {
    if (isTask) {
      const payload = {
        columnId: currentColumnId!,
        taskId: currentTaskId!,
      };
      deleteTask(payload);
    }
  };

  const handleCancel = () => {
    navigate(`/${boardId}`);
  };
  return (
    <Modal heigth="auto">
      <h4>Delete this {isTask ? "task" : "boad"}?</h4>
      <WarningMessage>
        {isTask ? deleteTaskWarningMessage : deleteBoardWarningMessage}
      </WarningMessage>
      <ActionsContainer>
        <DeleteButton
          onClick={handleDelete}
          text={isLoading ? "Deleting..." : "Delete"}
        />
        <SecondaryButton onClick={handleCancel} text="Cancel" />
      </ActionsContainer>
    </Modal>
  );
};

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.4rem;
  & button {
    flex-basis: 50%;
  }
`;

const WarningMessage = styled.p`
  color: ${({ theme }) => theme.colors["fc-text"]};
  font-weight: 500;
  margin-top: 2.4rem;
`;

export default DeleteComponentModal;
