import { useAuthContext } from "../context/Auth/AuthContext";
import { createNewTaskPayload } from "../types/api-payloads";
import { useMutation, useQueryClient } from "react-query";
import { createNewTask } from "../api/api-services";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Task } from "../types/Task";

interface MutationPayload {
  columnId: string;
  task: Task;
}

const createNewTaskMutation = ({
  userId,
  boardId,
  columnId,
  data,
}: createNewTaskPayload) => {
  const promise = createNewTask({ userId, boardId, columnId, data });
  return promise;
};
export const useCreateNewTask = () => {
  const { userID } = useAuthContext();
  const { boardId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: createNewTask,
    data,
    error,
    isLoading,
  } = useMutation(
    ({ columnId, task }: MutationPayload) =>
      createNewTaskMutation({
        userId: userID!,
        boardId: boardId!,
        columnId,
        data: task,
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
    createNewTask,
    data,
    error,
    isLoading,
  };
};
