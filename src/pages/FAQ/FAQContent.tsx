//@ts-nocheck
import * as Styled from "./FAQ.styles";
import OctagonIcon from "./../../assets/icons/FAQ/octagon.svg";
import OctagonIconLight from "./../../assets/icons/FAQ/octagon-light.svg";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer.tsx";
import ItsFree from "../../assets/icons/FAQ/It’s_Free.svg";
import useContentful from "../../hooks/useContentful";
import { FAQContentId } from "../../constants";

interface IWorkflowContent {}

const FaqContent: React.FunctionComponent<IWorkflowContent> = () => {
  const { data } = useContentful(FAQContentId);

  if (data) {
    console.log("dataFAQ", data);
  }

  return (
    <Styled.ContentWrapper>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > */}
      <Styled.DescriptionHeader>{data?.title}</Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        {data?.titleText}
      </Styled.DescriptionText>
      {/* </div> */}
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>{data?.titleContent[0]}</Styled.ContentHeader>
          <QuestionAnswer
            question={data?.contentAnswear[0]}
            summary={data?.content[0]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[1]}
            summary={data?.content[1]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[2]}
            summary={data?.content[2]}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>{data?.titleContent[1]}</Styled.ContentHeader>
          <QuestionAnswer
            question={data?.contentAnswear[3]}
            summary={data?.content[3]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[4]}
            summary={data?.content[4]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[5]}
            summary={data?.content[5]}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>{data?.titleContent[2]}</Styled.ContentHeader>
          <QuestionAnswer
            question={data?.contentAnswear[6]}
            summary={data?.content[6]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[7]}
            summary={data?.content[7]}
          />
          <QuestionAnswer
            question={data?.contentAnswear[8]}
            summary={data?.content[8]}
          />
        </Styled.ContentDepartment>
        <Styled.RegistrationField>
          <Styled.RgistrationLeftContainer>
            <Styled.RegistrationText>
              {data?.registrationFiel[0]}{" "}
              <Styled.YellowText>
                {" "}
                {data?.registrationFiel[1]}
              </Styled.YellowText>
            </Styled.RegistrationText>
            <Styled.RegistrationDescription>
              {data?.registrationFiel[2]}
            </Styled.RegistrationDescription>
          </Styled.RgistrationLeftContainer>
          <hr
            style={{ height: "100%", borderColor: "rgba(255, 255, 255, 0.10)" }}
          />
          <Styled.RgistrationRightContainer>
            <Styled.RegistrationButton
              onClick={() => open("https://my.bravocreations.com/registration")}
            >
              {" "}
              <Styled.OctagonIconDark
                src={OctagonIcon}
                style={{ color: "black" }}
              />
              <Styled.OctagonIconLight
                src={OctagonIconLight}
                style={{ color: "black" }}
              />
              {data?.registrationFiel[3]}
            </Styled.RegistrationButton>
            <img src={data?.itsFree.fields.file.url} style={{ height: 18 }} />
          </Styled.RgistrationRightContainer>
        </Styled.RegistrationField>
        <Styled.RegistrationButtonSmall>
          {" "}
          <Styled.OctagonIconDark
            src={OctagonIcon}
            style={{ color: "black" }}
          />
          Start Your Journey
        </Styled.RegistrationButtonSmall>
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};

export default FaqContent;
