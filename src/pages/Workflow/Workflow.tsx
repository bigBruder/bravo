//@ts-nocheck
import { useEffect, useState } from "react";
// import videoBg from "./../../assets/video/home_background.mp4";
import WorkflowContent from "./WorkflowContent";
import * as Styled from "./Workflow.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import { maxMobileSize } from "../../constants";
import WorkflowMobile from "../../components/WorkflowMobile/WorkflowMobile.tsx";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { BackgroundImageWorkflow } from "../../constants";
import useContentful from "../../hooks/useContentful.ts";
export interface WorkflowPageProps extends AnimatedPageProps {}

const Workflow: React.FunctionComponent<WorkflowPageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);
  const { data } = useContentful(BackgroundImageWorkflow);
  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  const isMobile = useMobileWidth(maxMobileSize);
  return (
    <>
      {isMobile ? (
        <WorkflowMobile />
      ) : (
        <Styled.Wrapper backgroundImage={data?.image.fields.file.url}>
          {/* <video src={videoBg} autoPlay loop muted /> */}
          <Styled.Container>
            {/* <Styled.MainContent> */}
            <div data-animation data-animation-active={permanentAnimationState}>
              <WorkflowContent />
            </div>
            {/* </Styled.MainContent> */}
          </Styled.Container>
        </Styled.Wrapper>
      )}
    </>
  );
};
export default Workflow;
