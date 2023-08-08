import styled from "styled-components";
interface Props {
  id?: number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
const SecondaryInput = ({ id, onChange }: Props) => {
  return (
    <>
      <div>
        <input id={id} onChange={onChange} type="text" />
        <button>x</button>
      </div>
    </>
  );
};

export default SecondaryInput;
