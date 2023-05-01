import { useState } from "react";

export default function useTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const themeValues = {
    darkTheme,
    toggleTheme,
  };

  return themeValues;
}
