import { updateTaskandChangeColumn } from "../api/api-services";
import { useAuthContext } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { Task } from "../types/Task";
interface MutationParams {
  boardId: string | undefined;
  currentColumnId: string;
  taskId: string | undefined;
  newColumnId: string;
  task: Task;
}

const updateAndRealocateTaskMutation = async (
  userId: string,
  boardId: string,
  currentColumnId: string,
  taskId: string,
  newColumnId: string,
  task: Task
) => {
  const response = await updateTaskandChangeColumn(
    userId,
    boardId,
    currentColumnId,
    taskId,
    newColumnId,
    task
  );

  return response;
};

export const useUpdateAndRealocate = () => {
  const { userID } = useAuthContext();
  const { boardId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: UpdateAndRealocate,
    data,
    isLoading: realocating,
    error,
  } = useMutation(
    ({ boardId, currentColumnId, taskId, newColumnId, task }: MutationParams) =>
      updateAndRealocateTaskMutation(
        userID!,
        boardId!,
        currentColumnId,
        taskId!,
        newColumnId,
        task
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["boards", userID]);
        navigate(`/${boardId!}`);
      },
    }
  );
  return {
    UpdateAndRealocate,
    realocating,
    error,
  };
};
