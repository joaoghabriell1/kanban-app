import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { ColumnsWrapper } from "./styles";
import EmptyBoard from "./EmptyBoard";
import Column from "./Column";
import LoadingColumn from "./loading-skeleton/LoadingColumn";

const TasksBoard = () => {
  const { boardId } = useParams();
  const { data, isLoading, error } = useBoard(boardId);

  if (isLoading) {
    return <LoadingColumn />;
  }
  let columns;

  if (data?.data?.columns) {
    columns = Object.values(data?.data?.columns);
  }

  return (
    <>
      {!boardId || (boardId == "-" && <EmptyBoard />)}
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
