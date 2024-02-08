import { Task } from "../../types/Task";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { CurrentTaskModal } from "../CurrentTaskModal/index";

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
  const [showTaskModal, setShowTaskModal] = useState(false);
  const { boardId, action } = useParams();
  let totalSubtasks = Object.values(subtasks).length;
  let totalCompleted = Object.values(subtasks).reduce((total, subtask) => {
    if (subtask.completed) {
      return (total += 1);
    }
    return total;
  }, 0);

  function handleModal() {
    setShowTaskModal((prev) => !prev);
  }

  return (
    <>
      <button onClick={handleModal}>teste</button>
      {showTaskModal ? (
        <div>
          <CurrentTaskModal
            boardId={boardId!}
            currentTaskId={id}
            currentColumnId={columnId}
            handleModal={handleModal}
            task={{ title, subtasks, id, description, status }}
          />
        </div>
      ) : null}
      <Li>
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
