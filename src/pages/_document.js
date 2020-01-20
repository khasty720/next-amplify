import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { JS } from 'aws-amplify';

JS.browserOrNode = () => {
  const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  return {
    isBrowser,
    isNode,
  };
};

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
