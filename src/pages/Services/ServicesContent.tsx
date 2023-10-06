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
        <Styled.DescriptionHeader>Services</Styled.DescriptionHeader>
        <Styled.DescriptionText>
          Choose the service you {`\n`} are interested in
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Card />
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};
export default ServiceContent;
