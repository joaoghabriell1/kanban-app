import { useAuthContext } from "../context/Auth/AuthContext";
import { getTask } from "../api/api-services";
import { useQuery } from "react-query";

const getTaskMutation = async (
  userId: string,
  boardId: string,
  columnId: string,
  taskId: string
) => {
  const response = await getTask(userId, boardId, columnId, taskId);
  return response;
};

export const useGetTask = (
  columnId: string,
  taskId: string,
  boardId: string
) => {
  const { userID } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["current-task"],
    queryFn: () => getTaskMutation(userID!, boardId!, columnId!, taskId!),
  });

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
