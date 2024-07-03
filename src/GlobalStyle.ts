import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Pragati Narrow", sans-serif;
    letter-spacing: 0.2em;
  }
  *, *::before, *::after {
    box-sizing:inherit;
  }
`;
