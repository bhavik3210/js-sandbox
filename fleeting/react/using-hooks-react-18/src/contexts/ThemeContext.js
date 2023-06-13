import { createContext, useState } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeValues = useTheme();
  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};
