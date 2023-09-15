import { Task } from "../../types/Task";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { actions } from "../../consts/actions";

interface Props {
  columnId: string | number;
}
const TaskCard = ({ title, subtasks, apiKey, columnId }: Task & Props) => {
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
      <Link
        to={`/${boardId ? boardId : "-"}/${
          actions.MANAGE_CURRENT_TASK
        }/${columnId}/${apiKey}`}
      >
        <Li>
          <H4>{title}</H4>
          <P>
            {totalCompleted} of {totalSubtasks} subtasks
          </P>
        </Li>
      </Link>
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
