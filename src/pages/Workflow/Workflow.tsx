import { useEffect, useState } from "react";
import videoBg from "./../../assets/video/home_background.mp4";
import WorkflowContent from "./WorkflowContent";
import * as Styled from "./Workflow.styles";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";

export interface WorkflowPageProps extends AnimatedPageProps{}

const Workflow: React.FunctionComponent<WorkflowPageProps> = ({
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
      <Styled.Container>
        <Styled.MainContent data-animation data-animation-active={permanentAnimationState}>
          <WorkflowContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Workflow;
