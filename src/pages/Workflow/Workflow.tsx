import videoBg from "./../../assets/video/home_background.mp4";
import WorkflowContent from "./WorkflowContent";
import * as Styled from "./Workflow.styles";

export interface WorkflowPageProps {}

const Workflow: React.FunctionComponent<WorkflowPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        {/* <Styled.MainContent> */}
        <WorkflowContent />
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Workflow;
