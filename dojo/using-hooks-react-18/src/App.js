import { createContext, useContext, useState } from "react";
import Layout from "./components/layout/Layout";

export const ThemeContext = createContext({});

const App = ({ url }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const themeValues = {
    darkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      <Layout url={url} />
    </ThemeContext.Provider>
  );
};

export default App;
