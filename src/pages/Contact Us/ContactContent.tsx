//@ts-nocheck
import * as Styled from "./ContactPage.styles";
// import Button from "../../assets/icons/Contact/button.svg";
// import Photo1 from "../../assets/images/Contact Us/image 28.png";
import MobilePhoto from "../../assets/images/Contact Us/image 28.png";
import Form from "../../components/Form/Form";
import Line from "../../assets/icons/Contact/line.png";
// import MobileLine from "../../assets/icons/Contact/mobile-line.png";
import Octagon from "../../assets/icons/Contact/user-octagon.svg";
interface IContactContent {
  image: string;
  title: object;
  description: string;
  button: string;
  adress: string;
  smallScreenImage: string;
}
export const ContactContent: React.FC<IContactContent> = ({
  image,
  title,
  description,
  button,
  adress,
  smallScreenImage,
}) => {
  console.log(
    image,
    title,
    description,
    button,
    adress,
    smallScreenImage,
    "contactMobile"
  );
  return (
    <Styled.ContentWrapper>
      {/* <img src={Pointer} /> */}
      <Styled.AdressContainer>
        <Styled.Adress>
          <Styled.HousePhoto src={image?.fields.file.url} />
          <Styled.HousePhotoMobile src={smallScreenImage?.fields.file.url} />
          <Styled.AdressInfo>
            <Styled.AdressHeader>
              {title && title.length > 0 && (
                <>
                  {title[0]} <Styled.WhiteText> {title[1]}</Styled.WhiteText>
                </>
              )}
            </Styled.AdressHeader>
            <Styled.AdressDescription>{description}</Styled.AdressDescription>
            <Styled.AdressButton
              onClick={() => open("https://my.bravocreations.com/registration")}
            >
              <Styled.ButtonOctagon src={Octagon} />
              {button}
            </Styled.AdressButton>
          </Styled.AdressInfo>
        </Styled.Adress>
        <Styled.Line src={Line} />
        <Styled.AdressText>{adress}</Styled.AdressText>
      </Styled.AdressContainer>
      <Styled.LineMobile />
      <Form />
      <Styled.LineForMobile />
      <Styled.ContentFooter>
        <Styled.YellowTextFooter>Terms & Conditions</Styled.YellowTextFooter>
        <Styled.YellowTextFooter>Privacy Notice</Styled.YellowTextFooter>
        <Styled.WhiteTextFooter>© Bravo Creations 2023</Styled.WhiteTextFooter>
      </Styled.ContentFooter>
    </Styled.ContentWrapper>
  );
};

export default ContactContent;
