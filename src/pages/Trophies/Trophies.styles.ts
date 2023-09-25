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
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;

export const MainContent = styled.div`
  display: flex;
  align-items: space-between;
  gap: 15px;
  flex: 1 0 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 150px 70px 30px 150px;
  /* margin-left: 100px; */
  /* flex-grow: 0.8; */
`;
// export const Description = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: start;
//   align-items: start;
//   width: 10%;
// `;
export const DescriptionHeader = styled.text`
  color: #164d59;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 42px;
  font-style: normal;
  font-weight: 650;

  @media (max-width: 1600px) {
    font-size: 33px;
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
  width: 30%;
  padding-top: 1%;
  @media (max-width: 1600px) {
    font-size: 35px;
    font-size: 16px;
  }
`;

export const ContentPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 4% 15%;
`;

export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
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
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  padding-top: 2%;

  @media (max-width: 1600px) {
    font-size: 14px;
  }
`;
