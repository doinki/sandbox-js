import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
