import { useAuthContext } from "../../context/Auth/AuthContext";
import styled from "styled-components";
import logoutIcon from "../../assets/icon-logout.svg";

const LogOutButton = () => {
  const { logOut } = useAuthContext();
  return (
    <Button
      onClick={() => {
        logOut();
      }}
    >
      <Icon src={logoutIcon} alt="logout icon" />
      Logout
    </Button>
  );
};

const Icon = styled.img`
  width: 20px;
`;

const Button = styled.button`
  background: none;
  border: 0;
  text-align: start;
  font-weight: bold;
  color: ${(props) => props.theme.colors["fc-main-purple"]};
  padding-block: 1.5rem;
  font-size: 1.3rem;
  margin-left: -2.5px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  &:hover {
    zoom: 103%;
  }
`;

export default LogOutButton;
