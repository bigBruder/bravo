import * as Styled from "./header.styles";
import logo from "../../assets/icons/logo.svg";
import UserBrown from "../../assets/icons/UserBrown.svg";
import {useDarkMode} from "../../hooks/useDarkMode.ts";

const Header = () => {
  const [theme, themeToggler, getTheme] = useDarkMode();

  return (
    <Styled.Wrapper>
      <div style={{ width: 153 }}>
        <Styled.SmallLogo src={logo} />
      </div>
      {/*<Styled.Text src={text}></Styled.Text>*/}
      <Styled.TextContainer>
        <Styled.Text>
          Where Craftsmanship and Quality Begin
        </Styled.Text>
        <Styled.TextOver>
          Made with Love
        </Styled.TextOver>
      </Styled.TextContainer>
      <Styled.Button onClick={() => open('https://my.bravocreations.com/login')}>
        <Styled.ButtonIcon
          src={UserBrown}
          alt='Sign In'
        />
        Sign&nbsp;In
      </Styled.Button>
    </Styled.Wrapper>
  );
};
export default Header;
