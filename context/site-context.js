import React from "react";

const SiteContext = React.createContext({
  themeMode: "",
  firstVisit: null,
  toggleTheme: () => {},
});

export default SiteContext;