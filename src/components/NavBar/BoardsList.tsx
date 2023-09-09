import { NewBoardButton, Ul, Li } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import boardIcon from "../../assets/icon-board.svg";
import { Board } from "../../types/Boards";
import { Link } from "react-router-dom";
import { actions } from "../../consts/actions";

interface Props {
  dataArray: Board[];
}

const BoardsList = ({ dataArray }: Props) => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  return (
    <Ul>
      {dataArray?.map((board, index) => {
        return (
          <Li $activeLink={boardId === board.apiKey} key={index}>
            <img src={boardIcon} alt="board icon" />
            {board.title}a<Link to={`/${board.apiKey}`}></Link>
          </Li>
        );
      })}
      <Li
        onClick={() => {
          navigate(`/${boardId ? boardId : "-"}/${actions.ADD_NEW_BOARD}`);
        }}
      >
        <NewBoardButton>
          <img src={boardIcon} alt="board icon" />
          <span>+ Create New Board</span>
        </NewBoardButton>
      </Li>
    </Ul>
  );
};

export default BoardsList;
