import styled from "styled-components";

export const Label = styled.label`
  color: ${(props) => props.theme.colors["fc-headings"]};
  font-weight: 500w;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
`;

export const PrimaryInputTag = styled.input`
  font-size: 13px;
  color: ${(props) => props.theme.colors["fc-inputs"]};
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: none;
  margin-bottom: 2.4rem;
  &::placeholder {
    opacity: 0.25;
  }
`;

export const SelectTag = styled.select`
  font-size: 13px;
  color: ${(props) => props.theme.colors["fc-inputs"]};
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  outline: 0;
  font-family: inherit;
  width: 100%;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: none;
  margin-bottom: 2.4rem;
  height: 40px;
  &::placeholder {
    opacity: 0.25;
  }
  & > option {
    background: ${(props) => props.theme.colors["bg-cards"]};
    border: 0;
  }
  display: flex;
`;
