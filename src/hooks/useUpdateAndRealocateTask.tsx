import { updateTaskandChangeColumnPayload } from "../types/api-payloads";
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

const updateAndRealocateTaskMutation = async ({
  userId,
  boardId,
  currentColumnId,
  taskId,
  newColumnId,
  task,
}: updateTaskandChangeColumnPayload) => {
  const response = await updateTaskandChangeColumn({
    userId,
    boardId,
    currentColumnId,
    taskId,
    newColumnId,
    task,
  });

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
      updateAndRealocateTaskMutation({
        userId: userID!,
        boardId: boardId!,
        currentColumnId,
        taskId: taskId!,
        newColumnId,
        task,
      }),
    {
      onSuccess: () => {
        queryClient.removeQueries({ queryKey: ["current-task"], exact: true });
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
