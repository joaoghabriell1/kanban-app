import { useAuthContext } from "../context/Auth/AuthContext";
import { createNewColumn } from "../api/api-services";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { Column } from "../types/Column";

const createNewColumnMutation = async (
  userId: string,
  boardId: string,
  data: Column
) => {
  const response = await createNewColumn({ userId, boardId, data });
  return response;
};

interface MutationPayload {
  data: Column;
}

const useCreateNewColumn = () => {
  const { userID } = useAuthContext();
  const { boardId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: createNewColumn,
    data,
    error,
    isLoading,
  } = useMutation(
    ({ data }: MutationPayload) =>
      createNewColumnMutation(userID!, boardId!, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["boards", userID, boardId]);
        navigate(`/${boardId}`);
      },
      onError: () => {
        console.log("error");
      },
    }
  );

  return {
    createNewColumn,
    data,
    error,
    isLoading,
  };
};

export default useCreateNewColumn;
