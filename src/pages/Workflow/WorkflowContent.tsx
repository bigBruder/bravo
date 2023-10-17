
//@ts-nocheck
import * as Styled from "./Workflow.styles";
import Description from "../../components/Description/Description";
import ArrowIcons from "../../assets/icons/workflow-arrow.png";
import MobileIcon from "../../assets/images/Workflow/MobileWorkflowIcon.png";
import ArrowIconsLight from "../../assets/icons/workflow-icons-light.png";
import { WorkflowContentId } from "../../constants";
import useContentful from "../../hooks/useContentful";
interface IWorkflowContent {}

const WorkflowContent: React.FunctionComponent<IWorkflowContent> = () => {
  const parentBackgroundColor = "black";
  const { data} = useContentful(WorkflowContentId);
  return (
    <Styled.ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Styled.DescriptionHeader>
          {" "}
          <Styled.WhiteText>{data?.title}</Styled.WhiteText> {data?.titleYellow}
        </Styled.DescriptionHeader>
        <Styled.DescriptionText lang="en">
        {data?.titleDescription}
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            1<Styled.Number>1</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Request Service</Styled.Header>
          <Styled.Text>
            Kickstart your journey by submitting your jewelry service request.
            Our user-friendly portal ensures a seamless start.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            2<Styled.Number>2</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Estimate and Approval</Styled.Header>
          <Styled.Text>
            We'll promptly provide you with an estimate. Once you're satisfied,
            give the green light to proceed.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            3<Styled.Number>3</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>CAD Design and Approval</Styled.Header>
          <Styled.Text>
            Receive CAD & Approve it: Visualize your design with our detailed
            CAD mockup. Approve it, and we'll initiate production
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            4<Styled.Number>4</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>Receive Your jewelry</Styled.Header>
          <Styled.Text>
            Once production is complete, the jewelry piece undergoes meticulous
            inspection and is then prepared for swift delivery, making its way
            to your store.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ArrowIcons src={ArrowIcons} />
        <Styled.LightArrowIcons src={ArrowIconsLight} />
      </Styled.ContentPage>
      {/* <Styled.ArrowIcons src={ArrowIcons} /> */}

      {/* <img src={ArrowIcons} style={{ width: "75%", marginBottom: "4%" }} /> */}

      <Description
        descriptionText={
          data?.titleDescription
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};

export default WorkflowContent;
