import * as Styled from "./header.styles";
import logo from "../../assets/icons/logo.svg";
import UserBrown from "../../assets/icons/UserBrown.svg";
import useContentful from "../../hooks/useContentful.ts";
import {HeaderContent} from "../../constants.ts";

const Header = () => {
  const { data, loading, error } = useContentful(HeaderContent);

  if (loading) {
    return "";
  }
  if (error) {
    console.log("error", error);
    return null;
  }

  return (
    <Styled.Wrapper>
      <div style={{ width: 129 }}>
        <Styled.SmallLogo src={logo} />
      </div>
      {/*<Styled.Text src={text}></Styled.Text>*/}
      <Styled.TextContainer>
        {/* @ts-ignore */}
        <Styled.Text>{data?.backgroundText}</Styled.Text>
        {/* @ts-ignore */}
        <Styled.TextOver>{data?.text}</Styled.TextOver>
      </Styled.TextContainer>
      <Styled.Button
        onClick={() => open("https://my.bravocreations.com/login")}
      >
        <Styled.ButtonIcon src={UserBrown} alt="Sign In" />
        Sign&nbsp;In
      </Styled.Button>
    </Styled.Wrapper>
  );
};
export default Header;
