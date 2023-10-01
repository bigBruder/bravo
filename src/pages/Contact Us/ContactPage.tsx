import ContactContent from "./ContactContent";
import * as Styled from "./ContactPage.styles";
import Photo1 from "../../assets/icons/Contact/image 28.png";
import Pointer from "../../assets/icons/Contact/pointer.svg";
import { AnimatedPageProps } from "../../components/AnimatedRoutes/AnimatedRoutes";
import { useEffect, useState } from "react";

export interface ContactPagePageProps extends AnimatedPageProps{}

const ContactPage: React.FunctionComponent<ContactPagePageProps> = ({
  animationActive
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
        <Styled.MainContent data-animation data-animation-active={permanentAnimationState}>
          <Styled.AdressContainer>
            <img src={Pointer} />
            <Styled.Adress>
              <Styled.AdressHeader>
                Give<Styled.WhiteText>us a try!</Styled.WhiteText>
              </Styled.AdressHeader>
              <img src={Photo1} />
              <Styled.AdressText>
                6353 El Camino Real,
                <br /> Carlsbad, CA 92009USA
              </Styled.AdressText>
            </Styled.Adress>
          </Styled.AdressContainer>
          <ContactContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default ContactPage;
