import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #__portal {
    position: fixed;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.palette.bg};
    color: ${({ theme }) => theme.palette.fg};
    font-family: Noto Sans KR, -apple-system, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕, sans-serif;
    line-height: 1.5;
  }

  img,
  svg {
    display: block;
    vertical-align: middle;
  }
`;

export default GlobalStyle;
