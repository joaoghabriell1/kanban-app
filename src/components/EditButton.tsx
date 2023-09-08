import editIcon from "../assets/icon-edit.svg";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

const EditButton = ({ onClick }: Props) => {
  return (
    <>
      <Button onClick={onClick}>
        <img src={editIcon} alt="edit-icon" />
      </Button>
    </>
  );
};

const Button = styled.button`
  background: none;
  border: 0;
`;

export default EditButton;
