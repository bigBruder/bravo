import * as Styled from "./header.styles";
import logo from "../../assets/icons/logo.svg";
import text from "../../assets/mock/HeaderText.svg";
import UserBrown from "../../assets/icons/UserBrown.svg";

const Header = () => {
  return (
    <Styled.Wrapper>
      <div style={{ width: 153 }}>
        <Styled.SmallLogo src={logo} />
      </div>
      <Styled.Text src={text}></Styled.Text>
      <Styled.Button>
        <Styled.ButtonIcon
          src={UserBrown}
          alt='Sign In'
        />
        Sign In
      </Styled.Button>
    </Styled.Wrapper>
  );
};
export default Header;
