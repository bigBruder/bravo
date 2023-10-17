import Header from "./components/Header/Header";

// import Footer from "./components/Footer/Footer";

import "./styles/theme/theme.scss";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
// import { lightTheme, darkTheme } from "./components/Themes/Themes";
// import { useDarkMode } from "./hooks/useDarkMode";
// import { useState } from "react";
import Toggle from "./components/ToggleTheme/Toggler";
import { useDarkMode } from "./hooks/useDarkMode";
// import { useEffect, useState } from "react";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  //@ts-ignore
  const [theme, themeToggler] = useDarkMode();
  // const [theme] = useDarkMode();
  // console.log("app", theme);
  // const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      {/* @ts-ignore */}
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Header />
      <AnimatedRoutes />
    </>
  );
};

export default App;
