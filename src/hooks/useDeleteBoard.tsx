import { useAuthContext } from "../context/Auth/AuthContext";
import { deleteBoard } from "../api/api-services";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";

const deleteBoardMutation = async (userId: string, boardId: string) => {
  const response = await deleteBoard({ userId, boardId });
  return response;
};

const useDeleteBoard = () => {
  const { boardId } = useParams();
  const { userID } = useAuthContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteBoard, isLoading: isDeletingBoard } = useMutation(
    () => deleteBoardMutation(userID!, boardId!),
    {
      onSuccess() {
        queryClient.invalidateQueries(["boards"]);
        navigate("/");
      },
      onError(e) {
        console.log(e);
      },
    }
  );
  return {
    deleteBoard,
    isDeletingBoard,
  };
};

export default useDeleteBoard;
