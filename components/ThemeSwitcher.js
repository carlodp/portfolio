import { useTheme } from "next-themes";
import styled from "@/styles/components/ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const newTheme = theme === "dark" ? "light" : "dark";
  const toggleThemeHandler = () => {
    setTheme(newTheme);
  };

  return (
    <div className={styled.theme}>
      <button
        type="button"
        aria-label="Toggle Theme"
        className={`themeToggle ${theme}`}
        onClick={toggleThemeHandler}
      >
        SWITCH IT UP!
      </button>
    </div>
  );
};

export default ThemeSwitcher;
