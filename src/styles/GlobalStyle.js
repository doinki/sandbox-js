import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    box-sizing: border-box;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    font-family: Noto Sans KR, sans-serif;
  }

  #__next {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
