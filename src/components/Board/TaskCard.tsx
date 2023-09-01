import { Task } from "../../types/Task";
import styled from "styled-components";

const TaskCard = ({ title, description, subtasks, status }: Task) => {
  return (
    <>
      <Li>
        <H4>{title}</H4>
        <P>0 of 1 subtasks</P>
      </Li>
    </>
  );
};

const Li = styled.li`
  background: ${(props) => props.theme.colors["bg-cards"]};
  padding: 2.3rem 1.6rem;
  border-radius: 8px;
  max-width: 28rem;
`;

const H4 = styled.h4`
  margin-bottom: 0.8rem;
`;

const P = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.colors["fc-text"]};
`;

export default TaskCard;
