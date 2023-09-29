import { ourServicesArray } from "../../constants";
import { OurServiceMap } from "../mapComponents/OurServiceMap";
import * as Styled from "./OurServices.styles";
import betweenLine from "../../assets/icons/between_line.svg";

export const OurServices = () => {
  return (
    <Styled.Services>
      <Styled.Title>
        Our Services
      </Styled.Title>
      <Styled.SectionDiscription>
        Please understand this is based on
        average results. Real time depends
        on complexity of jobs
      </Styled.SectionDiscription>
      <Styled.Section>
        <Styled.Article>
          {ourServicesArray.map((service, index) => (
            <OurServiceMap service={service} index={index} key={service.title} />
          ))}
        </Styled.Article>
      </Styled.Section>
      <Styled.Section>
        <Styled.ExtraSection>
          <Styled.ExtraTitle>
            Not Sure? <Styled.ExtraTitleColor>Ask Us!</Styled.ExtraTitleColor>
          </Styled.ExtraTitle>
          <Styled.Icon src={betweenLine} />
          <Styled.ExtraDisc>
            We offer Rush or date specific
            <br/>
            service to get your order done at the
            <br/>
            time you need it.
          </Styled.ExtraDisc>
        </Styled.ExtraSection>
      </Styled.Section>
    </Styled.Services>
  )
}
