import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    max-width: 1216px;
    margin: 115px auto 109px;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.whiteLilac};
  }
`;