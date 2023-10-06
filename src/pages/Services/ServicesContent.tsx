import * as Styled from "./Services.styles";
import Card from "./Card";

interface IServiceContent {}

const ServiceContent: React.FunctionComponent<IServiceContent> = () => {
  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>Our Services</Styled.DescriptionHeader>
      <Styled.DescriptionText>
        Discover the full spectrum of our services at Bravo Creations<br/>
        and experience the essence of jewelry craftsmanship
      </Styled.DescriptionText>

      <Styled.ContentPage>
        <Card />
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};
export default ServiceContent;
