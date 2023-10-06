import * as Styled from "./Services.styles";
import Card from "./Card";

interface IServiceContent {}

const ServiceContent: React.FunctionComponent<IServiceContent> = () => {
  return (
    <Styled.ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Styled.DescriptionHeader>Our Services</Styled.DescriptionHeader>
        <Styled.DescriptionText>
          Discover the full spectrum of our services at Bravo Creations<br/>
          and experience the essence of jewelry craftsmanship
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Card />
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};
export default ServiceContent;
