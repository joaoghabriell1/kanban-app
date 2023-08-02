import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

html{
    color: ${(props) => props.theme.colors.text};
}

`;
