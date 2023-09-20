import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceContent from "./ServicesContent";
import * as Styled from "./Services.styles";
import BackgroundImage from "./../../assets/icons/service-background.svg";

export interface ServicesPageProps {}

const Services: React.FunctionComponent<ServicesPageProps> = () => {
  return (
    <Styled.Container>
      {/* <img src={BackgroundImage} /> */}
      <Header />
      <Styled.MainContent>
        <Navbar />

        <ServiceContent />
      </Styled.MainContent>
      <Footer />
    </Styled.Container>
  );
};
export default Services;
