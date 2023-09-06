import { Column as ColumnType } from "../../types/Column";
import { Task } from "../../types/Task";
import styled from "styled-components";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks, id }: ColumnType) => {
  let array: Task[] = [];

  if (tasks) {
    for (let key in tasks) {
      const task = {
        ...tasks[key],
        apiKey: key,
      };
      array.push(task);
    }
  }

  const numOfTasks = array?.length || 0;

  return (
    <>
      <div>
        <BoardTitle>
          - {title}({numOfTasks})
        </BoardTitle>
        <TasksUl>
          {array?.map((task, index) => {
            return (
              <TaskCard
                key={index}
                apiKey={task.apiKey}
                columnId={id}
                title={task.title}
                description={task.description}
                subtasks={task.subtasks}
                status={task.status}
              />
            );
          })}
          {numOfTasks === 0 && null}
        </TasksUl>
      </div>
    </>
  );
};

const BoardTitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors["fc-text"]};
  letter-spacing: 2.5px;
  margin-bottom: 2.4rem;
  min-width: 28rem;
`;

const TasksUl = styled.ul`
  display: grid;
  gap: 2rem;
  max-height: 74vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Column;
