import 'normalize.css';

import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DefaultSeo title="Sandbox" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
