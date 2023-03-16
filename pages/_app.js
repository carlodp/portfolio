import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import Splash from "@/components/Splash";
import SiteProvider from "@/context/SiteProvider";
import SiteContext from "@/context/site-context";
import "@/styles/globals.scss";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    //useEffect triggers after all components are rendered
    setShowSplash(false);
  }, []);

  const splashEndHandler = (event) => {
    setShowPage(event);
  };

  return (
    <SiteProvider>
      <Head>
        <title>Carlo | Creative Portfolio 👨‍💻</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#161616" />
        <meta name="description" content="Portfolio" />
        <meta name="apple-mobile-web-app-status-bar" content="#161616" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="noise"></div>
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <Splash
          showSplash={showSplash}
          setShowSplash={setShowSplash}
          splashEnd={splashEndHandler}
        />
        {showPage && (
          <>
            <Cursor />
            <Component {...pageProps} />
          </>
        )}
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </SiteProvider>
  );
}
