import { Column as ColumnType } from "../../types/Column";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import { Task } from "../../types/Task";

const Column = ({ title, tasks }: ColumnType) => {
  let array: Task[] = [];
  if (tasks) {
    array = Object.values(tasks);
  }

  console.log(tasks);

  const numOfTasks = array?.length || 0;
  return (
    <>
      <div>
        <BoardTitle>
          - {title}({numOfTasks})
        </BoardTitle>
        <TasksUl>
          {array?.map((task) => {
            return (
              <TaskCard
                id={task.id}
                title={task.title}
                description={task.description}
                subtasks={task.subtasks}
                status={task.status}
              />
            );
          })}
          {numOfTasks === 0 && <p>Add new tasks to your columns</p>}
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
`;

const TasksUl = styled.ul`
  display: grid;
  gap: 2rem;
`;

export default Column;
