import { useUIContext } from "../../context/UI/UIContext";
import CurrentTaskModal from "../../components/CurrentTaskModal";
import NewBoardModal from "../../components/NewBoardModal";
import NewTaskModal from "../../components/NewTaskModal";
import TasksBoard from "../../components/Board";
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
      {action === "addnewboard" && <NewBoardModal />}
      {action === "addnewtask" && <NewTaskModal />}
      {action === "managecurrenttask" && <CurrentTaskModal />}
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  flex: 1;
  background: ${(props) => props.theme.colors["bg-main"]};
  padding-left: ${(props) => (props.$navIsOpen ? "26rem" : "1rem")};
  @media (max-width: 768px) {
    padding-inline: 1.6rem;
  }
`;
export default Home;
