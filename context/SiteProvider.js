import React, { useReducer } from "react";

import SiteContext from "./site-context";

const defaultSiteState = {
  themeMode: '',
};

const siteReducer = (state, action) => {
  if (action.type === "TOGGLE_THEME_MODE") {
    const currentTheme = localStorage.getItem("themeMode");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    return {
      themeMode: newTheme
    }
  }

  return defaultSiteState;
};

const SiteProvider = (props) => {
  const [siteState, dispatch] = useReducer(siteReducer, defaultSiteState);

  const toggleThemeHandler = (event) => {
    dispatch({
      type: event.type,
    });
  };

  const siteContext = {
    themeMode: siteState.themeMode,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <SiteContext.Provider value={siteContext}>
      {props.children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;