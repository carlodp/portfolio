import Footer from "@/components/structure/Footer";
import Main from "@/components/structure/Main";
import Head from "next/head";
import Header from "../components/structure/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>@carlodp_</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
