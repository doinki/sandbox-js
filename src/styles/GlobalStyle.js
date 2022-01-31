import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #__portal {
    position: fixed;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.fg};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  html {
    font-size: 62.5%;
  }

  img,
  svg {
    display: block;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
