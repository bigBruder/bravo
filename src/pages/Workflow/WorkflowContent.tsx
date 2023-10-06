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
          With our innovative portal and app, we've redefined the process of submission, tracking, and communication. Join us, and experience the future of seamless jewelry service.
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            1<Styled.Number>1</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Request Service</Styled.Header>
          <Styled.Text>
            Kickstart your journey by submitting your jewelry service request. Our user-friendly portal ensures a seamless start.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            2<Styled.Number>2</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Estimate and Approval</Styled.Header>
          <Styled.Text>
            We'll promptly provide you with an estimate. Once you're satisfied, give the green light to proceed.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            3<Styled.Number>3</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>CAD Design and Approval</Styled.Header>
          <Styled.Text>
            Receive CAD & Approve it: Visualize your design with our detailed CAD mockup. Approve it, and we'll initiate production
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            4<Styled.Number>4</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Receive Your jewelry</Styled.Header>
          <Styled.Text>
            Once production is complete, the jewelry piece undergoes meticulous inspection and is then prepared for swift delivery, making its way to your store.
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>
      <Styled.ArrowIcons src={ArrowIcons} />

      {/* <img src={ArrowIcons} style={{ width: "75%", marginBottom: "4%" }} /> */}

      <Description
        descriptionText={
          'Stop the constant back-and-forth emails, phone calls, and uncertainty about your job\'s progress. It\'s time for a change. Join us and experience a streamlined process that puts you in control of your jewelry orders.'
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};

export default WorkflowContent;
