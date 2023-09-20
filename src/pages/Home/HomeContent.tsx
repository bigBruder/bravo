import * as Styled from "./home.styles";
// import LogoIcon from "./../../assets/icons/logo-icon.svg";
import SmallLogoIcon from "./../../assets/icons/logo-icon2.svg";
import GiftIcon from "./../../assets/icons/gift.svg";
import OctagonIcon from "./../../assets/icons/video-octagon.svg";
interface IHomeContent {}

const HomeContent: React.FunctionComponent<IHomeContent> = () => {
  return (
    <Styled.ContentWrapper>
      {/* <Styled.LogoWrapper> */}
      <Styled.PageContent>
        <Styled.TextHeader>
          Number One Service Jeweler in America
        </Styled.TextHeader>
        <Styled.TextContent>
          Let us show you why we are different by providing exceptional customer
          service and going above and beyond to meet your needs.
        </Styled.TextContent>
        <Styled.ButtonContainer>
          <Styled.SignUpButton>
            <img src={GiftIcon} />
            Sign up
          </Styled.SignUpButton>
          <Styled.DemoButton>
            <img src={OctagonIcon} />
            Demo Video
          </Styled.DemoButton>
        </Styled.ButtonContainer>
      </Styled.PageContent>

      {/* <Styled.LogoContainer> */}
      {/* <Styled.Logo src={LogoIcon} alt="Logo" /> */}
      <Styled.SmallLogo src={SmallLogoIcon} alt="Small Logo" />
      {/* </Styled.LogoContainer> */}
      {/* </Styled.LogoWrapper> */}
    </Styled.ContentWrapper>
  );
};

export default HomeContent;
