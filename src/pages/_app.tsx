import "@/styles/globals.scss";
import "@/components/Header/Header.scss";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
