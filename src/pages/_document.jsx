import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const { renderPage: originalRenderPage } = ctx;
    const sheet = new ServerStyleSheet();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/favicon.ico" rel="icon" />
          <script src="https://polyfill.io/v3/polyfill.min.js" defer noModule />
        </Head>
        <body>
          <Main />
          <div id="__portal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
