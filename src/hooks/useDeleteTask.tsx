import { useMutation } from "react-query";
import { deleteTask } from "../api/api-services";
import { useAuthContext } from "../context/Auth/AuthContext";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const deleteTaskMutation = async (
  userId: string,
  boardId: string,
  columnId: string,
  taskId: string
) => {
  const response = await deleteTask(userId, boardId, columnId, taskId);
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
    isLoading,
    error,
  } = useMutation(
    ({ columnId, taskId }: MutationPayload) =>
      deleteTaskMutation(userID!, boardId!, columnId!, taskId!),
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
    isLoading,
    error,
  };
};

export default useDeleteTask;
