import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import * as Styled from "./Team.styles";

export interface TeamPageProps {}

const Team: React.FunctionComponent<TeamPageProps> = () => {
  return (
    <Styled.Wrapper>
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
export default Team;
