import { useMutation } from "react-query";
import { deleteTask } from "../api/api-services";
import { useAuthContext } from "../context/Auth/AuthContext";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTaskPayload } from "../types/api-payloads";

const deleteTaskMutation = async ({
  userId,
  boardId,
  columnId,
  taskId,
}: deleteTaskPayload) => {
  const response = await deleteTask({ userId, boardId, columnId, taskId });
  return response;
};

interface MutationPayload {
  columnId: string;
  taskId: string;
}

export const useDeleteTask = () => {
  const { userID } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { boardId } = useParams();
  const {
    mutate: deleteTask,
    isLoading: isDeletingTask,
    error,
  } = useMutation(
    ({ columnId, taskId }: MutationPayload) =>
      deleteTaskMutation({
        userId: userID!,
        boardId: boardId!,
        columnId,
        taskId,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["boards", userID, boardId]);
        navigate(`/${boardId}`);
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return {
    deleteTask,
    isDeletingTask,
    error,
  };
};

export default useDeleteTask;
