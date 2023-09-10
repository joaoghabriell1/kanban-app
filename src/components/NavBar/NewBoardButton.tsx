import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { actions } from "../../consts/actions";
import { NewBoardButton as Button } from "./styles";
import boardIcon from "../../assets/icon-board.svg";
import { Li } from "./styles";

const NewBoardButton = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  return (
    <>
      <Li
        onClick={() => {
          navigate(`/${boardId ? boardId : "-"}/${actions.ADD_NEW_BOARD}`);
        }}
      >
        <Button>
          <img src={boardIcon} alt="board icon" />
          <span>+ Create New Board</span>
        </Button>
      </Li>
    </>
  );
};

export default NewBoardButton;
