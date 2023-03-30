import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>
        <link rel="preload" href="/fonts/Outfit-Light.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Outfit-SemiBold.ttf" as="font" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Outfit-Bold.ttf" as="font" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

}