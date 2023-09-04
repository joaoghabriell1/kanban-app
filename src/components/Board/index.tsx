import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { ColumnsWrapper } from "./styles";
import Column from "./Column";

const TasksBoard = () => {
  const { boardId } = useParams();
  const { data, isLoading, error } = useBoard(boardId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  let columns;

  if (data?.data?.columns) {
    columns = Object.values(data?.data?.columns);
  }

  return (
    <>
      <ColumnsWrapper>
        {columns?.map((column, index) => {
          return (
            <Column
              id={column.id}
              title={column.title}
              tasks={column.tasks}
              key={index}
            />
          );
        })}
      </ColumnsWrapper>
    </>
  );
};

export default TasksBoard;
