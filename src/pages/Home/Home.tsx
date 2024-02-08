import DeleteComponentModal from "../../components/DeleteComponentModal";
import NewColumnModal from "../../components/NewColumnModal";
import EditBoardModal from "../../components/EditBoardModal";
import NewBoardModal from "../../components/NewBoardModal";
import EditTaskModal from "../../components/EditTaskModal";
import NewTaskModal from "../../components/NewTaskModal";
import TasksBoard from "../../components/Board";
import styled from "styled-components";

import { useUIContext } from "../../context/ui/UiContext";
import { useParams } from "react-router-dom";
import { actions } from "../../consts/actions";

interface StyledProps {
  $navIsOpen: boolean;
}
const Home = () => {
  const { showDesktopNavBar } = useUIContext();
  const { action } = useParams();

  return (
    <Wrapper $navIsOpen={showDesktopNavBar}>
      <TasksBoard />
      {action === actions.ADD_NEW_BOARD && <NewBoardModal />}
      {action === actions.ADD_NEW_COLUMN && <NewColumnModal />}
      {action === actions.ADD_NEW_TASK && <NewTaskModal />}
      {action === actions.DELETE_BOARD && <DeleteComponentModal />}
      {action === actions.DELETE_TASK && <DeleteComponentModal />}
      {action === actions.EDIT_TASK && <EditTaskModal />}
      {action === actions.EDIT_BOARD && <EditBoardModal />}
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
