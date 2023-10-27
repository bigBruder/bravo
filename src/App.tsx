import Header from "./components/Header/Header";
import "./styles/theme/theme.scss";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";
import { useDarkMode } from "./hooks/useDarkMode";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  //@ts-ignore
  const [] = useDarkMode();

  return (
    <>
      {/* @ts-ignore */}
      {/*<Toggle theme={theme} toggleTheme={themeToggler} />*/}
      <Header />
      <AnimatedRoutes />
    </>
  );
};

export default App;
