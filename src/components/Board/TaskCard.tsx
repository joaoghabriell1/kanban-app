import { Task } from "../../types/Task";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CurrentTaskModal } from "../CurrentTaskModal/index";
import { useUIContext } from "../../context/ui/UiContext";

interface Props {
  columnId: string;
}
const TaskCard = ({
  title,
  subtasks,
  id,
  columnId,
  description,
  status,
}: Task & Props) => {
  const { showCurrentTaskModal, toggleCurrentTaskModal } = useUIContext();
  const { boardId } = useParams();
  const totalSubtasks = Object.values(subtasks).length;
  const totalCompleted = Object.values(subtasks).reduce((total, subtask) => {
    if (subtask.completed) {
      return (total += 1);
    }
    return total;
  }, 0);

  return (
    <>
      {showCurrentTaskModal === id ? (
        <div>
          <CurrentTaskModal
            boardId={boardId!}
            currentTaskId={id}
            currentColumnId={columnId}
            handleModal={toggleCurrentTaskModal}
            task={{ title, subtasks, id, description, status }}
          />
        </div>
      ) : null}
      <Li
        onClick={() => {
          toggleCurrentTaskModal(id);
        }}>
        <H4>{title}</H4>
        <P>
          {totalCompleted} of {totalSubtasks} subtasks
        </P>
      </Li>
    </>
  );
};

const Li = styled.li`
  background: ${(props) => props.theme.colors["bg-cards"]};
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  min-width: 28rem;
  &:hover {
    opacity: 0.8;
  }
`;

const H4 = styled.h4`
  margin-bottom: 0.8rem;
`;

const P = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors["fc-text"]};
`;

export default TaskCard;
