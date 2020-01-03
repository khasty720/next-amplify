import Document, { Html, Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Manifest 
            href='manifest.json'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument