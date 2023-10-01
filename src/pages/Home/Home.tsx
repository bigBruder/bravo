import { useEffect, useState } from "react";
import * as Styled from "./home.styles";
import videoBg from "./../../assets/video/home_background.mp4";
import React from "react";

import HomeContent from "./HomeContent";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

// import "animate.css/animate.min.css";

export interface IHomePageProps extends AnimatedPageProps {}

const Home: React.FunctionComponent<IHomePageProps> = ({
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
      <Styled.Container >
        <Styled.MainContent data-animation data-animation-active={permanentAnimationState}>
          <HomeContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Home;
