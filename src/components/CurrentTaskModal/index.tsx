import { useGetTask } from "../../hooks/useCurrentTask";
import SelectInput from "../Inputs/SelectInput";
import { Subtasks } from "../../types/Subtask";
import { useParams } from "react-router-dom";
import PrimaryButton from "../PrimaryButton";
import SubtasksList from "./SubtasksList";
import styled from "styled-components";
import Modal from "../UI/Modal";
import { useState, useEffect } from "react";
import { useUpdateAndRealocate } from "../../hooks/useUpdateAndRealocateTask";
import { Task } from "../../types/Task";

const CurrentTaskModal = () => {
  const { UpdateAndRealocate, realocating } = useUpdateAndRealocate();
  const [currentSubtasksStatus, setCurrentSubtasksStatus] = useState<Subtasks>(
    {}
  );
  const [currentColumnStatus, setCurrentColumnsStatus] = useState<{
    id: string;
    value: string;
  } | null>(null);

  const { boardId, currentTaskId, currentColumnId } = useParams();
  const { data, isLoading, error } = useGetTask(
    currentColumnId!,
    currentTaskId!,
    boardId!
  );

  useEffect(() => {
    if (data) {
      setCurrentSubtasksStatus(data.subtasks);
    }
  }, [data]);

  if (isLoading) {
    return <Modal>Loading...</Modal>;
  }

  const handleSubtaskCompletedState = (id: string) => {
    setCurrentSubtasksStatus((prev) => {
      let newObj = { ...prev };
      for (let key in newObj) {
        if (newObj[key as keyof Subtasks].id == id) {
          newObj = {
            ...newObj,
            [id]: { ...newObj[id], completed: !newObj[id].completed },
          };
        }
      }
      return newObj;
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

  const handleConfirmChanges = () => {
    const updatedTask: Task = { ...data!, subtasks: currentSubtasksStatus };

    if (currentColumnStatus!.id != currentColumnId) {
      const payload = {
        boardId: boardId,
        currentColumnId: currentColumnId!,
        taskId: currentTaskId,
        newColumnId: currentColumnStatus!.id,
        task: updatedTask,
      };
      UpdateAndRealocate(payload);
    }
  };

  return (
    <Modal>
      <Title>{data?.title}</Title>
      <Description>{data?.description}</Description>
      <SubtasksList
        onChange={handleSubtaskCompletedState}
        subtasks={currentSubtasksStatus}
      />
      <SelectInput onChange={handleColumnChange} />
      <PrimaryButton
        onClick={handleConfirmChanges}
        text={realocating ? "Applying Changes..." : "Confirm Changes"}
      />
    </Modal>
  );
};

const Title = styled.h3`
  color: ${(props) => props.theme.colors["fc-headings"]};
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors["fc-text"]};
  font-size: 1.3rem;
  margin-block: 2.4rem;
`;

export default CurrentTaskModal;
