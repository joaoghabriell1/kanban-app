import { useGetTask } from "../../hooks/useCurrentTask";
import SelectInput from "../Inputs/SelectInput";
import { useParams } from "react-router-dom";
import SubtasksList from "./SubtasksList";
import styled from "styled-components";
import Modal from "../UI/Modal";

const CurrentTaskModal = () => {
  const { boardId, currentTaskId, currentColumnId } = useParams();
  const { data, isLoading, error } = useGetTask(
    currentColumnId!,
    currentTaskId!,
    boardId!
  );

  if (isLoading) {
    return <Modal>Loading...</Modal>;
  }

  const handleColumnChange = (
    e: React.ChangeEvent<HTMLSelectElement> | null
  ) => {};

  return (
    <Modal>
      <Title>{data?.title}</Title>
      <Description>{data?.description}</Description>
      <SubtasksList subtasks={data?.subtasks} />
      <SelectInput onChange={handleColumnChange} />
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
