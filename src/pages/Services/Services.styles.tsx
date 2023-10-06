import styled from "styled-components";
import BackgroundImage from "./../../assets/icons/image 8.svg";

/**
 * Breakpoints list
 * 1. 1440px
 * 2. 1100px
 * 3. 768px
 * 4. 425px
 * 5. 375px
 */

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

  @media screen and (max-width: 1100px) {
    padding: 0;
  }
  @media (min-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const MainContent = styled.div`
  display: flex;
  align-items: start;
  /* justify-content: center; */

  gap: 15px;
  flex: 1 0 0;
  background-color: rgba(255, 255, 255, 0.6);
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media (min-width: 1500px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 50px 70px 30px 200px;
  margin-left: 100px;
  @media (min-width: 1500px) {
    justify-content: space-between;
    height: 80vh;
    padding: 0px 70px 30px 100px;
    margin-left: 50px;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    padding: 75px 0;
    text-align: center;
    margin-left: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
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
