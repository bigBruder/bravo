import * as Styled from "./ContactPage.styles";
import Button from "../../assets/icons/Contact/button.svg";
import Contacts from "../../assets/icons/Contact/Frame 813325.png";
interface IContactContent {}
const ContactContent: React.FunctionComponent<IContactContent> = () => {
  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>Contact Us</Styled.DescriptionHeader>
      <Styled.DescriptionContent>
        <img src={Contacts} />
      </Styled.DescriptionContent>
      <Styled.Form>
        <Styled.InputHeader>Still have questions?</Styled.InputHeader>
        <Styled.InputName>
          <Styled.InputNameText>Name</Styled.InputNameText>
        </Styled.InputName>
        <Styled.InputName>
          <Styled.InputNameText>Email</Styled.InputNameText>
        </Styled.InputName>
        <Styled.InputNameField>
          <Styled.InputNameText>Your Question</Styled.InputNameText>
        </Styled.InputNameField>
        <Styled.InputButton>
          <img src={Button} />
          Send Message
        </Styled.InputButton>
      </Styled.Form>
    </Styled.ContentWrapper>
  );
};

export default ContactContent;
