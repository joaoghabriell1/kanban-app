import styled from "styled-components";
export const Form = styled.form`
  width: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
`;

export const MarginBox = styled.div`
  margin-block: 2.4rem;
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
    max-height: 160px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 15px;
    }
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.legend`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;
