import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

:root{
    --blue-100: hsla(242, 48%, 58%, 1);
}

html{
    color: ${(props) => props.theme.colors["fc-headings"]};
    box-sizing: border-box;
}

* {
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
}

`;
