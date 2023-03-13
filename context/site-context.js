import React from "react";

const SiteContext = React.createContext({
  themeMode: "",
  toggleTheme: () => {},
});

export default SiteContext;