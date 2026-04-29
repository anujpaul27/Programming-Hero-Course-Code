"use client";

import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="btn btn-accent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}