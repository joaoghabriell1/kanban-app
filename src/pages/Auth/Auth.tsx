import { Navigate, useSearchParams } from "react-router-dom";
import { useAuthContext } from "../../context/Auth/AuthContext";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const Auth = () => {
  const { user } = useAuthContext();
  const [params] = useSearchParams();
  const mode = params.get("mode");

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Wrapper>{mode === "signup" ? <RegisterForm /> : <LoginForm />}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.colors["bg-main"]};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Auth;
