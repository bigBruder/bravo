import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./Trophies.styles";

export interface TrophiesPageProps {}

const Trophies: React.FunctionComponent<TrophiesPageProps> = () => {
  return (
    <Styled.Wrapper>
      {/* <video src={videoBg} autoPlay loop muted /> */}
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
export default Trophies;
