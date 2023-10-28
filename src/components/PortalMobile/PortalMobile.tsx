//@ts-nocheck
import { Wrapper } from "./PortalMobile";
import videoBg from "../../assets/video/home_background.mp4";
import * as Styled from "./PortalMobile";
import GoogleIcon from "../../assets/images/PortalMobile/Google.svg";
import AppleIcon from "../../assets/images/PortalMobile/Apple.svg";
import StartButton from "../../assets/images/PortalMobile/Button.svg";
import VectorIcon from "../../assets/images/PortalMobile/DescriptionVector.svg";
import PortalImageAdv from "../../assets/images/PortalMobile/PortalAdvert.svg";
import { WelcomeTitle, WelcomeText, WelcomeTitleColored } from "./PortalMobile";
import useContentful from "../../hooks/useContentful.ts";
import {PortalMobileId} from "../../constants.ts";

interface IPortalMobile {}

const PortalMobile: React.FC<IPortalMobile> = () => {
  const { data } = useContentful(PortalMobileId);

  console.log('Portal', 'https:' + data?.background?.fields?.file?.url);

  return (
    <Wrapper>
      <Styled.Video src={data?.background?.fields?.file?.url} />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          {data?.title?.[0]}
          <WelcomeTitleColored>
            {" "}
            {data?.title?.[1]}
            <br />
          </WelcomeTitleColored>{" "}
          {data?.title?.[2]} <WelcomeTitleColored>{data?.title?.[3]}</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>
          {data?.titleDescription}
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
        <Styled.AdvertImage src={data?.icon?.fields?.file?.url} />
      </Styled.AdvertContainer>
      <Styled.ButtonStart onClick={() => open("https://my.bravocreations.com/registration")}>
        <img src={StartButton} />
        {data?.button}
      </Styled.ButtonStart>
      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          {data?.quote}
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default PortalMobile;
