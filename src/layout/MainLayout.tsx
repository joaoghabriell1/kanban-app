import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default MainLayout;
