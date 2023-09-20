import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import * as Styled from "./ContactPage.styles";

export interface ContactPagePageProps {}

const ContactPage: React.FunctionComponent<ContactPagePageProps> = () => {
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
export default ContactPage;
