import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import { lightTheme, darkTheme } from "./components/Themes/Themes";
import { useDarkMode } from "./hooks/useDarkMode";
import { useState } from "react";
import Toggle from "./components/ToggleTheme/Toggler";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  const [theme, themeToggler] = useDarkMode();
  console.log("app", theme);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Header />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </>
    </ThemeProvider>
  );
};

export default App;
