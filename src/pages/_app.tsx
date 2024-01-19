import "@/styles/globals.scss";
import "@/components/HeaderFooter/Header/Header.scss";
import "@/components/UI/Modal/Modal.scss";
import { Inter } from "@next/font/google";
import type { AppProps } from "next/app";
import Header from "@/components/HeaderFooter/Header/Header";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/HeaderFooter/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

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

  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(router.pathname !== "/SignIn" && router.pathname !== "/SignUp" && router.pathname !== "/");
  }, [router]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(0, 225, 255)",
      },
      text: {
        primary: "#ffffff",
      },
    },
    typography: {
      fontSize: 16,
    },
    components: {
      MuiInput: {
        styleOverrides: {
          underline: {
            "&:before": {
              borderBottomColor: "rgba(54, 169, 184, 1)", // Цвет нижней полоски при неактивном состоянии
              borderBottomWidth: "2px",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottomColor: "rgb(0, 225, 255)", // Цвет нижней полоски при наведении
              borderBottomWidth: "3px",
            },
            "&:after": {
              borderBottomColor: "rgb(0, 225, 255)", // Цвет нижней полоски при активном состоянии
              borderBottomWidth: "3px",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "rgb(179, 174, 174)", // Цвет текста до нажатия
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: "rgba(0, 153, 173, 1)", // Цвет фона блока, содержащего MenuItem
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          icon: {
            color: "white", // Устанавливаем цвет для стрелки
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: "#ffffff", // Цвет Radio Button
          },
        },
      },
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="wrapper" ref={refComponent}>
          <header className={inter.className}>
            <Header height={height} />
          </header>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
          {isVisible && (
            <footer className={inter.className}>
              {" "}
              <Footer />
            </footer>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}
