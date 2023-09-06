import { Subtask } from "../../types/Subtask";
import styled from "styled-components";

interface Props {
  onChange: (id: string) => void;
}

interface StyledProps {
  $completed: boolean;
}

const SubtaskItem = ({ body, completed, id, onChange }: Subtask & Props) => {
  return (
    <>
      <Li $completed={completed}>
        <label htmlFor={id}>
          <input
            onChange={() => {
              onChange(id);
            }}
            checked={completed}
            type="checkbox"
            id={id}
          />
          <Body>{body}</Body>
          <span></span>
        </label>
      </Li>
    </>
  );
};

const Body = styled.div`
  margin-left: 3rem;
`;
const Li = styled.li<StyledProps>`
  background: ${(props) => props.theme.colors["bg-main"]};
  position: relative;
  padding: 1.3rem;
  border-radius: 4px;
  color: ${({ theme, $completed }) =>
    $completed ? theme.colors["fc-text"] : theme.colors["fc-headings"]};
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  display: flex;
  align-items: center;

  & input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & label {
    width: 100%;
  }

  & label:hover {
    width: 100%;
    cursor: pointer;
  }

  & span {
    position: absolute;
    left: 1.3rem;
    top: 1.4rem;
    height: 1.6rem;
    width: 1.6rem;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: ${(props) => props.theme.colors["bg-cards"]};
  }

  & input:checked ~ span {
    background-color: #635fc7;
  }

  & input:active ~ span {
    background-color: #635fc7;
  }

  & span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & span:after {
    left: 0.2rem;
    top: 0.25rem;
    width: 7px;
    height: 4px;
    border: solid white;
    border-width: 0 0 3px 3px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-45deg);
  }

  & input:checked ~ span:after {
    display: block;
  }
`;

export default SubtaskItem;
