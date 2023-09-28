import PortalContent from "./PortalContent";
import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./portal.styles";

export interface PortalPageProps {}

const Portal: React.FunctionComponent<PortalPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        {/* <Styled.MainContent> */}
        <PortalContent />
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Portal;
