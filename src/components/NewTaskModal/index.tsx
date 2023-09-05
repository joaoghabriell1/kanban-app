import { useState } from "react";
import { Subtasks } from "../../types/Subtask";

import Modal from "../UI/Modal";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import SelectInput from "../Inputs/SelectInput";
import SecondaryButton from "../SecondaryButton";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondaryInput from "../Inputs/SecondaryInput";
import { useCreateNewTask } from "../../hooks/useCreateNewTask";
import TextAreaDefaultInput from "../Inputs/TextAreaDefaultInput";
import { v4 as uuidv4 } from "uuid";

const initalSubtaskId = uuidv4();

const NewTaskModal = () => {
  const { createNewTask, isLoading } = useCreateNewTask();
  const [columnId, setColumnId] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubtasks] = useState<Subtasks>({
    [initalSubtaskId]: {
      id: initalSubtaskId,
      body: "",
      completed: false,
    },
  });

  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTaskTitle(value);
  };

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;

    setSubtasks((prev) => {
      const newSubtasks = { ...prev };

      for (let key in newSubtasks) {
        if (newSubtasks[key].id.toString() === id) {
          newSubtasks[key].body = value;
        }
      }

      return newSubtasks;
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;
    setDescription(value);
  };

  const addNewSubtask = () => {
    const newId = uuidv4();
    const newSubtask = {
      id: newId,
      body: "",
      completed: false,
    };

    setSubtasks((prev) => {
      return { ...prev, [newId]: newSubtask };
    });
  };

  const handleDeleteSubtask = (id: string) => {
    setSubtasks((prev) => {
      const newSubtasks = { ...prev };
      delete newSubtasks[`${id}`];
      return newSubtasks;
    });
  };

  const handleColumnChange = (
    e: React.ChangeEvent<HTMLSelectElement> | null,
    initial?: {
      id: string;
      value: string;
    }
  ) => {
    if (initial) {
      setColumnId(initial);
      return;
    }

    const { value } = e?.currentTarget!;
    const id = e?.currentTarget!.selectedOptions[0]!.getAttribute("id")!;
    setColumnId({ id: id, value: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      description: description,
      subtasks: subtasks,
      status: columnId?.value!,
    };

    const payload = { columnId: columnId?.id!, task: newTask };
    createNewTask(payload);
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <h3>Add new task</h3>
        <Fieldset>
          <PrimaryInput
            value={taskTitle}
            onChange={handlePrimaryInputChange}
            label="Title"
            placeholder="e.g: Finish learning NextJS."
          />
        </Fieldset>
        <Fieldset>
          <TextAreaDefaultInput
            onChange={handleDescriptionChange}
            value={description}
          />
        </Fieldset>
        <Fieldset>
          <Heading>Subtasks</Heading>
          {Object.values(subtasks).map((subtask) => (
            <SecondaryInput
              key={subtask.id}
              disabled={Object.values(subtasks).length === 1}
              onClick={handleDeleteSubtask}
              onChange={handleSecondaryInputChange}
              value={subtask.body}
              id={subtask.id.toString()}
            />
          ))}
        </Fieldset>
        <SecondaryButton onClick={addNewSubtask} text="+ Add New Subtask" />
        <SelectInput onChange={handleColumnChange} />
        <PrimaryButton text="Create Task" />
      </Form>
    </Modal>
  );
};

const Form = styled.form``;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 1.2rem;
  max-height: 165px;
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

const Heading = styled.legend`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export default NewTaskModal;
