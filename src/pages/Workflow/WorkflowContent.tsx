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
  const { data } = useContentful(WorkflowContentId);
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
            {data?.numbersBackground[0]}
            <Styled.Number>{data?.numbers[0]}</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>{data?.numbersTitles[0]}</Styled.Header>
          <Styled.Text>{data?.contentDescription[0]}</Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            {data?.numbersBackground[1]}
            <Styled.Number>{data?.numbers[1]}</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>{data?.numbersTitles[1]}</Styled.Header>
          <Styled.Text>{data?.contentDescription[1]}</Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            {data?.numbersBackground[2]}
            <Styled.Number>{data?.numbers[2]}</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>{data?.numbersTitles[2]}</Styled.Header>
          <Styled.Text>{data?.contentDescription[2]}</Styled.Text>
        </Styled.ContentDepartment>
        <Styled.Image src={MobileIcon} />
        <Styled.ContentDepartment>
          <Styled.NumberBackground>
            {data?.numbersBackground[3]}
            <Styled.Number>{data?.numbers[3]}</Styled.Number>
          </Styled.NumberBackground>
          <Styled.Header>{data?.numbersTitles[3]}</Styled.Header>
          <Styled.Text>{data?.contentDescription[3]}</Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ArrowIcons src={ArrowIcons} />
        <Styled.LightArrowIcons src={ArrowIconsLight} />
      </Styled.ContentPage>
      {/* <Styled.ArrowIcons src={ArrowIcons} /> */}

      {/* <img src={ArrowIcons} style={{ width: "75%", marginBottom: "4%" }} /> */}

      <Description
        descriptionText={data?.titleDescription}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};

export default WorkflowContent;
