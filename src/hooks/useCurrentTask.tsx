import { useAuthContext } from "../context/Auth/AuthContext";
import { getTask } from "../api/api-services";
import { useQuery } from "react-query";
import { getTaskPayload } from "../types/api-payloads";

const getTaskMutation = async ({
  userId,
  boardId,
  columnId,
  taskId,
}: getTaskPayload) => {
  const response = await getTask({ userId, boardId, columnId, taskId });
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
    queryFn: () =>
      getTaskMutation({ userId: userID!, boardId, columnId, taskId }),
  });

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
