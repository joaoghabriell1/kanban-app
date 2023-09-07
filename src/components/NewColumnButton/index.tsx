import { useThemeContext } from "../../context/Theme/ThemeContext";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

interface StyledProps {
  $theme: string;
}

const NewColumn = () => {
  const { currentTheme } = useThemeContext();
  const { boardId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${boardId}/addnewcolumn`);
  };

  return (
    <Container onClick={handleClick} $theme={currentTheme.title}>
      + New column
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  min-width: 28rem;
  margin-top: 5.1rem;
  height: 70vh;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors["fc-text"]};
  font-weight: bold;
  border-radius: 6px;
  background: ${(props) =>
    props.$theme === "dark"
      ? "linear-gradient( 180deg,rgba(43, 44, 55, 0.25) 0%, rgba(43, 44, 55, 0.13) 100%)"
      : "linear-gradient( 180deg,#e9effa 0%, rgba(233, 239, 250, 0.5) 100%)"};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export default NewColumn;
