import LoadingColumn from "./loading-skeleton/LoadingColumn";
import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { Column as ColumnType } from "../../types/Column";
import { ColumnsWrapper } from "./styles";
import EmptyBoard from "./EmptyBoard";
import NewColumn from "../NewColumnButton";
import Column from "./Column";

const TasksBoard = () => {
  const { boardId } = useParams();
  const { data, isLoading, error } = useBoard(boardId);

  if (isLoading) {
    return <LoadingColumn />;
  }
  let columns: ColumnType[] = [];

  if (data?.data?.columns) {
    columns = Object.values(data?.data?.columns);
  }

  return (
    <>
      {!boardId || boardId == "-" ? (
        <EmptyBoard />
      ) : (
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
          <NewColumn />
        </ColumnsWrapper>
      )}
    </>
  );
};

export default TasksBoard;
