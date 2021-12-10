import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  #__next {
    display: flex;
    flex-direction: column;
  }

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

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
