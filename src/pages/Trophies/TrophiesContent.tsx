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

import FirstIconLight from "../../assets/icons/Trophies/FirstLightIcon.png";
import SecondIconLight from "../../assets/icons/Trophies/SecondLightIcon.png";
import ThirdIconLight from "../../assets/icons/Trophies/ThirdIconLight.png";
import FourthIconLight from "../../assets/icons/Trophies/FourthIconLight.png";
import FirstIconDark from "../../assets/icons/Trophies/FirstDarkIcon.png";
import SecondIconDark from "../../assets/icons/Trophies/SecondDarkIcon.png";
import ThirdIconDark from "../../assets/icons/Trophies/ThirdIconDark.png";
import FourthIconDark from "../../assets/icons/Trophies/FourthIconDark.png";
interface ITrophiesContent {}

const TrophiesContent: React.FunctionComponent<ITrophiesContent> = () => {
  const parentBackgroundColor = "black";

  return (
    <Styled.ContentWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Styled.DescriptionHeader>
          Our <Styled.WhiteText>Trophies</Styled.WhiteText>
        </Styled.DescriptionHeader>
        <Styled.DescriptionText lang="en">
          Unlocking Speed and Precision: Please note, our turnaround times are
          based on averages and may vary depending on job complexity.
        </Styled.DescriptionText>
      </div>
      <Styled.ContentPage>
        <Styled.ContentDepartment>
          {/* <Styled.Number>
            <Styled.HalfNumberTop>
              <img src={oneTopImage} />
            </Styled.HalfNumberTop>
            <Styled.HalfNumberBottom>
              {" "}
              <img src={oneBottomImage} />
            </Styled.HalfNumberBottom>
          </Styled.Number> */}

          <Styled.Number>
            <Styled.OneIconLight src={FirstIconLight}></Styled.OneIconLight>
            <Styled.OneIconDark src={FirstIconDark}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>hours</Styled.Hours>
          <Styled.Header>Message Response Time</Styled.Header>
          <Styled.Text>
            RWe offer Rush or date specific service to get your order done at
            the time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={SecondIconLight}></Styled.OneIconLight>
            <Styled.OneIconDark src={SecondIconDark}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>hours</Styled.Hours>

          <Styled.Header>EST Prod. Time</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={ThirdIconLight}></Styled.OneIconLight>
            <Styled.OneIconDark src={ThirdIconDark}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>hours</Styled.Hours>

          <Styled.Header>CAD Prod. Time</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={FourthIconLight}></Styled.OneIconLight>
            <Styled.OneIconDark src={FourthIconDark}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>hours</Styled.Hours>
          <Styled.Header>Prod. Time after approval</Styled.Header>
          <Styled.Text>
            We offer Rush or date specific service to get your order done at the
            time you need it.
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>
      <Description
        descriptionText={
          "We offer Rush or date specific service to get \n" +
          "your order done at the time you need it."
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};
export default TrophiesContent;
