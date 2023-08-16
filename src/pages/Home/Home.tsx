import { useUIContext } from "../../context/UI/UIContext";
import NewBoardCard from "../../components/NewBoardCard";
import TasksBoard from "../../components/Board/Board";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface StyledProps {
  $navIsOpen: boolean;
}

const Home = () => {
  const { showDesktopNavBar } = useUIContext();
  const { action } = useParams();

  return (
    <Wrapper $navIsOpen={showDesktopNavBar}>
      <TasksBoard />
      {action === "addnewboard" && <NewBoardCard />}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  flex: 1;
  background: ${(props) => props.theme.colors["bg-main"]};
  padding-left: ${(props) => (props.$navIsOpen ? "26rem" : "1rem")};
`;
export default Home;
