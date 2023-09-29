import * as Styled from "./Trophies.styles";
import TrophiesContent from "./TrophiesContent";

export interface TrophiesPageProps {}

const Trophies: React.FunctionComponent<TrophiesPageProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Styled.MainContent> */}
        <TrophiesContent />
        {/* </Styled.MainContent> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Trophies;
