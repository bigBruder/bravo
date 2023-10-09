import * as Styled from "./FAQ.styles";
import OctagonIcon from "./../../assets/icons/FAQ/octagon.svg";
import QuestionAnswer from "../../components/QuestionAnswer/QuestionAnswer.tsx";
import ItsFree from "../../assets/icons/FAQ/It’s_Free.svg";
import { useState } from "react";

interface IWorkflowContent { }

const questionAnswers = {
  account: {
    title: "Account",
    questions: [
      {
        question: 'To create an account, click on the "Sign Up" or "Create Account" button on our website\'s homepage. Follow the prompts to provide your information and create a secure account.',
        summary: "How do I create an account?"
      },
      {
        question: 'Your account provides the tools to view invoices, submit service requests, track orders, and communicate effortlessly with our team.',
        summary: "What does my account offer?"
      },
    ]
  },
  payment: {
    title: "Payment",
    questions: [

      {
        question: 'At the moment, we accept payment via check, wire transfer, or Zelle for your convenience.',
        summary: "What payment methods do you accept?"
      },
      {
        question: 'Billing timelines may vary based on your account terms. However, typically, you will receive your invoice after the item is shipped or picked up, allowing you 30 days to make the payment. Please refer to your account terms for specific billing details.',
        summary: "When will I be billed for my jewelry service?"
      },
    ]
  },
  orders: {
    title: "Orders",
    questions: [

      {
        question: 'Log in to your account and click on the "add project" button. Fill out the necessary details about your project and submit it through our user-friendly portal.',
        summary: "How do I submit a jewelry service request?"
      },
      {
        question: 'After submitting a service request, you can track its progress in real-time by logging into your account. Click on the "workflow" tab to view updates.',
        summary: "How can I track the progress of my order?"
      },
      {
        question: 'Changes may be possible depending on the stage of production. To request changes to your order, simply use the job chat feature in your account..',
        summary: "Can I make changes to my order after submission?"
      },
    ]
  }
}

const FaqContent: React.FunctionComponent<IWorkflowContent> = () => {
  const [questionOpened, setQuestionOpened] = useState<string>();
  return (
    <Styled.ContentWrapper>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      > */}
      <Styled.DescriptionHeader>FAQ</Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        Here you will find answers to the most popular questions
      </Styled.DescriptionText>
      {/* </div> */}
      <Styled.ContentPage>
        {Object.values(questionAnswers).map(x => (
          <Styled.ContentDepartment key={x.title}>
            <Styled.ContentHeader>{x.title}</Styled.ContentHeader>
            {x.questions.map(question => (
              <QuestionAnswer
                key={question.summary}
                open={questionOpened === question.summary}
                onClick={() => {
                  if (questionOpened === question.summary) {
                    setQuestionOpened(undefined)
                  } else {
                    setQuestionOpened(question.summary)
                  }
                }}
                question={question.question}
                summary={question.summary}
              />
            ))}
          </Styled.ContentDepartment>
        ))}
        <Styled.RegistrationField>
          <Styled.RgistrationLeftContainer>
            <Styled.RegistrationText>
              Maximize Your Business <Styled.YellowText>Potential with Us</Styled.YellowText>
            </Styled.RegistrationText>
            <Styled.RegistrationDescription>
              Seize the Opportunity to Elevate Your Business Needs with Our Exceptional Services. Sign Up for Free and Experience the Difference Today!
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
