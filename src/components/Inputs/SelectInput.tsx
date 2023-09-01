import { useEffect } from "react";
import { SelectTag } from "./styles";
import styled from "styled-components";
import { useBoard } from "../../hooks/useBoard";
import { useParams } from "react-router-dom";
interface Props {
  onChange: (
    e: React.ChangeEvent<HTMLSelectElement> | null,
    initial?: {
      id: string;
      value: string;
    }
  ) => void;
}

const SelectInput = ({ onChange }: Props) => {
  const { boardId } = useParams();
  const { data } = useBoard(boardId);

  useEffect(() => {
    if (data?.data?.columns) {
      const firstId = data?.data?.columns[0].id.toString();
      const value = data?.data?.columns[0].title;
      const payload = {
        id: firstId,
        value: value,
      };
      console.log(payload);
      onChange(null, payload);
    }
  }, [data]);

  return (
    <>
      <Heading>Status (Column)</Heading>
      <SelectTag required onChange={onChange}>
        {data?.data.columns.map((column) => (
          <Option
            key={column.id}
            value={column.title}
            id={column.id.toString()}
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
