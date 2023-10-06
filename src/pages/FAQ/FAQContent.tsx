import * as Styled from "./FAQ.styles";
import OctagonIcon from "./../../assets/icons/FAQ/octagon.svg";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer.tsx";
import ItsFree from "../../assets/icons/FAQ/It’s_Free.svg";

interface IWorkflowContent {}

const FaqContent: React.FunctionComponent<IWorkflowContent> = () => {
  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>FAQ</Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        Here you will find answers to the most popular questions
      </Styled.DescriptionText>
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Account</Styled.ContentHeader>
          <QuestionAnswer
            question={
              'To create an account, click on the "Sign Up" or "Create Account" button on our website\'s homepage. Follow the prompts to provide your information and create a secure account.'
            }
            summary={"How do I create an account?"}
          />
          <QuestionAnswer
            question={
              'Your account provides the tools to view invoices, submit service requests, track orders, and communicate effortlessly with our team.'
            }
            summary={"What does my account offer?"}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Payment</Styled.ContentHeader>
          <QuestionAnswer
            question={
              'At the moment, we accept payment via check, wire transfer, or Zelle for your convenience.'
            }
            summary={"What payment methods do you accept?"}
          />
          <QuestionAnswer
            question={
              'Billing timelines may vary based on your account terms. However, typically, you will receive your invoice after the item is shipped or picked up, allowing you 30 days to make the payment. Please refer to your account terms for specific billing details.'
            }
            summary={"When will I be billed for my jewelry service?"}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Orders</Styled.ContentHeader>
          <QuestionAnswer
            question={
              'Log in to your account and click on the "add project" button. Fill out the necessary details about your project and submit it through our user-friendly portal.'
            }
            summary={'How do I submit a jewelry service request?'}
          />
          <QuestionAnswer
            question={
              'After submitting a service request, you can track its progress in real-time by logging into your account. Click on the "workflow" tab to view updates.'
            }
            summary={'How can I track the progress of my order?'}
          />
          <QuestionAnswer
            question={
              'Changes may be possible depending on the stage of production. To request changes to your order, simply use the job chat feature in your account..'
            }
            summary={'Can I make changes to my order after submission?'}
          />
        </Styled.ContentDepartment>
        <Styled.RegistrationField>
          <Styled.RgistrationLeftContainer>
            <Styled.RegistrationText>
              Stop Wasting <Styled.YellowText>Your Time</Styled.YellowText>
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
            <Styled.RegistrationButton>
              {" "}
              <img src={OctagonIcon} style={{ color: "black" }} />
              Register Now
            </Styled.RegistrationButton>
            <img src={ItsFree} style={{ height: 18 }} />
          </Styled.RgistrationRightContainer>
        </Styled.RegistrationField>
        <Styled.RegistrationButtonSmall>
          {" "}
          <img src={OctagonIcon} style={{ color: "black" }} />
          Start Your Journey
        </Styled.RegistrationButtonSmall>
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};

export default FaqContent;
