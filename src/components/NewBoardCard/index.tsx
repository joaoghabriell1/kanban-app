import { useCreateNewBoard } from "../../hooks/useCreateNewBoard";
import SecondaryButton from "../SecondaryButton";
import { TailSpin } from "react-loader-spinner";
import SecondaryInput from "../Inputs/SecondaryInput";
import PrimaryButton from "../PrimaryButton";
import { Navigate } from "react-router-dom";
import { Column } from "../../types/Column";
import { Board } from "../../types/Boards";
import PrimaryInput from "../Inputs/PrimaryInput";
import styled from "styled-components";
import { useState } from "react";
import Modal from "../UI/Modal";

const NewBoardCard = () => {
  const { createNewBoard, ApiKeyResponse, isLoading } = useCreateNewBoard();
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 0,
      title: "",
      tasks: [],
    },
  ]);

  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setBoardTitle(value);
  };

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;

    setColumns((prev) => {
      const newColumns = prev.map((column) => {
        if (column.id === +id) {
          return { ...column, title: value };
        }
        return column;
      });
      return newColumns;
    });
  };

  const addNewColumn = () => {
    const newId = columns[columns.length - 1]?.id + 1 || 1;
    const newColumn = {
      id: newId,
      title: "",
      tasks: [],
    };
    setColumns((prev) => {
      return [...prev, newColumn];
    });
  };

  const handleDeleteColumn = (id: string) => {
    setColumns((prev) => {
      const filteredColumns = prev.filter((column) => column.id !== +id);
      return filteredColumns;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBoard: Board = {
      title: boardTitle,
      columns: columns,
      apiKey: "",
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
            {columns.map((column, index) => {
              return (
                <SecondaryInput
                  disabled={columns.length === 1}
                  key={index}
                  value={column.title}
                  onClick={handleDeleteColumn}
                  id={column.id.toString()}
                  onChange={handleSecondaryInputChange}
                />
              );
            })}
          </Fieldset>
          <SecondaryButton onClick={addNewColumn} text="+ Add New Column" />
          <PrimaryButton text="Create New Board" />
        </Form>
      </Modal>
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 1.2rem;
  max-height: 200px;
  padding-bottom: 0.5rem;
  overflow-y: scroll;
  &:nth-child(2) {
    flex: 1;
    display: grid;
    align-content: start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.legend`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export default NewBoardCard;
