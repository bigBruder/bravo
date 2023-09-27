import ServiceContent from "./ServicesContent";
import * as Styled from "./Services.styles";

export interface ServicesPageProps {}

const Services: React.FunctionComponent<ServicesPageProps> = () => {
  return (
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
  );
};
export default Services;
