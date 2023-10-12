import * as Styled from "./TrophiesMobile";
import {
  Wrapper,
  WelcomeTitle,
  WelcomeText,
  WelcomeTitleColored,
  ContentDepartment,
  TimeDepartment,
  Number,
  Hours,
  TitleContent,
  TextContent,
} from "./TrophiesMobile";
import videoBg from "../../assets/video/home_background.mp4";
import Number01 from "../../assets/images/TrophiesMobile/Number-01.svg";
import Number04 from "../../assets/images/TrophiesMobile/Number-04.svg";
import Number24 from "../../assets/images/TrophiesMobile/Number-24.svg";
import Number72 from "../../assets/images/TrophiesMobile/Number-72.svg";
import VectorIcon from "../../assets/images/PortalMobile/DescriptionVector.svg";
interface ITrophiesMobile {}

const TrophiesMobile: React.FC<ITrophiesMobile> = () => {
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          Our
          <WelcomeTitleColored> Services</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>
          Please understand this is based on average results. Real time depends
          on complexity of jobs
        </WelcomeText>
      </Styled.WelcomeContainer>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={Number01} />
          <Hours>hours</Hours>
        </TimeDepartment>

        <TitleContent>Message Response Time</TitleContent>
        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
      </ContentDepartment>

      <ContentDepartment>
        <TimeDepartment>
          <Number src={Number04} />
          <Hours>hours</Hours>
        </TimeDepartment>

        <TitleContent>EST Prod. Time</TitleContent>
        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
      </ContentDepartment>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={Number24} />
          <Hours>hours</Hours>
        </TimeDepartment>

        <TitleContent>CAD Prod. Time</TitleContent>
        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
      </ContentDepartment>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={Number72} />
          <Hours>hours</Hours>
        </TimeDepartment>

        <TitleContent>Prod. Time after approval</TitleContent>
        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
      </ContentDepartment>
      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default TrophiesMobile;
