import { useAuthContext } from "../context/Auth/AuthContext";
import { getAllBoards } from "../api/api-services";
import { Board } from "../types/Boards";
import { useQuery } from "react-query";

const getAllBoardsMutation = async (id: string) => {
  const response = await getAllBoards(id);
  return response;
};

export const useBoards = () => {
  const { userID } = useAuthContext();
  const { data, isLoading, error } = useQuery({
    queryKey: ["boards", userID],
    queryFn: () => getAllBoardsMutation(userID!),
  });

  let dataArray: Board[] = [];

  if (data?.data) {
    let boards = data?.data;
    dataArray = [];
    for (let key in boards) {
      const post = {
        ...boards[key],
        apiKey: key,
      };
      dataArray.push(post);
    }
  } else {
    dataArray = [];
  }

  return {
    dataArray,
    isLoading,
    error,
  };
};
