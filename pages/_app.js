import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import Splash from "@/components/Splash";
import SiteContext from "@/context/site-context";
import SiteProvider from "@/context/SiteProvider";
import "@/styles/globals/globals.scss";
import "@/styles/globals/site-theme.scss";
import "@/styles/globals/animate.scss";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const siteContext = useContext(SiteContext);
  const [showSplash, setShowSplash] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    //useEffect triggers after all components are rendered
    setShowSplash(false);
  }, [showSplash]);

  const splashEndHandler = (event) => {
    setShowPage(event);
  };

  //set body initial class to localStorage item
  useEffect(() => {
    // const localStorageTheme = localStorage.getItem("themeMode");
    // document.body.className = localStorageTheme;
  }, []);

  return (
    <SiteProvider>
      <Head>
        <title>@carlodp_</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#161616" />
        <meta name="description" content="Portfolio" />
        <meta name="apple-mobile-web-app-status-bar" content="#161616" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <AnimatePresence>
          <Splash
            showSplash={showSplash}
            setShowSplash={setShowSplash}
            splashEnd={splashEndHandler}
          />
          {showPage && (
            <>
              <Component {...pageProps} />
              <Cursor />
            </>
          )}
          {/* <Component {...pageProps} /> */}
        </AnimatePresence>
      </ThemeProvider>
    </SiteProvider>
  );
}
