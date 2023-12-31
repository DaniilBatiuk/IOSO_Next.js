import "@/styles/globals.scss";
import "@/components/Header/Header.scss";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Header from "@/components/Header/Header";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export default function App({ Component, pageProps }: AppProps) {
  const refComponent = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (refComponent.current) {
      const height = refComponent.current.getBoundingClientRect().height;
      setHeight(height);
    }
  }, [refComponent]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="wrapper" ref={refComponent}>
        <Header height={height} />
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
