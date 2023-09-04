import { Substask } from "../../types/Subtask";
import SubtaskItem from "./SubtaskItem";
import styled from "styled-components";

interface Props {
  subtasks: Substask[] | undefined;
}

const SubtasksList = ({ subtasks }: Props) => {
  const completed_subtasks = subtasks?.reduce((total, task) => {
    if (task.completed) {
      return (total += 1);
    }
    return total;
  }, 0);
  const total_subtasks = subtasks!.length - 1 || 0;

  return (
    <>
      <Heading>
        Subtasks ({completed_subtasks} of {total_subtasks})
      </Heading>
      <Ul>
        {subtasks?.map((subtask, index) => {
          return (
            <SubtaskItem
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
`;

export default SubtasksList;
