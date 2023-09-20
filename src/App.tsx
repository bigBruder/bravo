// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portal from "./pages/Portal/Portal";
import Team from "./pages/Team/Team";
import Trophies from "./pages/Trophies/Trophies";
import Pricing from "./pages/Pricing/Pricing";
import Workflow from "./pages/Workflow/Workflow";
import FAQ from "./pages/FAQ/FAQ";
import Reviews from "./pages/Reviews/Reviews";
import ContactPage from "./pages/Contact Us/ContactPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/team" element={<Team />} />
        <Route path="/trophies" element={<Trophies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
