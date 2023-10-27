import { Wrapper } from "./PortalMobile";
import videoBg from "../../assets/video/home_background.mp4";
import * as Styled from "./PortalMobile";
import GoogleIcon from "../../assets/images/PortalMobile/Google.svg";
import AppleIcon from "../../assets/images/PortalMobile/Apple.svg";
import StartButton from "../../assets/images/PortalMobile/Button.svg";
import VectorIcon from "../../assets/images/PortalMobile/DescriptionVector.svg";
import PortalImageAdv from "../../assets/images/PortalMobile/PortalAdvert.svg";
import { WelcomeTitle, WelcomeText, WelcomeTitleColored } from "./PortalMobile";

interface IPortalMobile {}

const PortalMobile: React.FC<IPortalMobile> = () => {
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          Portal
          <WelcomeTitleColored>
            {" "}
            as
            <br />
          </WelcomeTitleColored>{" "}
          Easy <WelcomeTitleColored>as 1,2,3</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>
          Submit, Track, Ship, Communicate, Mobile Devices All in One Service
        </WelcomeText>
      </Styled.WelcomeContainer>
      <Styled.AdvertContainer>
        <Styled.ButtonContainer>
          <Styled.GoogleImage src={GoogleIcon} onClick={() => open(
            "https://play.google.com/store/apps/details?id=com.bravocrm"
          )} />

          <Styled.AppImage src={AppleIcon} onClick={() =>
            open(
              "https://apps.apple.com/us/app/bravo-creations/id6450965519"
            )
          } />
        </Styled.ButtonContainer>
        <Styled.AdvertImage src={PortalImageAdv} />
      </Styled.AdvertContainer>
      <Styled.ButtonStart onClick={() => open("https://my.bravocreations.com/registration")}>
        <img src={StartButton} />
        Start Your Journey
      </Styled.ButtonStart>
      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          Our unique approach and attention to detail set us apart from our
          competitors, ensuring a truly memorable experience for our clients.
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default PortalMobile;
