import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import Splash from "@/components/Splash";
import SiteProvider from "@/context/SiteProvider";
import SiteContext from "@/context/site-context";
import "@/styles/globals.scss";
import Cursor from "@/components/Cursor";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import "../public/fonts/style.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  return (
    <SiteProvider>
      <Head>
        <title>Carlo | Creative Portfolio 👨‍💻</title>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#161616" />
        <meta name="description" content="Portfolio" />
        <meta name="apple-mobile-web-app-status-bar" content="#161616" />
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content="@carlodp_" />
        <meta name="twitter:title" content="Carlo | Creative Portfolio 👨‍💻" />
        <meta
          name="twitter:description"
          content="I'm driven to craft stunning, responsive, and user-friendly websites and applications through the utilization of cutting-edge technologies and industry best practices."
        />
        <meta
          name="twitter:image"
          content="https://carlosantos.dev/og-img.jpg"
        />
        <meta property="og:url" content="http://carlosantos.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carlo | Creative Portfolio 👨‍💻" />
        <meta
          property="og:description"
          content="I'm driven to craft stunning, responsive, and user-friendly websites and applications through the utilization of cutting-edge technologies and industry best practices."
        />
        <meta
          property="og:image"
          content="https://carlosantos.dev/og-img.jpg"
        />
        <meta
          property="og:image:url"
          content="https://carlosantos.dev/og-img.jpg"
        />
      </Head>
      <ThemeProvider defaultTheme="light" enableSystem={false}>
        <AnimatePresence>
          {loading ? (
            <Splash setLoading={setLoading} key="splash" />
          ) : (
            <Component {...pageProps} />
          )}
          {/* <Component {...pageProps} /> */}
        </AnimatePresence>
      </ThemeProvider>
      <div className="noise"></div>
    </SiteProvider>
  );
}
