import * as Styled from "./WorkflowMobile";
import {
  Wrapper,
  WelcomeTitle,
  WelcomeText,
  WelcomeTitleColored,
  ContentDepartment,
  TimeDepartment,
  Number,
  Hours,
  TextContent,
} from "./WorkflowMobile";
import Star from "../../assets/icons/HomeMobile/pink-star.svg";
import videoBg from "../../assets/video/home_background.mp4";
// import Number01 from "../../assets/images/TrophiesMobile/Number-01.svg";
// import Number04 from "../../assets/images/TrophiesMobile/Number-04.svg";
// import Number24 from "../../assets/images/TrophiesMobile/Number-24.svg";
// import Number72 from "../../assets/images/TrophiesMobile/Number-72.svg";
import ArrowSvg from "../../assets/images/WorkflowMobile/ArrowDown.svg";
import VectorIcon from "../../assets/images/PortalMobile/DescriptionVector.svg";
import Number1 from "../../assets/images/WorkflowMobile/Number1.svg";
import Number2 from "../../assets/images/WorkflowMobile/Number2.svg";
import Number3 from "../../assets/images/WorkflowMobile/Number3.svg";
import Number4 from "../../assets/images/WorkflowMobile/Number4.svg";
interface IWorkflowMobile {}

const WorkflowMobile: React.FC<IWorkflowMobile> = () => {
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.Star src={Star} />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          We Make it <br />
          <WelcomeTitleColored>Extremely Easy</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>
          Please understand this is based on average results. Real time depends
          on complexity of jobs
        </WelcomeText>
      </Styled.WelcomeContainer>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={Number1} />
          <Hours>Submit Job</Hours>
        </TimeDepartment>

        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>

        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={Number2} />
          <Hours>Receive EST & Approve it</Hours>
        </TimeDepartment>

        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={Number3} />
          <Hours>Receive Your Item</Hours>
        </TimeDepartment>

        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={Number4} />
          <Hours>hours</Hours>
        </TimeDepartment>

        <TextContent>
          We offer Rush or date specific service to get your order done at the
          time you need it.
        </TextContent>
        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>
      </ContentDepartment>
      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          First, jewelers create sketches and select suitable materials, then
          jewelry making begins, which includes operations such as casting,
          machining and polishing, gemstone inlay and final finishing.
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default WorkflowMobile;
