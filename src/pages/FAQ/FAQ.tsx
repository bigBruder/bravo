import videoBg from "./../../assets/video/home_background.mp4";
import * as Styled from "./FAQ.styles";
import FAQContent from "./FAQContent";

export interface FAQPageProps {}

const FAQ: React.FunctionComponent<FAQPageProps> = () => {
  return (
    <Styled.Wrapper>
      <video src={videoBg} autoPlay loop muted />
      <Styled.Container>
        <Styled.MainContent>
          <FAQContent />
        </Styled.MainContent>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default FAQ;
