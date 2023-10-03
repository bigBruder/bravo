import styled from "styled-components";
import BackgroundImage from "./../../assets/images/snazzy-image3.png";
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
  @media (max-width: 768px) {
    height: 100%;
  }

  /* padding: 30px 70px; */
  /* padding: 30px 70px 0px 0px; */
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;
export const MainContent = styled.div`
  /* display: flex;
  align-items: start;
  gap: 15px;
  flex: 1 0 0; */
`;

// export const ContentWrapper = styled.div`
//   display: flex;
// `;

export const ScreenHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  @media (max-width: 1200px) {
    margin-top: 50px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: end;
  gap: 10%;
  margin-bottom: 150px;
  @media (max-width: 1200px) {
    margin-bottom: 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vh 2vw;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);

  gap: 15px;
  @media (max-width: 768px) {
    padding: 15px;
    width: 300px;
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    padding: 15px;
    width: 240px;
    margin-bottom: 40px;
  }
  /* img {
    width: 23vh;
  } */
`;

export const AdressInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  @media (max-width: 1200px) {
    align-items: center;
  }
`;
export const HousePhotoMobile = styled.img`
  width: 210px;
  height: 120px;
  @media (min-width: 1201px) {
    display: none;
  }
`;
export const HousePhoto = styled.img`
  width: 200px;
  height: 200px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Adress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 550px;
  gap: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    width: 230px;
  }
  /* img {
    width: 11%;
  } */
`;

export const AdressHeader = styled.div`
  display: flex;
  gap: 7px;
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;
  line-height: 35px;
  @media (max-width: 1200px) {
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
  }
`;
export const WhiteText = styled.div`
  color: #fff;
`;

export const AdressDescription = styled.text`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;
export const AdressButton = styled.button`
  display: flex;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  color: #cda870;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  @media (max-width: 1200px) {
    text-align: center;
    padding: 12px 34px;
    line-height: 24px;
  }
`;

export const ButtonOctagon = styled.img`
  width: 18px !important;
  height: 18px;
`;
export const AdressText = styled.div`
  color: #fff;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
`;

export const Line = styled.img`
  width: 100px;
`;

export const DescriptionHeader = styled.text`
  color: #fff;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 4vh;
  font-style: normal;
  font-weight: 650;
  @media (max-width: 768px) {
    font-size: 25px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
  }
`;

export const DescriptionContacts = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin-bottom: 30px;
    //will changed
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ContactIcon = styled.img`
  width: 12px;
  height: 12px;
`;
export const ContactIconPhone = styled.img`
  margin-left: 10px;
  width: 12px;
  height: 12px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const ContactText = styled.text`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
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

export const LineMobile = styled.div`
  display: flex;
  @media (min-width: 769px) {
    display: none;
  }
  width: 240px;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 30px;
`;
