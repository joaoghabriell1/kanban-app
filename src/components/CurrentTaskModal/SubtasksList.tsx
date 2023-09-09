import { Subtasks } from "../../types/Subtask";
import SubtaskItem from "./SubtaskItem";
import styled from "styled-components";

interface Props {
  subtasks: Subtasks | Object;
  onChange: (id: string) => void;
}

const SubtasksList = ({ subtasks, onChange }: Props) => {
  const completed_subtasks = Object.values(subtasks!)?.reduce((total, task) => {
    if (task.completed) {
      return (total += 1);
    }
    return total;
  }, 0);

  const total_subtasks = Object.values(subtasks!).length || 0;

  return (
    <>
      <Heading>
        Subtasks ({completed_subtasks} of {total_subtasks})
      </Heading>
      <Ul>
        {Object.values(subtasks!)?.map((subtask, index) => {
          return (
            <SubtaskItem
              onChange={onChange}
              completed={subtask.completed}
              id={subtask.id}
              body={subtask.body}
              key={index}
            />
          );
        })}
      </Ul>
    </>
  );
};

const Heading = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1.6rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  max-height: 200px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
`;

export default SubtasksList;
