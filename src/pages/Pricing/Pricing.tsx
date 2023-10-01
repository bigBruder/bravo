import { useEffect, useState } from "react";
import PricingContent from "./PricingContent";
import * as Styled from "./Pricing.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

export interface PricingPageProps extends AnimatedPageProps{}

const Pricing: React.FunctionComponent<PricingPageProps> = ({
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
          <PricingContent />
        </Styled.MainContent>
        {/* <Footer /> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Pricing;
