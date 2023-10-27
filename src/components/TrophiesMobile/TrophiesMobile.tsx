//@ts-nocheck
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
// import Number01 from "../../assets/images/TrophiesMobile/Number-01.svg";
// import Number04 from "../../assets/images/TrophiesMobile/Number-04.svg";
// import Number24 from "../../assets/images/TrophiesMobile/Number-24.svg";
// import Number72 from "../../assets/images/TrophiesMobile/Number-72.svg";
import VectorIcon from "../../assets/images/PortalMobile/DescriptionVector.svg";
import useContentful from "../../hooks/useContentful";
import { TrophiesMobileId } from "../../constants";
interface ITrophiesMobile {}

const TrophiesMobile: React.FC<ITrophiesMobile> = () => {
  const { data } = useContentful(TrophiesMobileId);
  return (
    <Wrapper>
      <Styled.Video src={videoBg} autoPlay loop muted />
      <Styled.WelcomeContainer>
        <WelcomeTitle>
          {data?.title[0]}
          <WelcomeTitleColored> {data?.title[1]}</WelcomeTitleColored>
        </WelcomeTitle>
        <WelcomeText>{data?.titleDescription}</WelcomeText>
      </Styled.WelcomeContainer>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={data?.images[0].fields.file.url} />
          <Hours>{data?.time[0]}</Hours>
        </TimeDepartment>

        <TitleContent>{data?.titleContent[0]}</TitleContent>
        <TextContent>{data?.descriptionContent[0]}</TextContent>
      </ContentDepartment>

      <ContentDepartment>
        <TimeDepartment>
          <Number src={data?.images[1].fields.file.url} />
          <Hours>{data?.time[1]}</Hours>
        </TimeDepartment>

        <TitleContent>{data?.titleContent[1]}</TitleContent>
        <TextContent>{data?.descriptionContent[1]}</TextContent>
      </ContentDepartment>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={data?.images[2].fields.file.url} />
          <Hours>{data?.time[2]}</Hours>
        </TimeDepartment>

        <TitleContent>{data?.titleContent[2]}</TitleContent>
        <TextContent>{data?.descriptionContent[2]}</TextContent>
      </ContentDepartment>
      <ContentDepartment>
        <TimeDepartment>
          <Number src={data?.images[3].fields.file.url} />
          <Hours>{data?.time[3]}</Hours>
        </TimeDepartment>

        <TitleContent>{data?.titleContent[3]}</TitleContent>
        <TextContent>{data?.descriptionContent[3]}</TextContent>
      </ContentDepartment>
      <Styled.DescriptionContainer>
        <Styled.VectorRow>
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons src={VectorIcon} />
          <Styled.VectorIcons />
        </Styled.VectorRow>
        <Styled.DescriptionText>
          {data?.titleDescription}
        </Styled.DescriptionText>
      </Styled.DescriptionContainer>
    </Wrapper>
  );
};

export default TrophiesMobile;
