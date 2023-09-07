import DeleteComponentModal from "../../components/DeleteComponentModal";
import CurrentTaskModal from "../../components/CurrentTaskModal";
import NewColumnModal from "../../components/NewColumnModal";
import NewBoardModal from "../../components/NewBoardModal";
import { useUIContext } from "../../context/ui/UiContext";
import NewTaskModal from "../../components/NewTaskModal";
import TasksBoard from "../../components/Board";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
      {action === "addnewcolumn" && <NewColumnModal />}
      {action === "addnewtask" && <NewTaskModal />}
      {action === "managecurrenttask" && <CurrentTaskModal />}
      {action === ("deletetask" || "deleteboard") && <DeleteComponentModal />}
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
