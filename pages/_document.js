import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" type="text/css" href="/librarys/bootstrap5/bootstrap.min.css" />
          <script src="/librarys/jQuery/jquery-3.5.1.min.js" />
          <script src="/librarys/bootstrap5/bootstrap.bundle.min.js" />
          <link rel="stylesheet" type="text/css" href="/librarys/font-awesome/css/all.min.css" />
          <link rel="stylesheet" type="text/css" href="/librarys/DataTables/datatables.min.css" />
          <script type="text/javascript" src="/librarys/DataTables/datatables.min.js" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
