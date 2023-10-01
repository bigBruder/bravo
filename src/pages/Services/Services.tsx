import { useEffect, useState } from "react";
import ServiceContent from "./ServicesContent";
import * as Styled from "./Services.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

export interface ServicesPageProps extends AnimatedPageProps {}

const Services: React.FunctionComponent<ServicesPageProps> = ({
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

          <ServiceContent />
        </Styled.MainContent>
        {/* <Footer /> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Services;
