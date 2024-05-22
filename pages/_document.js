import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="navber">
          <Link href="/" className="logo">
            DF MongoDB
          </Link>
          <Link href="/list">List</Link>
          <Link href="/write">
            Write
          </Link>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
