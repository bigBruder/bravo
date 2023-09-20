import styled from "styled-components";
import BackgroundImage from "./../../assets/icons/image 8.svg";
export const Wrapper = styled.div`
  display: flex;

  /* background-image: url("${BackgroundImage}");
  background-size: 550px;
  background-repeat: no-repeat;
  background-position: bottom 0px right 0px; */
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;

  width: 100%;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;
export const MainContent = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;
  flex: 1 0 0;
`;
