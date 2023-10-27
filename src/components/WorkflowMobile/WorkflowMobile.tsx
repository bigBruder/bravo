//@ts-nocheck
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
// import Number1 from "../../assets/images/WorkflowMobile/Number1.svg";
// import Number2 from "../../assets/images/WorkflowMobile/Number2.svg";
// import Number3 from "../../assets/images/WorkflowMobile/Number3.svg";
// import Number4 from "../../assets/images/WorkflowMobile/Number4.svg";
import useContentful from "../../hooks/useContentful";
import { WorkflowMobileId } from "../../constants";
interface IWorkflowMobile {}

const WorkflowMobile: React.FC<IWorkflowMobile> = () => {
  const { data } = useContentful(WorkflowMobileId);
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.Star src={Star} />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          {data?.title[0]} <br />
          <WelcomeTitleColored>{data?.title[1]}</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>{data?.titleText}</WelcomeText>
      </Styled.WelcomeContainer>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={data?.card[0].fields.file.url} />
          <Hours>{data?.card[0].fields.title}</Hours>
        </TimeDepartment>

        <TextContent>{data?.card[0].fields.description}</TextContent>

        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={data?.card[1].fields.file.url} />
          <Hours>{data?.card[1].fields.title}</Hours>
        </TimeDepartment>

        <TextContent>{data?.card[1].fields.description}</TextContent>
        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={data?.card[2].fields.file.url} />
          <Hours>{data?.card[2].fields.title}</Hours>
        </TimeDepartment>

        <TextContent>{data?.card[2].fields.description}</TextContent>
        <Styled.ArrowImage>
          <Styled.ArrowContainer src={ArrowSvg} />
        </Styled.ArrowImage>

        <TimeDepartment>
          <Number src={data?.card[3].fields.file.url} />
          <Hours>{data?.card[3].fields.title}</Hours>
        </TimeDepartment>

        <TextContent>{data?.card[3].fields.description}</TextContent>
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
        <Styled.DescriptionText>{data?.quote}</Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default WorkflowMobile;
