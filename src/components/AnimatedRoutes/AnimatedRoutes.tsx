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
import Footer from "../Footer/Footer";
interface AnimatedRoutesProps { }

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
  // const windowHeight = useRef(window.innerHeight); // Define windowHeight using useRef
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isFooterShown, setIsFooterShown] = useState(true);

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [window.innerHeight])

  useEffect(() => {
    const step = Number((top / windowHeight).toFixed(0));
    if (step !== activeItem) {
      setActiveItem(step);
    }
  }, [top]);

  useEffect(() => {
    let timer: number | null = null;

    const handleScroll = () => {
      if (isFooterShown) {
        setIsFooterShown(false);
      }

      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        setIsFooterShown(true);
      }, 150);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      true
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
        true
      );
    }
  }, [activeItem]);

  const lastPage = activeItem === navArray.length - 1;
  const showFooter = !lastPage && isFooterShown;

  return (

    <>
      {/* @ts-ignore */}
      <Styled.Wrapper ref={ref} activeItem={activeItem}>

        <Navbar
          navArray={navArray}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
        {itemArray.map((Component, index) => {
          return (
            <Styled.ChildrenComponent
              key={index}
              //@ts-ignore
              activeItem={activeItem}
              //@ts-ignore
              parentPosition={top}
              id={navArray[index].id}
            >
              <Component animationActive={index === activeItem} />
            </Styled.ChildrenComponent>
          );
        })}
      </Styled.Wrapper>
      {showFooter ? <Footer /> : null}
    </>
  );
};
export default AnimatedRoutes;
