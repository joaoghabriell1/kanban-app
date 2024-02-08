import { SelectTag } from "./styles";
import styled from "styled-components";
import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { Column } from "../../types/Column";

interface Props {
  current?: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    initial?: {
      id: string;
      value: string;
    }
  ) => void;
}

const SelectInput = ({ onChange, current }: Props) => {
  const { boardId } = useParams();
  const { data, isLoading } = useBoard(boardId);
  let columns: Column[] | null = null;

  if (isLoading) {
    return <div>Loading columns...</div>;
  }

  if (data) {
    columns = Object.values(data.data.columns);
  }

  return (
    <>
      <Heading>Status (Column)</Heading>
      <SelectTag required defaultValue={current} onChange={onChange}>
        {columns?.map((column) => (
          <Option
            key={column.id}
            value={column.title}
            id={column?.id?.toString()}>
            {column.title}
          </Option>
        ))}
      </SelectTag>
    </>
  );
};

const Option = styled.option`
  background: none;
`;

const Heading = styled.legend`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;

export default SelectInput;
