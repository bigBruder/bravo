import { useEffect, useState } from "react";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes.tsx";
import * as Styled from "./Team.styles";
import TeamContent from "./TeamContent.tsx";
import TeamMobile from "./../../components/TeamMobile/TeamMobile.tsx";
import { useMobileWidth } from "../../hooks/useMobileWidth.tsx";
import { maxMobileSize } from "../../constants.ts";
export interface TeamPageProps extends AnimatedPageProps {}

const Team: React.FunctionComponent<TeamPageProps> = ({ animationActive }) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);

  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);

  const isMobile = useMobileWidth(maxMobileSize);
  return (
    <>
      {isMobile ? (
        <TeamMobile />
      ) : (
        <Styled.Wrapper>
          <Styled.Container>
            {/* <Header /> */}
            <Styled.MainContent
              data-animation
              data-animation-active={permanentAnimationState}
            >
              {/* <Navbar /> */}
              <TeamContent />
            </Styled.MainContent>
            {/* <Footer /> */}
          </Styled.Container>
        </Styled.Wrapper>
      )}
    </>
  );
};
export default Team;
