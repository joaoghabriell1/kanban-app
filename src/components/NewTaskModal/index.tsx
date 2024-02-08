import TextAreaDefaultInput from "../Inputs/TextAreaDefaultInput";
import SecondaryInput from "../Inputs/SecondaryInput";
import PrimaryInput from "../Inputs/PrimaryInput";
import SecondaryButton from "../SecondaryButton";
import SelectInput from "../Inputs/SelectInput";
import PrimaryButton from "../PrimaryButton";
import Modal from "../UI/Modal";

import {
  Fieldset,
  Form,
  MarginBox,
  Heading,
  SubtasksContainer,
} from "./styles";
import { useCreateNewTask } from "../../hooks/useCreateNewTask";
import { Subtasks } from "../../types/Subtask";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Task } from "types/Task";

const initalSubtaskId = uuidv4();

const NewTaskModal = () => {
  const { createNewTask, isLoading, data } = useCreateNewTask();
  const [currentColumnStatus, setCurrentColumnsStatus] = useState<{
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
      setCurrentColumnsStatus(initial);
      return;
    }

    const { value } = e?.currentTarget!;
    const id = e?.currentTarget!.selectedOptions[0]!.getAttribute("id")!;
    setCurrentColumnsStatus({ id: id, value: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTaskId = uuidv4();

    const newTask: Task = {
      id: newTaskId,
      title: taskTitle,
      description: description,
      subtasks: subtasks,
      status: currentColumnStatus?.value!,
    };

    const payload = { columnId: currentColumnStatus?.id!, task: newTask };
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
          <SubtasksContainer>
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
          </SubtasksContainer>
        </Fieldset>
        <MarginBox>
          <SecondaryButton onClick={addNewSubtask} text="+ Add New Subtask" />
        </MarginBox>
        <SelectInput onChange={handleColumnChange} />
        <PrimaryButton text={isLoading ? "Creating..." : "Create Task"} />
      </Form>
    </Modal>
  );
};

export default NewTaskModal;
