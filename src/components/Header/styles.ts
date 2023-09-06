import styled from "styled-components";

export const HeaderTag = styled.header`
  background-color: ${(props) => props.theme.colors["bg-cards"]};
  display: flex;
  align-items: center;
  padding: 2rem 1.5rem;
  min-height: 7.8rem;
`;
