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
    padding: 0 16px;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.mainBackground};
    transition: 0.3s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 21px auto 31px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and 
      (max-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
        margin: 64px auto 72px;
      }
  }
`;

