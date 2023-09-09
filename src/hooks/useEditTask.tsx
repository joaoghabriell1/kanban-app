import { useAuthContext } from "../context/Auth/AuthContext";
import { EditTaskPayload } from "../types/api-payloads";
import { EditTask } from "../api/api-services";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { Task } from "../types/Task";

interface MutationPayload {
  columnId: string;
  taskId: string;
  data: Task;
}
const editTaskMutation = async ({
  columnId,
  userId,
  boardId,
  taskId,
  data,
}: EditTaskPayload) => {
  const response = await EditTask({ columnId, userId, boardId, taskId, data });
  return response;
};

const useEditTask = () => {
  const queryClient = useQueryClient();
  const { boardId } = useParams();
  const { userID } = useAuthContext();
  const navigate = useNavigate();

  const {
    mutate: editTask,
    data,
    error,
    isLoading: isApplyingChanges,
  } = useMutation(
    ({ columnId, taskId, data }: MutationPayload) =>
      editTaskMutation({
        userId: userID!,
        boardId: boardId!,
        columnId,
        taskId,
        data: data,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["boards", userID]);
        navigate(`/${boardId}`);
      },
      onError: () => {
        console.log("error");
      },
    }
  );
  return {
    editTask,
    data,
    isApplyingChanges,
    error,
  };
};

export default useEditTask;
