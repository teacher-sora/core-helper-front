import Footer from "@/components/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-column min-100vh">
      <Head>
        <title>코강 도우미</title>
        <meta name="description" content="메이플스토리 코강 도우미이자 코강 계산기예요. 직업과 스킬을 선택하고 스크린샷을 업로드하면, 최적의 조합을 자동으로 분석해요. 복잡한 코강 고민을 도우미로 해결해보세요." />
        <meta name="author" content="메이플 코강 도우미" />

        <meta property="og:title" content="메이플 코강 도우미 - 강화 코어 최적화 도구" />
        <meta property="og:description" content="이미지 업로드로 코강을 해결해요. 최적의 강화 코어 조합을 자동으로 알려드려요." />
        <meta property="og:image" content="https://hcrvm7kvolcgwdtv.public.blob.vercel-storage.com/core-gemstone" />
        <meta property="og:url" content="https://www.core-helper.site" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
