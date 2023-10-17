//@ts-nocheck
import * as Styled from "./FAQ.styles";
import OctagonIcon from "./../../assets/icons/FAQ/octagon.svg";
import OctagonIconLight from "./../../assets/icons/FAQ/octagon-light.svg";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer.tsx";
import ItsFree from "../../assets/icons/FAQ/It’s_Free.svg";
import useContentful from "../../hooks/useContentful";
import { FAQContentId} from "../../constants";


interface IWorkflowContent {}

const FaqContent: React.FunctionComponent<IWorkflowContent> = () => {
  const { data } = useContentful(FAQContentId);
  
  if (data) {
    console.log("data", data);
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
            question={
              'To create an account, click on the "Sign Up" or "Create Account" button on our website\'s homepage. Follow the prompts to provide your information and create a secure account.'
            }
            summary={data?.content[0]}
          />
          <QuestionAnswer
            question={
              "Your account provides the tools to view invoices, submit service requests, track orders, and communicate effortlessly with our team."
            }
            summary={data?.content[1]}
          />
          <QuestionAnswer
            question={
              "Billing timelines may vary based on your account terms. However, typically, you will receive your invoice after the item is shipped or picked up, allowing you 30 days to make the payment. Please refer to your account terms for specific billing details."
            }
            summary={data?.content[2]}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>{data?.titleContent[1]}</Styled.ContentHeader>
          <QuestionAnswer
            question={
              "At the moment, we accept payment via check, wire transfer, or Zelle for your convenience."
            }
            summary={data?.content[3]}
          />
          <QuestionAnswer
            question={
              "Billing timelines may vary based on your account terms. However, typically, you will receive your invoice after the item is shipped or picked up, allowing you 30 days to make the payment. Please refer to your account terms for specific billing details."
            }
            summary={data?.content[4]}
          />
          <QuestionAnswer
            question={
              "Billing timelines may vary based on your account terms. However, typically, you will receive your invoice after the item is shipped or picked up, allowing you 30 days to make the payment. Please refer to your account terms for specific billing details."
            }
            summary={data?.content[5]}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>{data?.titleContent[2]}</Styled.ContentHeader>
          <QuestionAnswer
            question={
              'Log in to your account and click on the "add project" button. Fill out the necessary details about your project and submit it through our user-friendly portal.'
            }
            summary={data?.content[6]}
          />
          <QuestionAnswer
            question={
              'After submitting a service request, you can track its progress in real-time by logging into your account. Click on the "workflow" tab to view updates.'
            }
            summary={data?.content[7]}
          />
          <QuestionAnswer
            question={
              "Changes may be possible depending on the stage of production. To request changes to your order, simply use the job chat feature in your account.."
            }
            summary={data?.content[8]}
          />
        </Styled.ContentDepartment>
        <Styled.RegistrationField>
          <Styled.RgistrationLeftContainer>
            <Styled.RegistrationText>
              Stop Waste <Styled.YellowText> Your Time</Styled.YellowText>
            </Styled.RegistrationText>
            <Styled.RegistrationDescription>
              The jewelry designer explores different materials to create
              exclusive jewelry that highlights each client's personality and
              style.
            </Styled.RegistrationDescription>
          </Styled.RgistrationLeftContainer>
          <hr
            style={{ height: "100%", borderColor: "rgba(255, 255, 255, 0.10)" }}
          />
          <Styled.RgistrationRightContainer>
            <Styled.RegistrationButton onClick={() => open('https://my.bravocreations.com/registration')}>
              {" "}
              <Styled.OctagonIconDark
                src={OctagonIcon}
                style={{ color: "black" }}
              />
              <Styled.OctagonIconLight
                src={OctagonIconLight}
                style={{ color: "black" }}
              />
              Register Now
            </Styled.RegistrationButton>
            <img src={ItsFree} style={{ height: 18 }} />
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
