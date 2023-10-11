import * as Styled from "./footer.styles";

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.BallsContainer>
          <Styled.Ball />
          <Styled.Ball />
        </Styled.BallsContainer>
        <Styled.Line />
      </Styled.Container>
      <Styled.Triangle />
      <Styled.Container>
        <Styled.Line />
        <Styled.BallsContainer>
          <Styled.Ball />
          <Styled.Ball />
        </Styled.BallsContainer>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Footer;
