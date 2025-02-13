import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
