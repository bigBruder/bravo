import { useEffect, useState } from "react";
import ReviewsContent from "./ReviewsContent.tsx";
import * as Styled from "./Reviews.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes.tsx";

export interface ReviewsPageProps extends AnimatedPageProps{}

const Reviews: React.FunctionComponent<ReviewsPageProps> = ({
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
        {/* <Header /> */}
        <Styled.MainContent data-animation data-animation-active={permanentAnimationState}>
          {/* <Navbar /> */}
          <ReviewsContent />
        </Styled.MainContent>
        {/* <Footer /> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Reviews;
