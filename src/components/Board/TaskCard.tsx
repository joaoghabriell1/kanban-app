import { Task } from "../../types/Task";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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

  console.log(subtasks);
  console.log(Object.values(subtasks));

  return (
    <>
      <Li>
        <Link
          to={`/${
            boardId ? boardId : "-"
          }/managecurrenttask/${columnId}/${apiKey}`}
        >
          <H4>{title}</H4>
          <P>
            {totalCompleted} of {totalSubtasks} subtasks
          </P>
        </Link>
      </Li>
    </>
  );
};

const Li = styled.li`
  background: ${(props) => props.theme.colors["bg-cards"]};
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  min-width: 28rem;
`;

const H4 = styled.h4`
  margin-bottom: 0.8rem;
`;

const P = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors["fc-text"]};
`;

export default TaskCard;
