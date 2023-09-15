import { useAuthContext } from "../context/Auth/AuthContext";
import { getBoard } from "../api/api-services";
import { useQuery } from "react-query";

const getBoardMutation = async (userId: string, boardId: string) => {
  const response = await getBoard({ userId, boardId });
  return response;
};

export const useBoard = (boardId: string | undefined) => {
  const { userID } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["boards", userID, boardId],
    enabled: boardId !== undefined && boardId !== "-",
    queryFn: () => getBoardMutation(userID!, boardId!),
  });

  return {
    data,
    isLoading,
    error,
  };
};
