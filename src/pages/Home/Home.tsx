import * as Styled from "./home.styles";
import videoBg from "./../../assets/video/home_background.mp4";
import React from "react";

import HomeContent from "./HomeContent";

// import "animate.css/animate.min.css";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Styled.MainContent>
          <HomeContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Home;
