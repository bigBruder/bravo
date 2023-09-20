import * as Styled from "./home.styles";
import videoBg from "./../../assets/video/home_background.mp4";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeContent from "./HomeContent";

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />

          <HomeContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Home;
