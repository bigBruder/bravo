import { useEffect, useState } from "react";
import ServiceContent from "./ServicesContent";
import * as Styled from "./Services.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

import { maxMobileSize } from "../../constants";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { OurServices } from "../../components/OurServices/OurServices";

export interface ServicesPageProps extends AnimatedPageProps {}

const Services: React.FunctionComponent<ServicesPageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);

  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);

  const isMobileServices = useMobileWidth(maxMobileSize);

  return isMobileServices ? (
    <OurServices />
  ) : (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Header /> */}
        <Styled.MainContent
          data-animation
          data-animation-active={permanentAnimationState}
        >
          {/* <Navbar /> */}
          <ServiceContent />
        </Styled.MainContent>
        {/* <Footer /> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Services;
