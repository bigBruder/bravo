import * as Styled from "./Workflow.styles";
import Description from "../../components/Description/Description";
import ArrowIcons from "../../assets/icons/workflow-arrow.png";

interface IWorkflowContent {}

const WorkflowContent: React.FunctionComponent<IWorkflowContent> = () => {
  const parentBackgroundColor = "black";
  const descriptionText =
    "First, jewelers create sketches and select suitable materials, then jewelry making begins, which includes operations such as casting, machining and polishing, gemstone inlay and final finishing.";
  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>
        {" "}
        We Make it <Styled.WhiteText>Extremely Easy</Styled.WhiteText>
      </Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        Please understand this is based on average results. Real time depends on
        complexity of jobs
      </Styled.DescriptionText>
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            1<Styled.Number>1</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Submit Job</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            2<Styled.Number>2</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Receive EST & Approve it</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            3<Styled.Number>3</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Receive CAD & Approve it</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            4<Styled.Number>4</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Receive Your Item</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>

      <img src={ArrowIcons} style={{ width: "75%", marginBottom: "4%" }} />

      <Description
        descriptionText={descriptionText}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};

export default WorkflowContent;