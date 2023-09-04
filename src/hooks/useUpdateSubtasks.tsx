import { useAuthContext } from "../context/Auth/AuthContext";
import { updateSubtasks } from "../api/api-services";
import { Subtask } from "../types/Subtask";
import { useMutation } from "react-query";

interface MutationParams {
  boardId: string;
  columnId: string;
  taskId: string;
  data: Subtask[];
}

export const updateSubtasksMutation = async (
  userId: string,
  boardId: string,
  columnId: string,
  taskId: string,
  data: Subtask[]
) => {
  const response = await updateSubtasks(
    userId,
    boardId,
    columnId,
    taskId,
    data
  );
  return response;
};
const useUpdateSubtasks = () => {
  const { userID } = useAuthContext();

  const {
    mutate: updateSubtasks,
    data,
    isLoading,
    error,
  } = useMutation(
    ({ boardId, columnId, taskId, data }: MutationParams) => {
      return updateSubtasksMutation(userID!, boardId, columnId, taskId, data);
    },
    {
      onSuccess: (e) => {
        return console.log(e);
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return {
    updateSubtasks,
    isLoading,
    error,
  };
};

export default useUpdateSubtasks;
