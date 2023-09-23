import styled from "styled-components";
import BackgroundImage from "./../../assets/icons/image 8.svg";
export const Wrapper = styled.div`
  display: flex;

  background-image: url("${BackgroundImage}");
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: bottom 0px right 0px;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;
export const MainContent = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;
  flex: 1 0 0;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-left: 150px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
export const DescriptionHeader = styled.text`
  color: #164d59;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 50px;
  font-style: normal;
  font-weight: 650;
  line-height: 66px;
`;
export const DescriptionText = styled.text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: #9799ac;
  text-align: center;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

export const ContentPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
