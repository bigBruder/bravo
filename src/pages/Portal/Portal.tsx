//@ts-nocheck
import { useEffect, useState } from "react";
import PortalContent from "./PortalContent"; // import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./portal.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import { maxMobileSize } from "../../constants";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import PortalMobile from "../../components/PortalMobile/PortalMobile.tsx";
import { BackgroundImage } from "../../constants";
import useContentful from "../../hooks/useContentful.ts";
export interface PortalPageProps extends AnimatedPageProps {}

const Portal: React.FunctionComponent<PortalPageProps> = ({
  animationActive,
}) => {
  const { data } = useContentful(BackgroundImage);
  console.log(data);
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
        <PortalMobile />
      ) : (
        <>
          <Styled.Wrapper backgroundImage={data?.image.fields.file.url}>
            <Styled.Container>
              <PortalContent
                data-animation
                data-animation-active={permanentAnimationState}
              />
            </Styled.Container>
          </Styled.Wrapper>
        </>
      )}
    </>
  );
};
export default Portal;
