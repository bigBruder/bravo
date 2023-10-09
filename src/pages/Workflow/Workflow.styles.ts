import styled from "styled-components";
import BackgroundImage from "./../../assets/images/Services.png";
export const Wrapper = styled.div`
  display: flex;
  background-color: #111;
  //
  background-image: url("${BackgroundImage}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom 0px right 0px;
  /* video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  height: 100vh;
  /* background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 100%
  ); */
  background-color: rgba(0, 0, 0, 0.7);
  @media (min-width: 1300px) {
    padding-bottom: 100px;
  }
  @media (max-width: 1300px) {
    padding: 10px 0px 0px 0px;
  }
  /* @media (max-width: 864px) {
    height: 100%;
  } */
  @media (max-width: 768px)  or (max-height: 768px)  {
    padding: 60px 0px 40px 0px;
    height: 100%;
  }
  @media (max-width: 656px) {
    /* padding: 60px 0px 40px 0px; */
    height: 100%;
  }
  /* padding: 30px 70px; */
  /* padding: 30px 70px 0px 0px; */
`;

// export const MainContent = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   flex: 1 0 0;
//   align-self: stretch;
// `;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-around;
  /* flex-grow: 0.8; */
  padding: 180px 70px 30px 150px;
  @media (min-width: 1600px) {
    justify-content: space-between;
    gap: 5vh;
    padding: 150px 40px 30px 120px;
  }
  @media (max-width: 1600px) {
    padding: 100px 40px 30px 120px;
  }
  @media (max-width: 1300px) {
    padding: 20px 0 0 0;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const DescriptionHeader = styled.text`
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 42px;
  font-style: normal;
  font-weight: 650;

  @media (max-width: 1600px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
`;
export const WhiteText = styled.span`
  color: white;
`;
export const DescriptionText = styled.text`
  display: flex;
  flex-direction: column;
  hyphens: auto;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: #9799ac;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  width: 425px;
  @media (max-width: 1600px) {
    font-size: 35px;
    font-size: 16px;
    width: 375px;
  }
  @media (max-width: 480px) {
    font-size: 35px;
    font-size: 16px;
    max-width: 242px;
  }
`;
export const ContentPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  padding: 100px 10% 40px 10%;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    padding: 20px 15%;
  }
  @media (max-width: 480px) {
    padding: 10px 10% 50px 10%;
  }
`;
export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
  width: 270px;
  @media (max-width: 1600px) {
    width: 230px;
  }
  @media (max-width: 768px) {
    width: 210px;
  }
  @media (max-width: 480px) {
    padding-top: 40px;
  }
`;

export const NumberBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: rgba(205, 168, 112, 0.05);
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 120px;
  font-style: normal;
  font-weight: 650;
  line-height: 46px;
  @media (max-width: 1600px) {
    font-size: 100px;
  }
`;
export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 27%;
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 54px;
  font-style: normal;
  font-weight: 650;
  line-height: 46px;
  @media (max-width: 1600px) {
    font-size: 47px;
  }
`;
export const Header = styled.div`
  color: #fff;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding-top: 3%;

  @media (max-width: 1600px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
export const Text = styled.div`
  color: #9799ac;
  text-align: center;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  padding-top: 2%;
  width: 90%;

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  @media (min-width: 481px) {
    display: none;
  }
  width: 10px;
  margin: 40px 100px 0;
`;
export const ArrowIcons = styled.img`
  @media (max-width: 480px) {
    display: none;
  }
  width: 75%;
  margin-top: 1%;
  @media (min-width: 1301) {
    margin-bottom: 10%;
  }
`;
