import 'normalize.css';

import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo />
      <Script
        src="https://polyfill.io/v3/polyfill.min.js"
        strategy="beforeInteractive"
        noModule
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
