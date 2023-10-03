import { useEffect, useState } from "react";
import PortalContent from "./PortalContent";
// import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./portal.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

export interface PortalPageProps extends AnimatedPageProps {}

const Portal: React.FunctionComponent<PortalPageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);

  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <Styled.Wrapper>
      {/* <div style={{ height: "100%" }}> */}
      {/* <video src={videoBg} autoPlay loop muted /> */}
      {/* </div> */}
      <Styled.Container>
        {/* <Styled.MainContent
          data-animation
          data-animation-active={permanentAnimationState}
        > */}
        {/* <div data-animation data-animation-active={permanentAnimationState}> */}
        <PortalContent
          data-animation
          data-animation-active={permanentAnimationState}
        />
        {/* </div> */}
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Portal;
