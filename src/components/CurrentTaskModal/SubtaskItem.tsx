import { Subtask } from "../../types/Subtask";
import styled from "styled-components";

interface StyledProps {
  $completed: boolean;
}

const SubtaskItem = ({ body, completed }: Subtask) => {
  return (
    <>
      <Li $completed={completed}>{body}</Li>
      <div>
        <input type="checkbox" id="scales" name="scales" />
        <label>Scales</label>
      </div>
    </>
  );
};

const Li = styled.li<StyledProps>`
  background: ${(props) => props.theme.colors["bg-main"]};
  padding: 1.3rem;
  border-radius: 4px;
  color: ${({ theme, $completed }) =>
    $completed ? theme.colors["fc-text"] : theme.colors["fc-headings"]};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

export default SubtaskItem;
