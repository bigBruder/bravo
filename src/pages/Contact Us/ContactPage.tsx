//@ts-nocheck
import ContactContent from "./ContactContent";
import * as Styled from "./ContactPage.styles";
// import Photo1 from "../../assets/icons/Contact/image 28.png";
// import Pointer from "../../assets/icons/Contact/pointer.svg";
import PhoneIcon from "../../assets/icons/Contact/phone.png";
import EmailIcon from "../../assets/icons/Contact/email.png";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import { useEffect, useState } from "react";
import { ContactUsId } from "../../constants";
import useContentful from "../../hooks/useContentful";
export interface ContactPagePageProps extends AnimatedPageProps {}

const FooterDot = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
    >
      <path
        d="M4 2C4 1.60444 3.8827 1.21776 3.66294 0.88886C3.44318 0.559961 3.13081 0.303617 2.76536 0.152242C2.3999 0.000866498 1.99777 -0.0387401 1.60981 0.0384304C1.22185 0.115601 0.865489 0.306082 0.585784 0.585787C0.306079 0.865492 0.11559 1.22186 0.0384192 1.60982C-0.0387511 1.99778 0.000859499 2.39992 0.152235 2.76537C0.30361 3.13082 0.559961 3.44318 0.888859 3.66294C1.21776 3.8827 1.60444 4 2 4C2.53043 4 3.03914 3.78929 3.41421 3.41421C3.78929 3.03914 4 2.53043 4 2Z"
        fill="white"
        fill-opacity="0.1"
      />
    </svg>
  );
};

const ContactPage: React.FunctionComponent<ContactPagePageProps> = ({
  animationActive,
}) => {
  const [permanentAnimationState, setPermanentAnimationState] = useState(false);
  const { data } = useContentful(ContactUsId);
  useEffect(() => {
    if (animationActive) {
      setPermanentAnimationState(true);
    }
  }, [animationActive]);
  return (
    <Styled.Wrapper className={permanentAnimationState ? "set_point" : ""}>
      <Styled.Container>
        <Styled.MainContent>
          <Styled.ScreenHeader>
            <Styled.DescriptionHeader>{data?.title}</Styled.DescriptionHeader>
            <Styled.DescriptionContacts>
              <Styled.Contact>
                <Styled.ContactIcon src={EmailIcon} />
                <Styled.ContactText href={`mailto:${data?.titleDescription}`}>
                  {data?.titleDescription}
                </Styled.ContactText>
              </Styled.Contact>
              <Styled.Contact>
                <Styled.ContactIconPhone src={PhoneIcon} />
                <Styled.ContactText href={`tel:${data?.phone}`}>{data?.phone}</Styled.ContactText>
              </Styled.Contact>
            </Styled.DescriptionContacts>
          </Styled.ScreenHeader>
          <Styled.DescriptionContacts></Styled.DescriptionContacts>
          <ContactContent
            image={data?.registerImage}
            title={data?.registerTitle}
            description={data?.registerDescription}
            button={data?.registerButton}
            adress={data?.adress}
          />
        </Styled.MainContent>
        <Styled.FooterWrapper>
          <Styled.FooterContent>
            <Styled.FooterLeftContent>
              <Styled.FooterText>© Bravo Creations 2023</Styled.FooterText>
              <Styled.FooterDotsWrapper>
                <FooterDot />
                <FooterDot />
              </Styled.FooterDotsWrapper>
            </Styled.FooterLeftContent>
            <Styled.FooterSeparator />
            <Styled.FooterDotsWrapper>
              <FooterDot />
              <FooterDot />
            </Styled.FooterDotsWrapper>
            <Styled.FooterSeparator />
            <Styled.FooterRightContent>
              <Styled.FooterLink target="_blank" rel="noopener noreferrer" href={'https://bravocrm.itcarrot.com/terms'}>Terms & Conditions</Styled.FooterLink>
              <Styled.FooterDotsWrapper>
                <FooterDot />
                <FooterDot />
              </Styled.FooterDotsWrapper>
              <Styled.FooterLink target="_blank" rel="noopener noreferrer" href={'https://bravocrm.itcarrot.com/privacy'}>Privacy Notice</Styled.FooterLink>
            </Styled.FooterRightContent>
          </Styled.FooterContent>
        </Styled.FooterWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default ContactPage;
