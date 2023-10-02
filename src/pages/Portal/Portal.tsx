import { useEffect, useState } from "react";
import PortalContent from "./PortalContent";
import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./portal.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

export interface PortalPageProps extends AnimatedPageProps { }

const Portal: React.FunctionComponent<PortalPageProps> = ({
  animationActive
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);

  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        {/* <Styled.MainContent> */}
        <div data-animation data-animation-active={permanentAnimationState}>
          <PortalContent />
        </div>
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Portal;
