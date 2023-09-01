import { useAuthContext } from "../context/Auth/AuthContext";
import { useMutation, useQueryClient } from "react-query";
import { createNewTask } from "../api/api-services";
import { useParams } from "react-router-dom";
import { Task } from "../types/Task";

interface MutationPayload {
  columnId: string;
  task: Task;
}

const createNewTaskMutation = (
  userId: string,
  boardId: string,
  columnId: string,
  data: Task
) => {
  const promise = createNewTask(userId, boardId, columnId, data);
  return promise;
};
export const useCreateNewTask = () => {
  const { userID } = useAuthContext();
  const { boardId } = useParams();
  const queryClient = useQueryClient();

  const {
    mutate: createNewTask,
    data,
    isLoading,
  } = useMutation(
    ({ columnId, task }: MutationPayload) =>
      createNewTaskMutation(userID!, boardId!, columnId, task),
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(["boards", userID]);
      },
      onError: () => {
        console.log("error");
      },
    }
  );
  return {
    createNewTask,
    data,
    isLoading,
  };
};
