import { getAllBoards } from "../api/api-services";
import { useAuthContext } from "../context/Auth/AuthContext";
import { useQuery } from "react-query";

const getAllBoardsMutation = async (id: string) => {
  const response = await getAllBoards(id);
  return response;
};

export const useBoards = () => {
  const { userID } = useAuthContext();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", userID],
    queryFn: () => getAllBoardsMutation(userID!),
  });

  return {
    data,
    isLoading,
    isError,
  };
};
