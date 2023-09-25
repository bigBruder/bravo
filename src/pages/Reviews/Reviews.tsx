import ReviewsContent from "./ReviewsContent.tsx";
import * as Styled from "./Reviews.styles";

export interface ReviewsPageProps {}

const Reviews: React.FunctionComponent<ReviewsPageProps> = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        {/* <Header /> */}
        <Styled.MainContent>
          {/* <Navbar /> */}
          <ReviewsContent />
        </Styled.MainContent>
        {/* <Footer /> */}
      </Styled.Container>
    </Styled.Wrapper>
  );
};
export default Reviews;
