import SecondaryButton from "../SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import styled from "styled-components";
import Modal from "../UI/Modal";
import useDeleteTask from "../../hooks/useDeleteTask";
import useDeleteBoard from "../../hooks/useDeleteBoard";
import { actions } from "../../consts/actions";

const DeleteComponentModal = () => {
  const { action, boardId, currentColumnId, currentTaskId } = useParams();
  const { deleteTask, isDeletingTask } = useDeleteTask();
  const { deleteBoard, isDeletingBoard } = useDeleteBoard();
  const navigate = useNavigate();

  const isTask = action === actions.DELETE_TASK;

  const deleteTaskWarningMessage = `Are you sure you want to delete this task and its subtasks? This action cannot be reversed.`;
  const deleteBoardWarningMessage = `Are you sure you want to delete this board? This action will remove all columns and tasks and cannot be reversed.`;

  const handleDelete = () => {
    if (isTask) {
      const payload = {
        columnId: currentColumnId!,
        taskId: currentTaskId!,
      };
      deleteTask(payload);
    } else {
      deleteBoard();
    }
  };

  const handleCancel = () => {
    navigate(`/${boardId}`);
  };

  return (
    <Modal heigth="auto">
      <form>
        <h4>Delete this {isTask ? "task" : "board"}?</h4>
        <WarningMessage>
          {isTask ? deleteTaskWarningMessage : deleteBoardWarningMessage}
        </WarningMessage>
        <ActionsContainer>
          <DeleteButton
            onClick={handleDelete}
            text={isDeletingTask || isDeletingBoard ? "Deleting..." : "Delete"}
          />
          <SecondaryButton onClick={handleCancel} text="Cancel" />
        </ActionsContainer>
      </form>
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
