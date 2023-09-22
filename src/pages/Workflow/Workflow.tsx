import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import videoBg from "./../../assets/video/home_background.mp4";
import WorkflowContent from "./WorkflowContent";
import * as Styled from "./Workflow.styles";

export interface WorkflowPageProps {}

const Workflow: React.FunctionComponent<WorkflowPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
          <WorkflowContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Workflow;
