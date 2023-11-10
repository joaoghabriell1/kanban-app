import { useCreateNewBoard } from "../../hooks/useCreateNewBoard";
import { TailSpin } from "react-loader-spinner";
import { Navigate } from "react-router-dom";
import { Columns } from "../../types/Column";
import { Board } from "../../types/Boards";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Fieldset, Form, MarginBox, LoadingWrapper, Heading } from "./styles";

import SecondaryInput from "../Inputs/SecondaryInput";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import Modal from "../UI/Modal";

const firstColumnId = uuidv4();

const NewBoardModal = () => {
  const { createNewBoard, ApiKeyResponse, isLoading } = useCreateNewBoard();
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [columns, setColumns] = useState<Columns>({
    [firstColumnId]: {
      id: firstColumnId,
      created_at: new Date(),
      title: "",
      tasks: [],
    },
  });

  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setBoardTitle(value);
  };

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;

    setColumns((prev) => {
      const newColumns = { ...prev };
      for (let key in newColumns) {
        if (newColumns[key].id.toString() === id) {
          newColumns[key].title = value;
        }
      }
      return newColumns;
    });
  };

  const addNewColumn = () => {
    const newId = uuidv4();

    setColumns((prev) => {
      return {
        ...prev,
        [newId]: { id: newId, title: "", created_at: new Date(), tasks: [] },
      };
    });
  };

  const handleDeleteColumn = (id: string) => {
    setColumns((prev) => {
      const newColumns = { ...prev };
      delete newColumns[`${id}`];

      return newColumns;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBoard: Board = {
      title: boardTitle,
      columns: columns,
    };

    createNewBoard(newBoard);
  };

  if (isLoading) {
    return (
      <Modal>
        <LoadingWrapper>
          <TailSpin color="black" width="45" />
        </LoadingWrapper>
      </Modal>
    );
  }

  if (ApiKeyResponse) {
    return <Navigate to={`/${ApiKeyResponse}`}></Navigate>;
  }

  return (
    <>
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Fieldset>
            <h3>Add New Board</h3>
            <PrimaryInput
              onChange={handlePrimaryInputChange}
              value={boardTitle}
              id="new-board"
              placeholder="e.g Web Design"
              label="Board Name"
            />
          </Fieldset>
          <Fieldset>
            <Heading>Board Columns</Heading>
            {Object.values(columns).map((column, index) => {
              return (
                <SecondaryInput
                  disabled={Object.keys(columns).length === 1}
                  key={index}
                  value={column.title}
                  onClick={handleDeleteColumn}
                  id={column.id.toString()}
                  onChange={handleSecondaryInputChange}
                />
              );
            })}
          </Fieldset>
          <MarginBox>
            <SecondaryButton onClick={addNewColumn} text="+ Add New Column" />
          </MarginBox>
          <PrimaryButton text="Create New Board" />
        </Form>
      </Modal>
    </>
  );
};

export default NewBoardModal;
