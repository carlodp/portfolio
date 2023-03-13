(function initTheme() {
  // var theme = localStorage.getItem("theme") || "light";
  // if (theme === "dark") {
  //   document.querySelector("html").classList.add("dark");
  // }

  const localStorageTheme = localStorage.getItem("themeMode");
  document.querySelector("html").classList.add(localStorageTheme);
})();
