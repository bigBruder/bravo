import { useEffect, useState } from "react";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import * as Styled from "./Trophies.styles";
import TrophiesContent from "./TrophiesContent";
import TrophiesMobile from "../../components/TrophiesMobile/TrophiesMobile.tsx";
import { maxMobileSize } from "../../constants.ts";
import { useMobileWidth } from "../../hooks/useMobileWidth.tsx";
export interface TrophiesPageProps extends AnimatedPageProps {}

const Trophies: React.FunctionComponent<TrophiesPageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);
  const isMobile = useMobileWidth(maxMobileSize);
  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <>
      {" "}
      {isMobile ? (
        <TrophiesMobile />
      ) : (
        <>
          <Styled.Wrapper>
            <Styled.Container>
              {/* <Styled.MainContent> */}
              <div
                data-animation
                data-animation-active={permanentAnimationState}
              >
                <TrophiesContent />
              </div>
              {/* </Styled.MainContent> */}
            </Styled.Container>
          </Styled.Wrapper>
        </>
      )}
    </>
  );
};
export default Trophies;
