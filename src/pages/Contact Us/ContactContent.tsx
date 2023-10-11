import * as Styled from "./ContactPage.styles";
// import Button from "../../assets/icons/Contact/button.svg";
import Photo1 from "../../assets/images/Contact Us/image 28.png";
import MobilePhoto from "../../assets/images/Contact Us/image 28.png";
import Form from "../../components/Form/Form";
import Line from "../../assets/icons/Contact/line.png";
// import MobileLine from "../../assets/icons/Contact/mobile-line.png";
import Octagon from "../../assets/icons/Contact/user-octagon.svg";
interface IContactContent {}
export const ContactContent: React.FC<IContactContent> = () => {
  return (
    <Styled.ContentWrapper>
      {/* <img src={Pointer} /> */}
      <Styled.AdressContainer>
        <Styled.Adress>
          <Styled.HousePhoto src={Photo1} />
          <Styled.HousePhotoMobile src={MobilePhoto} />
          <Styled.AdressInfo>
            <Styled.AdressHeader>
              Give <Styled.WhiteText> us a try!</Styled.WhiteText>
            </Styled.AdressHeader>
            <Styled.AdressDescription>
              Experience the Difference with Bravo Creations. Elevate Your
              Business Service Needs with Exceptional Customer Service and
              Outstanding Craftsmanship.
            </Styled.AdressDescription>
            <Styled.AdressButton>
              <Styled.ButtonOctagon src={Octagon} />
              Register Now
            </Styled.AdressButton>
          </Styled.AdressInfo>
        </Styled.Adress>
        <Styled.Line src={Line} />
        <Styled.AdressText>
          6353 El Camino Real, Carlsbad, CA 92009USA
        </Styled.AdressText>
      </Styled.AdressContainer>
      <Styled.LineMobile />
      <Form />
    </Styled.ContentWrapper>
  );
};

export default ContactContent;
