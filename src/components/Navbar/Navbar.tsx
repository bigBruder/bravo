import * as Styled from "./navbar.styles";
import Line from "./../../assets/icons/navbar-line.svg";
import Arch from "./../../assets/icons/navbar-arch.svg";
import Vector from "./../../assets/icons/navbar-vector.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCallback } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navArray = [
    { text: "Greeting", path: "/" },
    { text: "Services", path: "/services" },
    { text: "Portal", path: "/portal" },
    { text: "Team", path: "/team" },
    { text: "Trophies", path: "/trophies" },
    { text: "Pricing", path: "/pricing" },
    { text: "Workflow", path: "/workflow" },
    { text: "Reviews", path: "/reviews" },
    { text: "FAQ", path: "/faq" },
    { text: "Contact Us", path: "/contact-us" },
  ];

  //   return (
  //     <Styled.Wrapper>
  //       <Styled.ArrowField>
  //         <Styled.ArrowContainer>
  //           <img src={Line} />
  //           <img src={Vector} />
  //           <img src={Arch} />
  //         </Styled.ArrowContainer>
  //       </Styled.ArrowField>
  //       <Styled.TextContainer>
  //         {navArray.map((item: string) => {
  //           return <Styled.Text key={item}>{item}</Styled.Text>;
  //         })}
  //       </Styled.TextContainer>
  //     </Styled.Wrapper>
  //   );
  const getArrowPaddingTop = (index: number) => {
    return `${19 + index * 45}px`;
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const getOpacityStyle = useCallback(
    (i: number, path: string) => {
      return i == 3
        ? 0.45
        : i == 4
        ? 0.35
        : i > 4
        ? 0.25
        : path === location.pathname
        ? 1
        : 0.55;
    },
    [location.pathname]
  );
  return (
    <Styled.Wrapper>
      <Styled.ArrowField
        paddingTop={getArrowPaddingTop(
          navArray.findIndex((item) => item.path === location.pathname)
        )}
      >
        <Styled.ArrowContainer>
          <img src={Line} />
          <img src={Vector} />
          <img src={Arch} />
        </Styled.ArrowContainer>
      </Styled.ArrowField>
      <Styled.TextContainer>
        {navArray.map((item, i) => (
          <Styled.Text
            key={item.text}
            style={{ opacity: getOpacityStyle(i, item.path) }}
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </Styled.Text>
        ))}
      </Styled.TextContainer>
    </Styled.Wrapper>
  );
};
export default Navbar;
