import styled from "styled-components";

export const ColumnsWrapper = styled.ul`
  box-sizing: border-box;
  padding-top: 2.4rem;
  padding-right: 2.4rem;
  display: flex;
  gap: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-button:single-button {
    background-color: #bbbbbb;
    display: block;
    border-style: solid;
    height: 13px;
    width: 16px;
    display: none;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
