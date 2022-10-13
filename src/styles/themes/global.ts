import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue-600"]};
  }
  body {
    background: ${(props) => props.theme["primary"]};
    color: ${(props) => props.theme["white"]};
    -webkit-font-smoothing: antialiased;
    scrollbar-color: blue;
    /* padding: 0.938rem; */
    border:0;
  }


  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border: 0;
  }
`;
