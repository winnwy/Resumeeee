import { create } from "zustand";

export type Theme = {
  name: string;
  bg: string;
  text: string;
  accent: string;
  border: string;
  hover: string;
  shadow: string;
};

type ThemeName = "light" | "dark";

interface ThemeState {
  themeName: ThemeName;
  theme: Theme;
  toggleTheme: () => void;
}

const themes: Record<ThemeName, Theme> = {
  dark: {
    name: "Cozy Night",
    bg: "bg-indigo-950",
    text: "text-pink-200",
    accent: "text-yellow-300",
    border: "border-pink-300",
    hover: "hover:text-yellow-200",
    shadow: "shadow-pink-400/30",
  },
  light: {
    name: "Pastel Dream",
    bg: "bg-pink-50",
    text: "text-purple-700",
    accent: "text-rose-500",
    border: "border-purple-200",
    hover: "hover:text-rose-400",
    shadow: "shadow-purple-200/40",
  },
};

const getSystemTheme = (): ThemeName => {
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light"; 
};

const useThemeStore = create<ThemeState>((set) => {
  const systemTheme = getSystemTheme();

  return {
    themeName: systemTheme,
    theme: themes[systemTheme],
    toggleTheme: () =>
      set((state) => {
        const newThemeName: ThemeName = state.themeName === "light" ? "dark" : "light";
        return {
          themeName: newThemeName,
          theme: themes[newThemeName],
        };
      })
  };
});

export default useThemeStore;