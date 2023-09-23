import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import * as Styled from "./Team.styles";
import TeamContent from "./TeamContent.tsx";

export interface TeamPageProps {}

const Team: React.FunctionComponent<TeamPageProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Header />
        <Styled.MainContent>
          <Navbar />
          <TeamContent />
        </Styled.MainContent>
        <Footer />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Team;
