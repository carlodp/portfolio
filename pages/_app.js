import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import Splash from "@/components/Splash";
import SiteProvider from "@/context/SiteProvider";
import SiteContext from "@/context/site-context";
import "@/styles/globals.scss";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import '../public/fonts/style.css';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

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
      <ThemeProvider defaultTheme="dark" enableSystem={false}>
        <AnimatePresence>
          {/* {loading ? (
            <Splash setLoading={setLoading} key="splash" />
          ) : (
            <Component {...pageProps} />
          )} */}
          <Component {...pageProps} />
        </AnimatePresence>
      </ThemeProvider>
      <div className="noise"></div>
    </SiteProvider>
  );
}
