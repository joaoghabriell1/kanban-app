import styled from "styled-components";
import { useUIContext } from "../../context/ui/UiContext";
import { useNavigate } from "react-router-dom";
import { actions } from "../../consts/actions";
import { Task } from "types/Task";

interface Props {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  task?: Task;
  component?: string;
  boardId: string;
  columnId?: string;
  taskId?: string;
}

interface StyledProps {
  $right?: string;
  $left?: string;
  $top?: string;
  $bottom?: string;
}

const EditCard = ({
  top,
  bottom,
  right,
  left,
  component,
  boardId,
  columnId,
  taskId,
}: Props) => {
  const navigate = useNavigate();
  const { toggleCurrentTaskModal } = useUIContext();
  const isTask = component === "task";

  const handleEdit = () => {
    navigate(
      `/${boardId}/${
        isTask ? actions.EDIT_TASK : actions.EDIT_BOARD
      }/${columnId}/${taskId}`
    );
  };

  const handleDelete = () => {
    toggleCurrentTaskModal(null);
    navigate(
      `/${boardId}/${
        isTask ? actions.DELETE_TASK : actions.DELETE_BOARD
      }/${columnId}/${taskId}`
    );
  };

  return (
    <Container
      $top={top || "auto"}
      $bottom={bottom || "auto"}
      $right={right || "  auto"}
      $left={left || "auto"}>
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
const Container = styled.div<StyledProps>`
  position: absolute;
  box-shadow: 1px 1px 7px #655d5d6c;
  background: ${({ theme }) => theme.colors["bg-main"]};
  min-width: 190px;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  border-radius: 8px;
  gap: 1.6rem;
  & button:hover {
    opacity: 0.8;
  }
  inset: ${({ $top, $bottom, $left, $right }) =>
    `${$top} ${$right} ${$bottom} ${$left}`};
`;

export default EditCard;
