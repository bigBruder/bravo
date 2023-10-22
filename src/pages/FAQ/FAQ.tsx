//@ts-nocheck
import { useEffect, useState } from "react";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
// import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./FAQ.styles";
import FAQContent from "./FAQContent";
import { BackgroundImageFAQ } from "../../constants";
import useContentful from "../../hooks/useContentful.ts";
export interface FAQPageProps extends AnimatedPageProps {}

const FAQ: React.FunctionComponent<FAQPageProps> = ({ animationActive }) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);
  const { data } = useContentful(BackgroundImageFAQ);
  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <Styled.Wrapper>
      <video src={data?.image.fields.file.url} autoPlay loop muted />
      <Styled.Container>
        <Styled.MainContent
          data-animation
          data-animation-active={permanentAnimationState}
        >
          <FAQContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default FAQ;
