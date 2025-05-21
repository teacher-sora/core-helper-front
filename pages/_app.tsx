import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>코강 도우미</title>
        <meta name="description" content="직업과 스킬을 선택 후 스크린샷을 올리면, 메이플스토리의 최적의 조합을 자동으로 분석해요. 복잡한 코강 고민을 도우미로 해결해보세요." />
        <meta name="author" content="메이플 코강 도우미" />

        <meta property="og:title" content="메이플 코강 도우미 - 코강을 간편하게" />
        <meta property="og:description" content="이미지를 업로드하여 시작해 보세요. 최적의 강화 코어 조합을 자동으로 알려드려요." />
        <meta property="og:image" content="https://core-helper-back.onrender.com/static/images/logo.png" />
        <meta property="og:url" content="https://www.core-helper.site" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
