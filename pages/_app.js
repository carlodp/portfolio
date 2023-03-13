import { AnimatePresence } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import Splash from "@/components/Splash";
import SiteContext from "@/context/site-context";
import SiteProvider from "@/context/SiteProvider";
import "@/styles/globals.scss";
import "@/styles/site-theme.scss";

export default function App({ Component, pageProps }) {
  const siteContext = useContext(SiteContext);
  const [showSplash, setShowSplash] = useState(true);
  const [showPage, setShowPage] = useState(false);
  const [initialTheme, setInitialTheme] = useState("");

  useEffect(() => {
    //useEffect triggers after all components are rendered
    setShowSplash(false);
  }, [showSplash]);

  const splashEndHandler = (event) => {
    setShowPage(event);
  };
  
  return (
    <SiteProvider>
      <AnimatePresence>
        <div className={`portfolio`}>
          {/* <Splash
            showSplash={showSplash}
            setShowSplash={setShowSplash}
            splashEnd={splashEndHandler}
          />
          {showPage && <Component {...pageProps} />} */}
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </SiteProvider>
  );
}
