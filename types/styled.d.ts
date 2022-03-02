import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: string;
      text: string;
    };
  }
}
