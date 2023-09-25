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
import { useEffect, useState } from "react";
interface AnimatedRoutesProps {}

const itemArray = [
  <Home />,
  <Services />,
  <Portal />,
  <Team />,
  <Trophies />,
  <Pricing />,
  <Workflow />,
  <Reviews />,
  <FAQ />,
  <ContactPage />,
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
  useEffect(() => {
    top < 747
      ? setActiveItem(0)
      : top < 1494
      ? setActiveItem(1)
      : top < 2241
      ? setActiveItem(2)
      : top < 2988
      ? setActiveItem(3)
      : top < 3735
      ? setActiveItem(4)
      : top < 4482
      ? setActiveItem(5)
      : top < 5229
      ? setActiveItem(6)
      : top < 5976
      ? setActiveItem(7)
      : top < 6723
      ? setActiveItem(8)
      : setActiveItem(9);
  }, [top]);

  console.log(top);
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

    <div
      ref={ref}
      style={{
        scrollSnapType: "y proximity",
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100vh",
      }}
    >
      <Navbar
        navArray={navArray}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      {itemArray.map((item, index) => {
        return (
          <div
            //@ts-ignore
            parentPosition={top}
            id={navArray[index].id}
            style={{
              position: "relative",
              scrollSnapAlign: "start",
              height: "100vh",
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default AnimatedRoutes;
// import Home from "../../pages/Home/Home";
// import Services from "../../pages/Services/Services";
// import Portal from "../../pages/Portal/Portal";
// import Team from "../../pages/Team/Team";
// import Trophies from "../../pages/Trophies/Trophies";
// import Pricing from "../../pages/Pricing/Pricing";
// import Workflow from "../../pages/Workflow/Workflow";
// import FAQ from "../../pages/FAQ/FAQ";
// import Reviews from "../../pages/Reviews/Reviews";
// import ContactPage from "../../pages/Contact Us/ContactPage";
// import Navbar from "../Navbar/Navbar";

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// interface AnimatedRoutesProps {}

// const itemArray = [
//   <Home />,
//   <Services />,
//   <Portal />,
//   <Team />,
//   <Trophies />,
//   <Pricing />,
//   <Workflow />,
//   <Reviews />,
//   <FAQ />,
//   <ContactPage />,
// ];

// const navArray = [
//   { text: "Greeting", path: "/", id: "section-greeting" },
//   { text: "Services", path: "/services", id: "section-services" },
//   { text: "Portal", path: "/portal", id: "section-portal" },
//   { text: "Team", path: "/team", id: "section-team" },
//   { text: "Trophies", path: "/trophies", id: "section-trophies" },
//   { text: "Pricing", path: "/pricing", id: "section-pricing" },
//   { text: "Workflow", path: "/workflow", id: "section-workflow" },
//   { text: "Reviews", path: "/reviews", id: "section-reviews" },
//   { text: "FAQ", path: "/faq", id: "section-faq" },
//   { text: "Contact Us", path: "/contact-us", id: "section-contact" },
// ];

// const AnimatedRoutes: React.FunctionComponent<AnimatedRoutesProps> = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const variants = {
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, y: 50 },
//   };

//   return (
//     <div
//       style={{
//         scrollSnapType: "y proximity",
//         overflowY: "scroll",
//         height: "100vh",
//       }}
//     >
//       <Navbar navArray={navArray} />
//       {itemArray.map((item, index) => (
//         <motion.div
//           key={navArray[index].id}
//           style={{
//             position: "relative",
//             scrollSnapAlign: "start",
//             height: "100vh",
//           }}
//           initial="hidden"
//           animate={scrollY >= index * window.innerHeight ? "visible" : "hidden"}
//           variants={variants}
//         >
//           {item}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedRoutes;
