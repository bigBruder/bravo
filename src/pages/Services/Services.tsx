import ServiceContent from "./ServicesContent";
import * as Styled from "./Services.styles";
import { maxHeaderSize } from "../../constants";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import { OurServices } from "../../components/OurServices/OurServices";

export interface ServicesPageProps { }

const Services: React.FunctionComponent<ServicesPageProps> = () => {
  const isMobileServices = useMobileWidth(maxHeaderSize);

  return (
    isMobileServices ? (
      <OurServices />
    ) : (
      <Styled.Wrapper>
        <Styled.Container>
          {/* <Header /> */}
          <Styled.MainContent>
            {/* <Navbar /> */}
            <ServiceContent />
          </Styled.MainContent>
          {/* <Footer /> */}
        </Styled.Container>
      </Styled.Wrapper>
    )
  );
};

export default Services;

