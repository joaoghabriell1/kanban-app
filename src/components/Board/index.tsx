import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import Column from "./Column";
import { ColumnsWrapper } from "./styles";

const TasksBoard = () => {
  const { boardId } = useParams();
  const { data, isLoading, error } = useBoard(boardId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ColumnsWrapper>
        {data?.data?.columns?.map((column, index) => {
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
