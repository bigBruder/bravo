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
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"Forgot my password, what should I do?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"How do I register?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={
              "What are the benefits of having a Bravo Creation account?"
            }
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Payment</Styled.ContentHeader>
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"When will I be charged?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"Is it safe to purchase items on vivaia.com?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"What payment methods can I use with my order?"}
          />
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Orders</Styled.ContentHeader>
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"I forgot my password, what should I do?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"Can I cancel or change my order?"}
          />
          <QuestionAnswer
            question={
              "Navigate to the ‘Account’ page and click ‘Create Account.’ Then, fill in your Name\n" +
              "and Email as required."
            }
            summary={"How do I track my order?"}
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
          <Styled.RgistrationLeftContainer>
            <Styled.RegistrationButton>
              {" "}
              <img src={OctagonIcon} style={{ color: "black" }} />
              Register Now
            </Styled.RegistrationButton>
            <img src={ItsFree} style={{ height: 18 }} />
          </Styled.RgistrationLeftContainer>
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
