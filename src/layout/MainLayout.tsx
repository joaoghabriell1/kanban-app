import { useAuthContext } from "../context/Auth/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const MainLayout = () => {
  const { loadingCurrentUser, user } = useAuthContext();

  if (loadingCurrentUser) {
    return (
      <LoadingContainer>
        <TailSpin color="black" width="300" />;
      </LoadingContainer>
    );
  }

  return (
    <>
      {user ? (
        <Wrapper>
          <Header />
          <Outlet />
        </Wrapper>
      ) : (
        <Navigate to="/auth" />
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const LoadingContainer = styled.div`
  background: ${(props) => props.theme.colors["bg-main"]};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default MainLayout;
