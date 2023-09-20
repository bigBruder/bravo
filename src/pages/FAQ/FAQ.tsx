import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./FAQ.styles";

export interface FAQPageProps {}

const FAQ: React.FunctionComponent<FAQPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default FAQ;
