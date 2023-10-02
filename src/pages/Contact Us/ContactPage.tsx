import ContactContent from "./ContactContent";
import * as Styled from "./ContactPage.styles";
// import Photo1 from "../../assets/icons/Contact/image 28.png";
// import Pointer from "../../assets/icons/Contact/pointer.svg";
import PhoneIcon from "../../assets/icons/Contact/phone.png";
import EmailIcon from "../../assets/icons/Contact/email.png";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import { useEffect, useState } from "react";

export interface ContactPagePageProps extends AnimatedPageProps {}

const ContactPage: React.FunctionComponent<ContactPagePageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);

  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.MainContent
          data-animation
          data-animation-active={permanentAnimationState}
        >
          <Styled.ScreenHeader>
            <Styled.DescriptionHeader>Contact Us</Styled.DescriptionHeader>
            <Styled.DescriptionContacts>
              <Styled.Contact>
                <Styled.ContactIcon src={EmailIcon} />
                <Styled.ContactText>help@bravocreations.com</Styled.ContactText>
              </Styled.Contact>
              <Styled.Contact>
                <Styled.ContactIconPhone src={PhoneIcon} />
                <Styled.ContactText>(760) 491-9977</Styled.ContactText>
              </Styled.Contact>
            </Styled.DescriptionContacts>
          </Styled.ScreenHeader>
          <Styled.DescriptionContacts></Styled.DescriptionContacts>
          <ContactContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default ContactPage;
