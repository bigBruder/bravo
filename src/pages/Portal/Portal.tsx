import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PortalContent from "./PortalContent";
import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./portal.styles";

export interface PortalPageProps {}

const Portal: React.FunctionComponent<PortalPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
          <PortalContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Portal;
