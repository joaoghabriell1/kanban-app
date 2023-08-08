import SecondaryButton from "../SecondaryButton";
import SecondaryInput from "../SecondaryInput";
import PrimaryButton from "../PrimaryButton";
import { Column } from "../../types/Column";
import PrimaryInput from "../PrimaryInput";
import styled from "styled-components";
import { useState } from "react";

const NewBoardCard = () => {
  const [columns, setColoumns] = useState<Column[]>([]);

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;
  };
  const addNewColumn = () => {
    const newId = columns[columns.length - 1]?.id + 1 || 1;
    const newColumn = {
      id: newId,
      title: "column",
      tasks: [],
    };
    setColoumns((prev) => {
      return [...prev, newColumn];
    });
  };

  return (
    <>
      <Wrapper>
        <h3>Add New Board</h3>
        <PrimaryInput
          id="new-board"
          placeholder="e.g Web Design"
          label="Board Name"
        />
        {columns.map((column, index) => {
          return (
            <SecondaryInput
              id={column.id}
              onChange={handleSecondaryInputChange}
              key={index}
            />
          );
        })}
        <SecondaryButton onClick={addNewColumn} text="+ Add New Column" />
        <PrimaryButton text="Create New Board" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.colors["bg-cards"]};
  border-radius: 6px;
  width: min(480px, 100% - 2rem);
  margin-inline: auto;
  height: 500px;
  padding: 3.2rem;
`;

export default NewBoardCard;
