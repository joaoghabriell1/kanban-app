import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";

const TasksBoard = () => {
  const { boardId } = useParams();
  const { data, isLoading, error } = useBoard(boardId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data?.data?.columns?.map((collum, index) => {
        return <li key={index}>{collum.title}</li>;
      })}
    </>
  );
};

export default TasksBoard;
