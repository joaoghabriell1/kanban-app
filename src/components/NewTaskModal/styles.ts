import styled from "styled-components";

export const Form = styled.form``;
export const MarginBox = styled.div`
  margin-block: 2.4rem;
`;

export const SubtasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 1.2rem;
  padding-bottom: 0.5rem;
  max-height: 85px;
  overflow-y: scroll;
  &:nth-child(2) {
    flex: 1;
    display: grid;
    align-content: start;
  }
  &::-webkit-scrollbar {
    width: 15px;
  }
`;
export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 1.2rem;
  padding-bottom: 0.5rem;
  overflow-y: scroll;
  &:nth-child(2) {
    flex: 1;
    display: grid;
    align-content: start;
  }

  &::-webkit-scrollbar {
    width: 15px;
  }
`;

export const Heading = styled.legend`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
`;
