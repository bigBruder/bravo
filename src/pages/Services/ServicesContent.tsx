//@ts-nocheck
import * as Styled from "./Services.styles";
import useContentful from "../../hooks/useContentful";
import { ServiceTitle } from "../../constants";
import Card from "./Card";

interface IServiceContent {}

const ServiceContent: React.FunctionComponent<IServiceContent> = () => {
  const { data } = useContentful(ServiceTitle);
  return (
    <Styled.ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Styled.DescriptionHeader>{data?.title}</Styled.DescriptionHeader>
        <Styled.DescriptionText>
          {data?.descriptionTitle}
          <br />
          {data?.descriptionTitleHalf}
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Card />
      </Styled.ContentPage>
    </Styled.ContentWrapper>
  );
};
export default ServiceContent;
