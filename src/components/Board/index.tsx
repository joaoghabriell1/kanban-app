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

  if (data?.columns) {
    columns = Object.values(data?.columns).sort((a, b) => {
      const a_time = new Date(a.created_at).getTime();
      const b_time = new Date(b.created_at).getTime();

      return a_time - b_time;
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
