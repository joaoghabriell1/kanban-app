import { useState } from "react";
import { Substask } from "../../types/Subtask";

import Modal from "../UI/Modal";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import SelectInput from "../Inputs/SelectInput";
import SecondaryButton from "../SecondaryButton";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondaryInput from "../Inputs/SecondaryInput";
import { useCreateNewTask } from "../../hooks/useCreateNewTask";
import TextAreaDefaultInput from "../Inputs/TextAreaDefaultInput";

const NewTaskModal = () => {
  const { createNewTask, isLoading } = useCreateNewTask();
  const [columnId, setColumnId] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubtaks] = useState<Substask[]>([
    {
      id: 0,
      body: "",
      completed: false,
    },
  ]);

  const handlePrimaryInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTaskTitle(value);
  };

  const handleSecondaryInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, id } = e.currentTarget;

    setSubtaks((prev) => {
      const newSubTasks = prev.map((subtask) => {
        if (subtask.id === +id) {
          return { ...subtask, body: value };
        }
        return subtask;
      });
      return newSubTasks;
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;
    setDescription(value);
  };

  const addNewSubtask = () => {
    const newId = subtasks[subtasks.length - 1]?.id + 1 || 1;
    const newSubtask = {
      id: newId,
      body: "",
      completed: false,
    };
    setSubtaks((prev) => {
      return [...prev, newSubtask];
    });
  };

  const handleDeleteSubtask = (id: string) => {
    setSubtaks((prev) => {
      const filteredSubtasks = prev.filter((subtask) => subtask.id !== +id);
      return filteredSubtasks;
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
      id: "0",
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
          {subtasks.map((subtask) => (
            <SecondaryInput
              key={subtask.id}
              disabled={subtasks.length === 1}
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
