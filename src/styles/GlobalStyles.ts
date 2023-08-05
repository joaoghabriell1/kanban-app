import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

:root{
    --blue-100: hsla(242, 48%, 58%, 1);
}

html{
    color: ${(props) => props.theme.colors["fc-headings"]};
}

`;
