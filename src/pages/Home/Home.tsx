import * as Styled from "./home.styles";
import videoBg from "./../../assets/video/home_background.mp4";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Header />
        <Navbar />
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Home;
