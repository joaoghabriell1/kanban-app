import { useAuthContext } from "../context/Auth/AuthContext";
import { updateSubtasksPaylaod } from "../types/api-payloads";
import { updateSubtasks } from "../api/api-services";
import { Subtasks } from "../types/Subtask";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { useUIContext } from "../context/ui/UiContext";

interface MutationParams {
  boardId: string;
  columnId: string;
  taskId: string;
  data: Subtasks;
}

export const updateSubtasksMutation = async ({
  userId,
  boardId,
  columnId,
  taskId,
  data,
}: updateSubtasksPaylaod) => {
  const response = await updateSubtasks({
    userId,
    boardId,
    columnId,
    taskId,
    data,
  });
  return response;
};
const useUpdateSubtasks = () => {
  const { userID } = useAuthContext();
  const queryClient = useQueryClient();
  const { toggleCurrentTaskModal } = useUIContext();

  const {
    mutate: updateSubtasks,
    isLoading: updating,
    error,
  } = useMutation(
    ({ boardId, columnId, taskId, data }: MutationParams) => {
      return updateSubtasksMutation({
        userId: userID!,
        boardId,
        columnId,
        taskId,
        data,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["boards", userID]);
        queryClient.removeQueries({ queryKey: ["current-task"], exact: true });
        console.log("teest");
        toggleCurrentTaskModal(null);
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );

  return {
    updateSubtasks,
    updating,
    error,
  };
};

export default useUpdateSubtasks;
