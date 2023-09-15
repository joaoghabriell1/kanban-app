import { useEffect } from "react";
import { SelectTag } from "./styles";
import styled from "styled-components";
import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
import { Column } from "../../types/Column";

interface Props {
  current?: string;
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement> | null,
    initial?: {
      id: string;
      value: string;
    }
  ) => void;
}

const SelectInput = ({ onChange, current }: Props) => {
  const { boardId } = useParams();
  const { data } = useBoard(boardId);
  let columns: Column[] | null = null;

  if (data) {
    columns = Object.values(data?.data?.columns!);
  }

  useEffect(() => {
    if (columns && current) {
      const firstId = Object.values(columns).find(
        (column) => column.title === current
      )?.id;
      const value = current;
      const payload = {
        id: firstId?.toString() || "",
        value: value,
      };
      onChange(null, payload);
    } else if (columns) {
      const firstId = Object.values(columns).shift()?.id!;
      const value = Object.values(columns).shift()?.title!;
      const payload = {
        id: firstId?.toString(),
        value: value,
      };
      onChange(null, payload);
    }
  }, [data]);

  return (
    <>
      <Heading>Status (Column)</Heading>
      <SelectTag required defaultValue={current} onChange={onChange}>
        {columns?.map((column) => (
          <Option
            key={column.id}
            value={column.title}
            id={column?.id?.toString()}
          >
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
