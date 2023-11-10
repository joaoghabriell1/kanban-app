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
  const { data, isLoading } = useBoard(boardId);

  if (isLoading) {
    return <LoadingColumn />;
  }
  let columns: ColumnType[] = [];

  if (data?.data?.columns) {
    columns = Object.values(data?.data?.columns).sort((a, b) => {
      if (!a.created_at) {
        return 1;
      }

      if (a.created_at > b.created_at) {
        return 1;
      } else if (a.created_at == b.created_at) {
        return 0;
      }

      return -1;
    });
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
                created_at={column.created_at}
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
