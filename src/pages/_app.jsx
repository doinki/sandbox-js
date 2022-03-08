import 'normalize.css';

import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
