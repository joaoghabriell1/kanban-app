import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { actions } from "../../consts/actions";

interface Props {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
}

interface StyledProps {
  $right?: string;
  $left?: string;
  $top?: string;
  $bottom?: string;
}

const EditCard = ({ top, bottom, right, left }: Props) => {
  const { action, boardId, currentColumnId, currentTaskId } = useParams();
  const navigate = useNavigate();

  const isTask = action === actions.MANAGE_CURRENT_TASK;

  const handleEdit = () => {
    if (isTask) {
      navigate(
        `/${boardId}/${actions.EDIT_TASK}/${currentColumnId}/${currentTaskId}`
      );
    }
  };
  const handleDelete = () => {
    if (isTask) {
      navigate(
        `/${boardId}/${actions.DELETE_TASK}/${currentColumnId}/${currentTaskId}`
      );
      return;
    }

    navigate(`/${boardId}/${actions.DELETE_BOARD}`);
  };

  return (
    <Container
      $top={top || "auto"}
      $bottom={bottom || "auto"}
      $right={right || "auto"}
      $left={left || "auto"}
    >
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
