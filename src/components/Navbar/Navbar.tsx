import * as Styled from "./navbar.styles";
import Line from "./../../assets/icons/navbar-line.svg";
import Arch from "./../../assets/icons/navbar-arch.svg";
import Vector from "./../../assets/icons/navbar-vector.svg";

import { useCallback, useRef } from "react";
interface IMyProps {
  navArray: Array<Object>;
  activeItem: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}
const Navbar: React.FunctionComponent<IMyProps> = ({
  activeItem,
  setActiveItem,
}) => {
  // console.log(activeItem);
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

  const getArrowPaddingTop = (index: number) => {
    return `${19 + index * 45}px`;
  };

  const getOpacityStyle = useCallback(
    (i: number) => {
      return i === activeItem
        ? 1
        : i == activeItem + 1 || i == activeItem - 1
        ? 0.55
        : i == activeItem + 2 || i == activeItem - 2
        ? 0.45
        : i === activeItem + 3 || i === activeItem - 3
        ? 0.35
        : 0.25;
    },
    [activeItem]
  );

  return (
    <Styled.Wrapper>
      <Styled.ArrowField paddingTop={getArrowPaddingTop(activeItem)}>
        <Styled.ArrowContainer>
          <img src={Line} />
          <img src={Vector} />
          <img src={Arch} />
        </Styled.ArrowContainer>
      </Styled.ArrowField>
      <Styled.TextContainer>
        {navArray.map((item, i) => {
          const itemRef = useRef<HTMLDivElement | null>(null);
          const handleItemClick = () => {
            //@ts-ignore
            document?.getElementById(item.id).scrollIntoView({
              behavior: "smooth",
            });
            setActiveItem(i);
          };

          return (
            <Styled.Text
              ref={itemRef}
              key={item.text}
              style={{ opacity: getOpacityStyle(i) }}
              onClick={handleItemClick}
            >
              {item.text}
            </Styled.Text>
          );
        })}
      </Styled.TextContainer>
    </Styled.Wrapper>
  );
};
export default Navbar;
