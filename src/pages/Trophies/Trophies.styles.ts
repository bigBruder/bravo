import styled from "styled-components";
import BackgroundImage from "./../../assets/images/Services.png";

export const Wrapper = styled.div`
  display: flex;
  background-image: url("${BackgroundImage}");
  background-size: cover;

  background-repeat: no-repeat;
  background-position: bottom 0px right 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /* padding: 30px 70px 0px 0px; */
  ////!!!!!
  /* background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.75) 100%
  ); */
  background-color: var(--trophies-background-color);
  @media (min-width: 1300px) {
    /* padding-bottom: 100px; */
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  /* height: 10vh; */
  padding: 30px 70px 30px 80px;
  /* gap: 5%; */
  @media (min-width: 1500px) {
    gap: 5vh;
    padding: 180px 40px 30px 40px;
  }
  @media (max-width: 1600px) {
    padding: 30px 40px 30px 80px;
  }
  @media (max-width: 1300px) {
    padding: 0px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const DescriptionHeader = styled.text`
  color: var(--trophies-headerText);
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

export const WhiteText = styled.text`
  color: var(--trophies-headerHalfText);
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
  gap: 3vw;

  /* padding: 100px 10%; */
  /* padding: 100px 10% 80px 10%; */
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    /* padding: 10px 15%; */
    padding: 20px 15%;
    gap: 3px;
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
export const Number = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding-bottom: 10px;
`;
export const HalfNumberTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 50px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  background: rgba(255, 255, 255, 0.05);
  /* img {
    width: 30%;
  } */
`;
export const HalfNumberBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 50px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 0px 0px 10px 10px;
  background: rgba(255, 255, 255, 0.05);
`;
export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--trophies-hourContent);
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 18px;
  @media (max-width: 1600px) {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Header = styled.div`
  color: var(--trophies-headerContent);
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding-top: 3%;
  padding-bottom: 9px;
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

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;

export const OneIconLight = styled.img`
  width: 45%;
  display: var(--trophies-displayIconsLight);
`;
export const OneIconDark = styled.img`
  width: 45%;
  display: var(--trophies-displayIconsDark);
`;
