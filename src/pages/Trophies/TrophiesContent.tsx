import * as Styled from "./Trophies.styles";
import Description from "../../components/Description/Description";
import oneTopImage from "./../../assets/images/1.png";
import oneBottomImage from "./../../assets/images/1.1.png";
import fourTopImage from "./../../assets/images/4.png";
import fourBottomImage from "./../../assets/images/4.1.png";
import twoTopImage from "./../../assets/images/2.png";
import twoBottomImage from "./../../assets/images/2.2.png";
import sixTopImage from "./../../assets/images/6.png";
import sixBottomImage from "./../../assets/images/6.6.png";
interface ITrophiesContent {}

const TrophiesContent: React.FunctionComponent<ITrophiesContent> = () => {
  const parentBackgroundColor = "white";
  const descriptionText =
    "We offer Rush or date specific service to get your order done at the time you need it.";
  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>Our Trophies</Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        Please understand this is based on average results. Real time depends on
        complexity of jobs
      </Styled.DescriptionText>

      <Styled.ContentPage>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.HalfNumberTop>
              <img src={oneTopImage} />
            </Styled.HalfNumberTop>
            <Styled.HalfNumberBottom>
              {" "}
              <img src={oneBottomImage} />
            </Styled.HalfNumberBottom>
          </Styled.Number>
          <Styled.Hours>Hours</Styled.Hours>
          <Styled.Header>Message Response Time</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.HalfNumberTop>
              <img src={fourTopImage} />
            </Styled.HalfNumberTop>
            <Styled.HalfNumberBottom>
              {" "}
              <img src={fourBottomImage} />
            </Styled.HalfNumberBottom>
          </Styled.Number>
          <Styled.Hours>Hours</Styled.Hours>

          <Styled.Header>EST Prod. Time</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.HalfNumberTop>
              <img src={twoTopImage} />
            </Styled.HalfNumberTop>
            <Styled.HalfNumberBottom>
              {" "}
              <img src={twoBottomImage} />
            </Styled.HalfNumberBottom>
          </Styled.Number>
          <Styled.Hours>Days</Styled.Hours>

          <Styled.Header>CAD Prod. Time</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.HalfNumberTop>
              <img src={sixTopImage} />
            </Styled.HalfNumberTop>
            <Styled.HalfNumberBottom>
              {" "}
              <img src={sixBottomImage} />
            </Styled.HalfNumberBottom>
          </Styled.Number>
          <Styled.Hours>Days</Styled.Hours>
          <Styled.Header>Prod. Time after approval</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>
      <Description
        descriptionText={descriptionText}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};
export default TrophiesContent;
