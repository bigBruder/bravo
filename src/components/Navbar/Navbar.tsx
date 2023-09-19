import * as Styled from "./navbar.styles";
import Line from "./../../assets/icons/navbar-line.svg";
import Arch from "./../../assets/icons/navbar-arch.svg";
import Vector from "./../../assets/icons/navbar-vector.svg";
const Navbar = () => {
  const navArray = [
    "Greeting",
    "Services",
    "Portal",
    "Team",
    "Trophies",
    "Pricing",
    "Workflow",
    "Reviews",
    "FAQ",
    "Contact Us",
  ];
  return (
    <Styled.Wrapper>
      <Styled.ArrowField>
        <Styled.ArrowContainer>
          <img src={Line} />
          <img src={Vector} />
          <img src={Arch} />
        </Styled.ArrowContainer>
      </Styled.ArrowField>
      <Styled.TextContainer>
        {navArray.map((item: string) => {
          return <Styled.Text key={item}>{item}</Styled.Text>;
        })}
      </Styled.TextContainer>
    </Styled.Wrapper>
  );
};
export default Navbar;
