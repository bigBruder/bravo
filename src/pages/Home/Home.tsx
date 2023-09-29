import * as Styled from "./home.styles";
import videoBg from "./../../assets/video/home_background.mp4";
import React from "react";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { maxHeaderSize } from "../../constants";

import HomeContent from "./HomeContent";
import { HomeMobile } from "../../components/HomeMobile/HomeMobile";

// import "animate.css/animate.min.css";

export interface IHomePageProps { }

const Home: React.FunctionComponent<IHomePageProps> = () => {
  const isMobileHeader = useMobileWidth(maxHeaderSize);
  return (
    <>
      {isMobileHeader
        ? (
          <HomeMobile />
        )
        : (
          <>
            <Styled.Wrapper>
              <video src={videoBg} autoPlay loop muted />
              <Styled.Container>
                <Styled.MainContent>
                  <HomeContent />
                </Styled.MainContent>
              </Styled.Container>
            </Styled.Wrapper>
          </>
        )
      }
    </>
  );
};
export default Home;
