import useUpdateSubtasks from "../../hooks/useUpdateSubtasks";
import SelectInput from "../Inputs/SelectInput";
import PrimaryButton from "../PrimaryButton";
import EditCard from "../EditComponentCard";
import SubtasksList from "./SubtasksList";
import styled from "styled-components";
import Heading from "./Heading";
import Modal from "../UI/Modal";
import { useUpdateAndRealocate } from "../../hooks/useUpdateAndRealocateTask";
import { Subtasks } from "../../types/Subtask";
import { useState } from "react";
import { Task } from "../../types/Task";
import useOutsideClick from "../../hooks/useOutsideClick";

type Props = {
  boardId: string;
  currentTaskId: string;
  currentColumnId: string;
  task: Task;
  handleModal: (action: null | string) => void;
};

export const CurrentTaskModal = ({
  task,
  handleModal,
  boardId,
  currentColumnId,
  currentTaskId,
}: Props) => {
  const modalRef = useOutsideClick({ callback: onClick });
  const editCardRef = useOutsideClick({ callback: handleClickOutside });
  const [showEditCard, setShowEditCard] = useState<boolean>(false);
  const { UpdateAndRealocate, realocating } = useUpdateAndRealocate();
  const { updateSubtasks, updating } = useUpdateSubtasks();
  const [currentSubtasksStatus, setCurrentSubtasksStatus] = useState<Subtasks>(
    task.subtasks
  );

  const [currentColumnStatus, setCurrentColumnsStatus] = useState<{
    id: string;
    value: string;
  } | null>({ id: currentColumnId, value: task.status });

  const handleSubtaskCompletedState = (id: string) => {
    setCurrentSubtasksStatus((prev) => {
      let newObj = { ...prev };
      for (const key in newObj) {
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

  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget;

    const id = e.currentTarget.selectedOptions[0].getAttribute("id") as string;

    setCurrentColumnsStatus({ id: id, value: value });
  };

  const handleConfirmChanges = () => {
    const updatedTask: Task = {
      ...task!,
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

  function onClick() {
    handleModal(null);
  }

  return (
    <>
      <Modal>
        <div ref={modalRef}>
          <Heading onClick={toggleEditCard} title={task?.title} />
          {showEditCard && (
            <div ref={editCardRef}>
              <EditCard
                boardId={boardId}
                columnId={currentColumnId}
                taskId={task.id}
                component="task"
                right="1rem"
              />
            </div>
          )}
          <Description>{task?.description}</Description>
          <SubtasksList
            onChange={handleSubtaskCompletedState}
            subtasks={currentSubtasksStatus}
          />
          <SelectInput current={task?.status} onChange={handleColumnChange} />
          <PrimaryButton
            onClick={handleConfirmChanges}
            text={
              updating || realocating
                ? "Applying Changes..."
                : "Confirm Changes"
            }
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
