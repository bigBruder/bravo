import { useEffect, useState } from "react";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import * as Styled from "./Trophies.styles";
import TrophiesContent from "./TrophiesContent";

export interface TrophiesPageProps extends AnimatedPageProps { }

const Trophies: React.FunctionComponent<TrophiesPageProps> = ({
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
      <Styled.Container>
        {/* <Styled.MainContent> */}
        <div data-animation data-animation-active={permanentAnimationState}>
          <TrophiesContent />
        </div>
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Trophies;
