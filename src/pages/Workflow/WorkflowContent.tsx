import * as Styled from "./Workflow.styles";
import Description from "../../components/Description/Description";
import ArrowIcons from "../../assets/icons/workflow-arrow.png";
import MobileIcon from "../../assets/images/Workflow/MobileWorkflowIcon.png";

interface IWorkflowContent {}

const WorkflowContent: React.FunctionComponent<IWorkflowContent> = () => {
  const parentBackgroundColor = "black";
  return (
    <Styled.ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Styled.DescriptionHeader>
          {" "}
          We Make it <Styled.WhiteText>Extremely Easy</Styled.WhiteText>
        </Styled.DescriptionHeader>
        <Styled.DescriptionText lang="en">
          Please understand this is based on average results. Real time depends
          on complexity of jobs
        </Styled.DescriptionText>
      </div>
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
        <Styled.Image src={MobileIcon} />
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
        <Styled.Image src={MobileIcon} />
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
        <Styled.Image src={MobileIcon} />
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
      <Styled.ArrowIcons src={ArrowIcons} />

      {/* <img src={ArrowIcons} style={{ width: "75%", marginBottom: "4%" }} /> */}

      <Description
        descriptionText={
          "First, jewelers create sketches and select suitable materials, then jewelry making begins, which" +
          "\n" +
          "includes operations such as casting, machining and polishing, gemstone inlay and final finishing."
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};

export default WorkflowContent;
