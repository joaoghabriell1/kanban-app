import SecondaryInput from "../Inputs/SecondaryInput";
import useEditBoard from "../../hooks/useEditBoard";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import Modal from "../UI/Modal";

import {
  Fieldset,
  Form,
  MarginBox,
  Heading,
  LoadingWrapper,
} from "../NewBoardModal/styles";
import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { Columns } from "../../types/Column";
import { Board } from "../../types/Boards";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const EditBoardModal = () => {
  const { boardId } = useParams();
  const { data } = useBoard(boardId);
  const [boardTitle, setBoardTitle] = useState<string | undefined>(
    data?.data.title
  );
  const [columns, setColumns] = useState<Columns | undefined>(
    data?.data.columns
  );

  const { editBoard, applyingChanges } = useEditBoard();

  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setBoardTitle(value);
  };

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;

    setColumns((prev) => {
      const newColumns = { ...prev };
      for (const key in newColumns) {
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
      title: boardTitle!,
      columns: columns!,
    };

    const payload = {
      boardId: boardId!,
      data: newBoard,
    };
    editBoard(payload);
  };

  if (applyingChanges) {
    return (
      <Modal>
        <LoadingWrapper>
          <TailSpin color="black" width="45" />
        </LoadingWrapper>
      </Modal>
    );
  }

  console.log(columns);

  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <h3>Edit Board</h3>
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
          {columns
            ? Object.values(columns).map((column, index) => {
                console.log(column.id, column.title);
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
              })
            : null}
        </Fieldset>
        <MarginBox>
          <SecondaryButton onClick={addNewColumn} text="+ Add New Column" />
        </MarginBox>
        <PrimaryButton text="Edit Board" />
      </Form>
    </Modal>
  );
};

export default EditBoardModal;
