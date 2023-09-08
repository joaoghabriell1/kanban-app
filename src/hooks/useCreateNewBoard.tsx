import { useAuthContext } from "../context/Auth/AuthContext";
import { useMutation, useQueryClient } from "react-query";
import { createNewBoard } from "../api/api-services";
import { Board } from "../types/Boards";

const createNewBoardMutation = (userId: string, data: Board) => {
  const response = createNewBoard({ userId, data });
  return response;
};

export const useCreateNewBoard = () => {
  const { userID } = useAuthContext();
  const queryClient = useQueryClient();

  const {
    mutate: createNewBoard,
    data,
    isLoading,
    error,
  } = useMutation((board: Board) => createNewBoardMutation(userID!, board), {
    onSuccess: () => {
      return queryClient.invalidateQueries("boards");
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const ApiKeyResponse = data?.data.name;
  return {
    createNewBoard,
    ApiKeyResponse,
    isLoading,
    error,
  };
};
