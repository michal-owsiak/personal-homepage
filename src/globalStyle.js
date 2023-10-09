import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    max-width: 912px;
    margin: 86px auto 82px;
    padding: 0 16px;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.color.mainBackground};
    transition: 0.3s;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 16px auto 23px;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) and 
      (max-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
        margin: 48px auto 54px;
      }
  }
`;

