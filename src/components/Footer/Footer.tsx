import * as Styled from "./footer.styles";
// import HorizontalVector from "../../assets/icons/horizontal-vector.svg";
// import VerticalVector from "../../assets/icons/vertical-vector.svg";
// import LeftArch from "../../assets/icons/left-arch.svg";
// import RightArch from "../../assets/icons/right-arch.svg";
import Icon from "../../assets/icons/Footer/Icon.png";

const Footer = () => {
  return (
    <Styled.Wrapper>
      {/* <Styled.SearchVector>
        <img src={Search} />
      </Styled.SearchVector> */}

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "2px",
        }}
      >
        <img src={LeftArch} />

        <img src={VerticalVector} />

        <img src={VerticalVector} />

        <img src={HorizontalVector} style={{ width: "100%" }} />
      </div>

      <Styled.CenterIcon></Styled.CenterIcon>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "2px",
        }}
      >
        <img src={HorizontalVector} style={{ width: "100%" }} />

        <img src={VerticalVector} />

        <img src={VerticalVector} />

        <img src={RightArch} />
      </div> */}
      {/*       
      <Styled.SearchVector>
        <img src={SearchIcon} />
      </Styled.SearchVector> */}
      <img src={Icon} />
    </Styled.Wrapper>
  );
};
export default Footer;
