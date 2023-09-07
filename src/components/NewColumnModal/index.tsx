import useCreateNewColumn from "../../hooks/useCreateNewColumn";
import PrimaryInput from "../Inputs/PrimaryInput";
import PrimaryButton from "../PrimaryButton";
import { Column } from "../../types/Column";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Modal from "../UI/Modal";

const NewColumnModal = () => {
  const [columnTitle, setColumnTitle] = useState<string>("");
  const { createNewColumn, isLoading } = useCreateNewColumn();
  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setColumnTitle(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newColumn: Column = {
      id: uuidv4(),
      title: columnTitle,
      tasks: [],
    };

    createNewColumn({ data: newColumn });
  };

  return (
    <Modal heigth="auto">
      <form onSubmit={handleSubmit}>
        <Heading>Add new column</Heading>
        <PrimaryInput
          label="Column title"
          placeholder="eg: New NextJS project"
          value={columnTitle}
          onChange={handlePrimaryInputChange}
        />
        <PrimaryButton text={isLoading ? "Creating..." : "Create new column"} />
      </form>
    </Modal>
  );
};

const Heading = styled.h3`
  margin-bottom: 1rem;
`;

export default NewColumnModal;
