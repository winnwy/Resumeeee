import { Moon, Sun } from "lucide-react";
import useThemeStore from "../stores/useThemeStore";

const ThemeToggler = ({ className = "" }) => {
  const { theme, themeName, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`absolute p-2 ${theme.hover} ${theme.text} ${className}`}
      aria-label="Toggle theme"
    >
      {themeName === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggler;
