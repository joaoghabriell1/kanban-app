import LoadingCurrentTaskModalSkeleton from "./loading-skeleton/LoadingCurrentTaskModalSkeleton";
import useUpdateSubtasks from "../../hooks/useUpdateSubtasks";
import useOutsideClick from "../../hooks/useOutsideClick";
import SelectInput from "../Inputs/SelectInput";
import PrimaryButton from "../PrimaryButton";
import EditCard from "../EditComponentCard";
import SubtasksList from "./SubtasksList";
import styled from "styled-components";
import Heading from "./Heading";
import Modal from "../UI/Modal";
import { useUpdateAndRealocate } from "../../hooks/useUpdateAndRealocateTask";
import { useGetTask } from "../../hooks/useCurrentTask";
import { Subtasks } from "../../types/Subtask";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Task } from "../../types/Task";

const CurrentTaskModal = () => {
  const ref = useOutsideClick({ callback: handleClickOutside });
  const [showEditCard, setShowEditCard] = useState<boolean>(false);
  const { UpdateAndRealocate, realocating } = useUpdateAndRealocate();
  const { updateSubtasks, updating } = useUpdateSubtasks();
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
    return (
      <Modal>
        <LoadingCurrentTaskModalSkeleton />
      </Modal>
    );
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
    const updatedTask: Task = {
      ...data!,
      subtasks: currentSubtasksStatus,
      status: currentColumnStatus!.value,
    };

    if (currentColumnStatus!.id != currentColumnId) {
      const payload = {
        boardId: boardId,
        currentColumnId: currentColumnId!,
        taskId: currentTaskId,
        newColumnId: currentColumnStatus!.id,
        task: updatedTask,
      };

      UpdateAndRealocate(payload);
      return;
    }
    const updateSubtasksPayload = {
      boardId: boardId!,
      columnId: currentColumnId!,
      taskId: currentTaskId!,
      data: currentSubtasksStatus,
    };
    updateSubtasks(updateSubtasksPayload);
  };

  const toggleEditCard = () => {
    setShowEditCard((prev) => !prev);
  };

  function handleClickOutside() {
    setShowEditCard(false);
  }

  return (
    <>
      <Modal>
        <div>
          <Heading onClick={toggleEditCard} title={data?.title} />
          {showEditCard && (
            <div ref={ref}>
              <EditCard right="1rem" />
            </div>
          )}
          <Description>{data?.description}</Description>
          <SubtasksList
            onChange={handleSubtaskCompletedState}
            subtasks={currentSubtasksStatus}
          />
          <SelectInput current={data?.status} onChange={handleColumnChange} />
          <PrimaryButton
            onClick={handleConfirmChanges}
            text={realocating ? "Applying Changes..." : "Confirm Changes"}
          />
        </div>
      </Modal>
    </>
  );
};

const Description = styled.p`
  color: ${(props) => props.theme.colors["fc-text"]};
  font-size: 1.3rem;
  margin-block: 2.4rem;
  word-break: break-all;
  max-height: 95px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 15px;
  }
`;

export default CurrentTaskModal;
