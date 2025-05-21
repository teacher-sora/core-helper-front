import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>코강 도우미</title>
        <meta property="og:title" content="코강 도우미" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
