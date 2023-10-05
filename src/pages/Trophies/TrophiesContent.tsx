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
  const parentBackgroundColor = "black";

  return (
    <Styled.ContentWrapper>
      <Styled.DescriptionHeader>Our Trophies</Styled.DescriptionHeader>
      <Styled.DescriptionText lang="en">
        Unlocking Speed and Precision: Please note, our turnaround times are based on averages and may vary depending on job complexity.
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
            Rapid Response: Timely and Professional Communication, Always at Your Service.
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
            We strive to provide you with quick and accurate estimates, ensuring you have the information you need promptly for your jewelry decisions."
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
            Our CAD production is swift, bringing your designs to life in no time.
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
            With all approvals in place, we swiftly craft your jewelry to perfection, delivering quality without delay.
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>
      <Description
        descriptionText={
          "We offer Rush or date specific service to get " +
          "\n" +
          "your order done at the time you need it."
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};
export default TrophiesContent;
