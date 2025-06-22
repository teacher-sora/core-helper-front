import Footer from "@/components/footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-column min-100vh">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
