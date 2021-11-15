import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    font-family: Roboto;
  }

  a {
    text-decoration: none;
  }

  button {
  border: none;
  }

`;

export default GlobalStyle;