import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* background-color: #111; */

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
  background: var(--faq-background);
  /* opacity: 70%; */
  /* padding: 30px 70px; */
  /* padding: 10px 20px 0px 0px; */

  @media (min-width: 768px) {
    padding: 30px 20px 0px 0px;
  }
  @media (min-width: 1101px) {
    padding: 0 0 30px 0;
  }
  @media (min-width: 1601px) {
    padding: 0 0 10px 70px;
  }
  @media (max-width: 480px) {
    padding: 60px 20px 40px 20px;
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
  width: 100%;
  height: 100%;
  /* padding: 0 6vw; */
  /* padding: 0 0 10px 20px; */
  padding: 0 0 10px 20px;
  /* flex-grow: 0.8; */

  @media (min-width: 768px) {
    /* padding: 0 0 30px 20px; */
  }
  @media (min-width: 1101px) {
    /* margin-left: 100px; */
    padding: 50px 0 0px 0px;
    /* margin-left: 100px;
    padding: 0 0 30px 70px; */
  }
  @media (min-width: 1500px) and (min-height: 800px) {
    margin-left: 0;
    /* margin-left: -80px; */
    padding: 165px 0 0px 0px;
  }
  @media (min-width: 1600px) and (min-height: 800px) {
    margin-left: -40px;
    /* margin-left: -80px; */
    padding: 165px 0 0px 0px;
  }

  @media (min-width: 1700px) {
    margin-left: -40px;
    padding: 165px 0 0px 0px;
    justify-content: space-between;
    /* gap: 15px; */
    /* flex: 1; */
    /* margin-left: 100px;
    padding: 0 0 30px 150px; */
  }
  @media (max-width: 480px) {
    padding: 0px 0px 0px 0px;
    justify-content: center;
    align-items: center;
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
    font-size: 31px;
  }
  @media (max-width: 480px) {
    color: #fff;

    text-align: center;
    font-family: Gwen-Trial;
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
    padding-bottom: 10px;
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
    padding-top: 0%;
  }
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    color: #9799ac;

    text-align: center;
    font-family: Quicksand;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  /* @media (max-width: 480px) {
    width: 100%;
  } */
`;
export const ContentPage = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 100%;
  /* padding: 2% 5% 2% 5%; */

  gap: 10px;
  height: 100%;
  margin-left: 175px;
  margin-top: 7vh;
  margin-bottom: 100px;
  @media (max-width: 1600px) {
    margin-top: 5vh;
  }
  @media (max-width: 1500px) {
    margin-left: -10px;
    margin-bottom: 0px;
  }
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 100%;
    gap: 40px;
    margin: 0px;
    margin-top: 40px;
  }
  @media (min-width: 1500px) {
    grid-template-columns: 40% 50%;
    margin-left: 100px;
  }
`;

export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3vh;
  margin-bottom: 3vh;
  @media (max-width: 1600px) {
    gap: 1vh;
  }
  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 0px;
  }
  /* @media (max-width: 480px) {
    width: 100%;
  } */
`;

export const ContentHeader = styled.div`
  color: #cda870;
  width: 100%;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;

  @media (min-width: 768px) {
    text-align: left;
  }
  @media (max-width: 480px) {
    color: #cda870;

    text-align: center;
    font-family: Gwen-Trial;
    font-size: 18px;
    font-style: normal;
    font-weight: 650;
    line-height: 26px;
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  color: var(--faq-textContent);
  font-family: Quicksand;
  font-size: 18px;
  /* z-index: 100000; */
  font-style: normal;
  font-weight: 500;
  gap: 10px;
  @media (max-width: 1600px) {
    font-size: 14px;
    font-weight: 400;
  }

  /* @media (max-width: 480px) {
    width: 100%;
  } */
  /* img {
    width: 10%;
  } */
`;

export const RegistrationField = styled.div`
  display: none;
  padding: 30px;
  max-width: 585px;
  max-height: 225px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex: 0.6 0 0;

  border-radius: 15px;
  background: var(--faq-backgroundField);
  backdrop-filter: blur(12.5px);
  gap: 20px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const RegistrationText = styled.div`
  color: var(--faq-textDescription);
  text-align: start;
  font-family: Gwen-Trial;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
    font-size: 18px;
  }
`;

export const YellowText = styled.text`
  color: #cda870;
`;

export const RegistrationButton = styled.button`
  display: flex;
  padding: 13px 24px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: var(--faq-buttonText);
  font-family: Quicksand, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 20px;
  min-width: 185px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }

  @media (max-width: 1400px) {
    /* font-size: 16px; */
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
  @media (max-width: 480px) {
    display: flex;
    padding: 16px 36px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  }
`;

export const RgistrationLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
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

export const OctagonIconLight = styled.img`
  display: var(--faq-buttonOctagonLight);
`;
export const OctagonIconDark = styled.img`
  display: var(--faq-buttonOctagonDark);
`;
