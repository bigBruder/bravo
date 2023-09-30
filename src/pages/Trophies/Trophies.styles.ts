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
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 30px 70px 0px 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  @media (max-width: 1300px) {
    padding: 10px 0px 0px 0px;
  }
  /* @media (max-width: 864px) {
    height: 100%;
  } */
  @media (max-width: 768px) {
    padding: 60px 0px 40px 0px;
    /* height: 100%; */
  }
  @media (max-width: 656px) {
    /* padding: 60px 0px 40px 0px; */
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 180px 70px 30px 150px;
  @media (max-width: 1600px) {
    padding: 100px 70px 30px 150px;
  }
  @media (max-width: 1300px) {
    padding: 0px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const DescriptionHeader = styled.text`
  color: #fff;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 42px;
  font-style: normal;
  font-weight: 650;

  @media (max-width: 1600px) {
    font-size: 23px;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
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

  padding: 100px 10%;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
    padding: 10px 15%;
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
  width: 290px;
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
`;
export const HalfNumberTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 40px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  background: rgba(255, 255, 255, 0.05);
`;
export const HalfNumberBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 40px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 0px 0px 10px 10px;
  background: rgba(255, 255, 255, 0.05);
`;
export const Hours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cda870;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 1600px) {
    font-size: 16px;
    font-weight: 400;
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

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;
