import { Column as ColumnType } from "../../types/Column";
import { Task } from "../../types/Task";
import styled from "styled-components";
import TaskCard from "./TaskCard";

const Column = ({ title, tasks: t, id }: ColumnType) => {
  let tasks: Task[] = [];

  if (t) {
    tasks = Object.values(t);
  }

  const numOfTasks = tasks?.length || 0;

  return (
    <>
      <div>
        <ColumnTitle>
          - {title}({numOfTasks})
        </ColumnTitle>
        <TasksUl>
          {tasks?.map((task, index) => {
            return (
              <TaskCard
                key={index}
                id={task.id}
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

const ColumnTitle = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors["fc-text"]};
  letter-spacing: 2.5px;
  margin-bottom: 2.4rem;
  min-width: 28rem;
  white-space: nowrap;
`;

const TasksUl = styled.ul`
  display: grid;
  gap: 2rem;
  max-height: 74vh;
  height: 100vh;
  place-content: start;
  padding-bottom: 2rem;
  overflow: hidden;
`;

export default Column;
