import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #111;

  video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  /* background-color: black; */
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  /* opacity: 70%; */
  /* padding: 30px 70px; */
  padding: 10px 20px 0px 0px;

  @media (min-width: 768px) {
    padding: 30px 20px 0px 0px;
  }
  @media (min-width: 1101px) {
    padding: 0 0 30px 40px;
  }
  @media (min-width: 1601px) {
    padding: 0 0 10px 70px;
  }
  /* @media (max-width: 1100px) {
    height: 100%;
  } */
  //
`;

export const MainContent = styled.div``;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* padding: 0 6vw; */
  /* padding: 0 0 10px 20px; */
  padding: 0 0 10px 20px;
  /* flex-grow: 0.8; */

  @media (min-width: 768px) {
    /* padding: 0 0 30px 20px; */
  }
  @media (min-width: 1101px) {
    margin-left: 100px;
    padding: 50px 0 0px 0px;
    /* margin-left: 100px;
    padding: 0 0 30px 70px; */
  }
  @media (min-width: 1500px) {
    margin-left: -80px;
    padding: 180px 0 0px 0px;
    justify-content: space-between;
    /* gap: 15px; */
    /* flex: 1; */
    /* margin-left: 100px;
    padding: 0 0 30px 150px; */
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
    font-size: 31px;
  }
`;

export const DescriptionText = styled.text`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  width: 70%;
  padding-top: 1%;
  @media (min-width: 768px) {
    width: 40%;
  }
  @media (max-width: 1600px) {
    font-size: 16px;
  }
`;
export const ContentPage = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  padding: 2% 5% 2% 5%;
  gap: 10px;
  @media (min-width: 1500px) {
    margin-left: 300px;
    margin-top: 10vh;
  }
  @media (min-width: 768px) {
    grid-template-columns: 40% 60%;
  }
`;

export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1vh;
  margin-bottom: 3vh;
`;

export const ContentHeader = styled.div`
  color: #cda870;
  width: 100%;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 3vh;
  font-style: normal;
  font-weight: 650;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  color: #fff;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  gap: 10px;
  @media (max-width: 1600px) {
    font-size: 14px;
    font-weight: 400;
  }
  /* img {
    width: 10%;
  } */
`;

export const RegistrationField = styled.div`
  display: none;
  padding: 30px 30px;
  max-width: 585px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex: 0.6 0 0;

  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const RegistrationText = styled.div`
  color: #fff;
  text-align: start;
  font-family: Gwen-Trial;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;
  margin-bottom: 20px;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
`;

export const YellowText = styled.text`
  color: #cda870;
`;

export const RegistrationButton = styled.button`
  display: flex;
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 20px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  @media (max-width: 1600px) {
    font-size: 16px;
    padding: 10px 24px;
  }
`;

export const RegistrationButtonSmall = styled.button`
  display: flex;
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const RgistrationLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 347px;
  overflow: hidden;
`;

export const RgistrationRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RegistrationDescription = styled.text`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */

  max-height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
