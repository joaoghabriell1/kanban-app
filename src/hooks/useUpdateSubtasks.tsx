import { useAuthContext } from "../context/Auth/AuthContext";
import { updateSubtasksPaylaod } from "../types/api-payloads";
import { updateSubtasks } from "../api/api-services";
import { Subtasks } from "../types/Subtask";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { boardId } = useParams();

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
        navigate(`/${boardId!}`);
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
