import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <AnimatedRoutes />
      {/* <Footer /> */}
    </>
  );
};

export default App;
