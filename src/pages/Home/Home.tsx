import { useParams } from "react-router-dom";
import NewBoardCard from "../../components/NewBoardCard";
import { useUIContext } from "../../context/UI/UiContext";
import styled from "styled-components";

interface StyledProps {
  navIsOpen: boolean;
}
const Home = () => {
  const { showDesktopNavBar } = useUIContext();

  return (
    <Wrapper navIsOpen={showDesktopNavBar}>
      <NewBoardCard />
    </Wrapper>
  );
};

const Wrapper = styled.div<StyledProps>`
  flex: 1;
  background: ${(props) => props.theme.colors["bg-main"]};
  padding-left: ${(props) => (props.navIsOpen ? "26rem" : "1rem")};
`;
export default Home;
