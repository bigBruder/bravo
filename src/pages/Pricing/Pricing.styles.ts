import styled from "styled-components";
import BackgroundImage from "./../../assets/icons/image 8.svg";
import BackgroundImage2 from "../../assets/images/TeamsBackground.svg";

export const Wrapper = styled.div`
  display: flex;
  
  @media (min-width: 768px) {
    background-image: url("${BackgroundImage}");
    background-size: 550px;
    background-repeat: no-repeat;
    background-position: bottom 0px right 0px;
  }
`;
export const InnerWrapper = styled.div`
  display: flex;

  background-image: url("${BackgroundImage2}");
  background-size: 550px;
  background-repeat: no-repeat;
`;
export const Container = styled.div`
  flex-direction: column;
  align-items: center;

  width: 100%;
  /* padding: 30px 70px; */
  @media (min-width: 1101px) {
    padding: 30px 70px 0px 0px;
  }
`;
export const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
`;
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* width: 300px;
  height: 300px; */
`;

export const RightArrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: black;
`;
