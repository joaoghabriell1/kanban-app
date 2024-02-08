import {
  Fieldset,
  Form,
  MarginBox,
  Heading,
  SubtasksContainer,
} from "../NewTaskModal/styles";
import { useGetTask } from "../../hooks/useCurrentTask";
import { Subtasks } from "../../types/Subtask";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TextAreaDefaultInput from "../Inputs/TextAreaDefaultInput";
import useDeleteTask from "../../hooks/useDeleteTask";
import SecondaryInput from "../Inputs/SecondaryInput";
import PrimaryInput from "../Inputs/PrimaryInput";
import useEditTask from "../../hooks/useEditTask";
import SecondaryButton from "../SecondaryButton";
import SelectInput from "../Inputs/SelectInput";
import PrimaryButton from "../PrimaryButton";
import Modal from "../UI/Modal";
import { Task } from "types/Task";

const EditTaskModal = () => {
  const { editTask, isApplyingChanges } = useEditTask();
  const { boardId, currentTaskId, currentColumnId } = useParams();
  const { deleteTask } = useDeleteTask();
  const { data, isLoading } = useGetTask(
    currentColumnId!,
    currentTaskId!,
    boardId!
  );

  const [currentColumnStatus, setCurrentColumnsStatus] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [taskTitle, setTaskTitle] = useState<string | undefined>(data?.title);
  const [description, setDescription] = useState<string | undefined>(
    data?.description
  );
  const [subtasks, setSubtasks] = useState<Subtasks | undefined>(
    data?.subtasks
  );

  useEffect(() => {
    setSubtasks(data?.subtasks);
    setDescription(data?.description);
    setTaskTitle(data?.title);
  }, [data]);

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
    const changedColumn = data?.status !== currentColumnStatus?.value;

    const newTask: Task = {
      id: currentTaskId!,
      title: taskTitle!,
      description: description!,
      subtasks: subtasks!,
      status: currentColumnStatus?.value!,
    };

    const payload = {
      columnId: currentColumnStatus?.id!,
      taskId: currentTaskId!,
      data: newTask,
    };

    if (changedColumn) {
      const payload = {
        columnId: currentColumnId!,
        taskId: currentTaskId!,
      };
      deleteTask(payload);
    }

    editTask(payload);
  };
  return (
    <Modal>
      <Form onSubmit={handleSubmit}>
        <h3>Edit Task</h3>
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
            {subtasks &&
              Object.values(subtasks!).map((subtask) => (
                <SecondaryInput
                  key={subtask.id}
                  disabled={Object.values(subtasks!).length === 1}
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
        <SelectInput current={data?.status} onChange={handleColumnChange} />
        <PrimaryButton
          text={isApplyingChanges ? "Applying Changes..." : "Edit Task"}
        />
      </Form>
    </Modal>
  );
};

export default EditTaskModal;
