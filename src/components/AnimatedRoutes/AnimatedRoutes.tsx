import Home from "../../pages/Home/Home";
import Services from "../../pages/Services/Services";
import Portal from "../../pages/Portal/Portal";
import Team from "../../pages/Team/Team";
import Trophies from "../../pages/Trophies/Trophies";
import Pricing from "../../pages/Pricing/Pricing";
import Workflow from "../../pages/Workflow/Workflow";
import FAQ from "../../pages/FAQ/FAQ";
import Reviews from "../../pages/Reviews/Reviews";
import ContactPage from "../../pages/Contact Us/ContactPage";
import Navbar from "../Navbar/Navbar";
import useScrollBarPositions from "../../hooks/useScrollTop";

import React, { useEffect, useState } from "react";
import { useRef } from "react";

import * as Styled from "./AnimatedRoutes.styles";
interface AnimatedRoutesProps {}

export interface AnimatedPageProps {
  animationActive?: boolean;
}

const itemArray: React.FC<AnimatedPageProps>[] = [
  Home,
  Services,
  Portal,
  Team,
  Trophies,
  Pricing,
  Workflow,
  Reviews,
  FAQ,
  ContactPage,
];

const navArray = [
  { text: "Greeting", path: "/", id: "section-greeting" },
  { text: "Services", path: "/services", id: "section-services" },
  { text: "Portal", path: "/portal", id: "section-portal" },
  { text: "Team", path: "/team", id: "section-team" },
  { text: "Trophies", path: "/trophies", id: "section-trophies" },
  { text: "Pricing", path: "/pricing", id: "section-pricing" },
  { text: "Workflow", path: "/workflow", id: "section-workflow" },
  { text: "Reviews", path: "/reviews", id: "section-reviews" },
  { text: "FAQ", path: "/faq", id: "section-faq" },
  { text: "Contact Us", path: "/contact-us", id: "section-contact" },
];

const AnimatedRoutes: React.FunctionComponent<AnimatedRoutesProps> = () => {
  const [activeItem, setActiveItem] = useState(0);
  const { ref, top } = useScrollBarPositions();
  const windowHeight = useRef(window.innerHeight); // Define windowHeight using useRef

  useEffect(() => {
    // Oto tozhe norm varik
    //
    const step = Number((top / windowHeight.current).toFixed(0));
    if (step !== activeItem) {
      setActiveItem(step);
    }
    // const scrollableHeight = ref?.current?.scrollHeight ?? 0;
    // const scrollPosition = top / scrollableHeight;
    // const numberOfItems = itemArray.length;
    // const activeItem = Math.min(
    //   Math.floor(scrollPosition * numberOfItems),
    //   numberOfItems - 1
    // );
    // setActiveItem(activeItem);
  }, [top]);

  return (
    // <AnimatePresence>
    //   <Routes location={location} key={location.pathname}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/portal" element={<Portal />} />
    //     <Route path="/team" element={<Team />} />
    //     <Route path="/trophies" element={<Trophies />} />
    //     <Route path="/pricing" element={<Pricing />} />
    //     <Route path="/workflow" element={<Workflow />} />
    //     <Route path="/reviews" element={<Reviews />} />
    //     <Route path="/faq" element={<FAQ />} />
    //     <Route path="/contact-us" element={<ContactPage />} />
    //   </Routes>
    // </AnimatePresence>

    <Styled.Wrapper ref={ref}>
      {/* style={{
        scrollSnapType: "y proximity",
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100vh",
      }} */}
      <Navbar
        navArray={navArray}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      {itemArray.map((Component, index) => {
        return (
          <Styled.ChildrenComponent
            //@ts-ignore
            parentPosition={top}
            id={navArray[index].id}
          >
            <Component animationActive={index === activeItem} />
          </Styled.ChildrenComponent>
        );
      })}
    </Styled.Wrapper>
  );
};
export default AnimatedRoutes;
