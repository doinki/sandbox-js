import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #__portal {
    position: fixed;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.fg};
    font-family: Noto Sans KR, sans-serif;
  }

  html {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
