import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Pragati Narrow", sans-serif;
    letter-spacing: 0.2em;
    background-image: url("../../public/background.svg");
    background-size: cover;
    background-attachment: fixed
  }
  *, *::before, *::after {
    box-sizing:inherit;
  }
`;
