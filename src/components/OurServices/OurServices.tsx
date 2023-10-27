//@ts-nocheck
import { OurServiceMap } from "../mapComponents/OurServiceMap";
import * as Styled from "./OurServices.styles";
import betweenLine from "../../assets/icons/between_line.svg";
import { ServiceMobileId } from "../../constants";
import useContentful from "../../hooks/useContentful";

export const OurServices = () => {
  const { data } = useContentful(ServiceMobileId);
  return (
    <Styled.Services>
      <Styled.Title>{data?.title}</Styled.Title>
      <Styled.SectionDiscription>{data?.description}</Styled.SectionDiscription>
      <Styled.Section>
        <Styled.Article>
          {data?.card.map((service, index) => (
            <OurServiceMap
              service={service}
              index={index}
              key={service.title}
            />
          ))}
        </Styled.Article>
      </Styled.Section>
      <Styled.Section>
        <Styled.ExtraSection>
          <Styled.ExtraTitle>
            {data?.quotesTitle[0]}{" "}
            <Styled.ExtraTitleColor>
              {data?.quotesTitle[1]}
            </Styled.ExtraTitleColor>
          </Styled.ExtraTitle>
          <Styled.Icon src={betweenLine} />
          <Styled.ExtraDisc>{data?.quotesDesc}</Styled.ExtraDisc>
        </Styled.ExtraSection>
      </Styled.Section>
    </Styled.Services>
  );
};
