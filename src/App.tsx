// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/portal" element={<Home />} />
        <Route path="/team" element={<Services />} />
        <Route path="/trophies" element={<Home />} />
        <Route path="/pricing" element={<Services />} />
        <Route path="/workflow" element={<Home />} />
        <Route path="/reviews" element={<Services />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
