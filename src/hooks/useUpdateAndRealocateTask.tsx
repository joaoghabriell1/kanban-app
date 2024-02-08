import { updateTaskandChangeColumnPayload } from "../types/api-payloads";
import { updateTaskandChangeColumn } from "../api/api-services";
import { useAuthContext } from "../context/Auth/AuthContext";
import { useUIContext } from "../context/ui/UiContext";
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
  const { toggleCurrentTaskModal } = useUIContext();
  const { userID } = useAuthContext();
  const queryClient = useQueryClient();

  const {
    mutate: UpdateAndRealocate,
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
        toggleCurrentTaskModal(null);
      },
    }
  );
  return {
    UpdateAndRealocate,
    realocating,
    error,
  };
};
