import * as Styled from "./FAQ.styles";
import Plus from "./../../assets/icons/FAQ/plus.svg";
import OctagonIcon from "./../../assets/icons/FAQ/octagon.svg";

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
          <Styled.ContentDescription>
            <img src={Plus} />
            Forgot my password, what should I do?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            How do I register?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            What are the benefits of having a Bravo Creation account?
          </Styled.ContentDescription>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Payment</Styled.ContentHeader>
          <Styled.ContentDescription>
            <img src={Plus} />
            When will I be charged?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            Is it safe to purchase items on vivaia.com?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            What payment methods can I use with my order?
          </Styled.ContentDescription>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.ContentHeader>Orders</Styled.ContentHeader>
          <Styled.ContentDescription>
            <img src={Plus} />I forgot my password, what should I do?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            Can I cancel or change my order?
          </Styled.ContentDescription>
          <Styled.ContentDescription>
            <img src={Plus} />
            How do I track my order?
          </Styled.ContentDescription>
        </Styled.ContentDepartment>
        <Styled.RegistrationField>
          <Styled.RegistrationText>
            Stop Wasting You Time
          </Styled.RegistrationText>
          <Styled.RegistrationButton>
            {" "}
            <img src={OctagonIcon} style={{ color: "black" }} />
            Register Right Now
          </Styled.RegistrationButton>
        </Styled.RegistrationField>
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};

export default FaqContent;
