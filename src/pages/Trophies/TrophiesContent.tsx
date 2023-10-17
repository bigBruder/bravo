//@ts-nocheck
import * as Styled from "./Trophies.styles";
import Description from "../../components/Description/Description";
// import oneTopImage from "./../../assets/images/1.png";
// import oneBottomImage from "./../../assets/images/1.1.png";
// import fourTopImage from "./../../assets/images/4.png";
// import fourBottomImage from "./../../assets/images/4.1.png";
// import twoTopImage from "./../../assets/images/2.png";
// import twoBottomImage from "./../../assets/images/2.2.png";
// import sixTopImage from "./../../assets/images/6.png";
// import sixBottomImage from "./../../assets/images/6.6.png";

// import FirstIconLight from "../../assets/icons/Trophies/FirstLightIcon.png";
// import SecondIconLight from "../../assets/icons/Trophies/SecondLightIcon.png";
// import ThirdIconLight from "../../assets/icons/Trophies/ThirdIconLight.png";
// import FourthIconLight from "../../assets/icons/Trophies/FourthIconLight.png";
// import FirstIconDark from "../../assets/icons/Trophies/FirstDarkIcon.png";
// import SecondIconDark from "../../assets/icons/Trophies/SecondDarkIcon.png";
// import ThirdIconDark from "../../assets/icons/Trophies/ThirdIconDark.png";
// import FourthIconDark from "../../assets/icons/Trophies/FourthIconDark.png";
import useContentful from "../../hooks/useContentful";
import { TrophiesContentId } from "../../constants.ts";
interface ITrophiesContent {}

const TrophiesContent: React.FunctionComponent<ITrophiesContent> = () => {
  const parentBackgroundColor = "black";
  const { data, error } = useContentful(TrophiesContentId);
  console.log("data",data)
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
          {data?.title} <Styled.WhiteText>{data?.titleYellow }</Styled.WhiteText>
        </Styled.DescriptionHeader>
        <Styled.DescriptionText lang="en">
        {data?.titleDescription}
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
            <Styled.OneIconLight src={data?.iconMultiple[0].fields.file.url}></Styled.OneIconLight>
            <Styled.OneIconDark src={data?.iconMultiple[1].fields.file.url}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>{data?.hours}</Styled.Hours>
          <Styled.Header>{data?.titleIcon[0]}</Styled.Header>
          <Styled.Text>
            {data?.textIcon[0]}
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={data?.iconMultiple[3].fields.file.url}></Styled.OneIconLight>
            <Styled.OneIconDark src={data?.iconMultiple[2].fields.file.url}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>{data?.hours}</Styled.Hours>

          <Styled.Header>{data?.titleIcon[1]}</Styled.Header>
          <Styled.Text>
          {data?.textIcon[0]}
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={data?.iconMultiple[4].fields.file.url}></Styled.OneIconLight>
            <Styled.OneIconDark src={data?.iconMultiple[5].fields.file.url}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>{data?.hours}</Styled.Hours>

          <Styled.Header>{data?.titleIcon[2]}</Styled.Header>
          <Styled.Text>
          {data?.textIcon[0]}
          </Styled.Text>
        </Styled.ContentDepartment>
        <Styled.ContentDepartment>
          <Styled.Number>
            <Styled.OneIconLight src={data?.iconMultiple[6].fields.file.url}></Styled.OneIconLight>
            <Styled.OneIconDark src={data?.iconMultiple[7].fields.file.url}></Styled.OneIconDark>
          </Styled.Number>
          <Styled.Hours>{data?.hours}</Styled.Hours>
          <Styled.Header>{data?.titleIcon[3]}</Styled.Header>
          <Styled.Text>
          {data?.textIcon[0]}
          </Styled.Text>
        </Styled.ContentDepartment>
      </Styled.ContentPage>
      <Description
        descriptionText={
          data?.quoteText
        }
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.ContentWrapper>
  );
};
export default TrophiesContent;
