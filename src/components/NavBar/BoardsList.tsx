import { Ul, Li } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import boardIcon from "../../assets/icon-board.svg";
import { Board } from "../../types/Boards";
import { Link } from "react-router-dom";
import NewBoardButton from "./NewBoardButton";
import styled from "styled-components";

interface Props {
  dataArray: Board[];
}

const BoardsList = ({ dataArray }: Props) => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Ul>
          {dataArray?.map((board, index) => {
            return (
              <Li $activeLink={boardId === board.apiKey} key={index}>
                <img src={boardIcon} alt="board icon" />
                {board.title}a<Link to={`/${board.apiKey}`}></Link>
              </Li>
            );
          })}
        </Ul>
        <NewBoardButton />
      </Container>
    </>
  );
};

const Container = styled.div`
  flex: 1;
`;
export default BoardsList;
