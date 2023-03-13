import Footer from "@/components/structure/Footer";
import Head from "next/head";
import Header from "../components/structure/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>@carlodp</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#161616" />
        <meta name="description" content="Portfolio" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#161616" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </>
  );
}
