import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import * as Styled from "./Trophies.styles";
import TrophiesContent from "./TrophiesContent";

export interface TrophiesPageProps {}

const Trophies: React.FunctionComponent<TrophiesPageProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
          <TrophiesContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Trophies;
