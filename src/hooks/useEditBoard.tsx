import { useMutation, useQueryClient } from "react-query";
import { useAuthContext } from "../context/Auth/AuthContext";
import { EditBoardPayload } from "../types/api-payloads";
import { editBoard } from "../api/api-services";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Board } from "../types/Boards";

interface MutationPayload {
  data: Board;
}

const editBoardMutation = async ({
  userId,
  boardId,
  data,
}: EditBoardPayload) => {
  const response = await editBoard({ userId, boardId, data });
  return response;
};

const useEditBoard = () => {
  const { userID } = useAuthContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { boardId } = useParams();

  const {
    mutate: editBoard,
    data,
    isLoading: applyingChanges,
    error,
  } = useMutation(
    ({ data }: MutationPayload) =>
      editBoardMutation({ userId: userID!, boardId: boardId!, data }),
    {
      onSuccess: () => {
        navigate(`/${boardId}`);
        return queryClient.invalidateQueries("boards");
      },
      onError: (e) => {
        console.log(e);
      },
    }
  );
  const ApiKeyResponse = data?.data.name;
  return {
    editBoard,
    ApiKeyResponse,
    applyingChanges,
    error,
  };
};

export default useEditBoard;
