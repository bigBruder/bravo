import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100vh;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
  background-color: black;
  opacity: 75%;

  @media screen and (max-width: 1100px) {
    padding: 30px 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 15px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const PortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* padding: 70px 30px 150px; */

  /* margin-left: 100px; */

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    padding: 150px 0;
    margin-left: 0;
  }

`;
export const PortalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* align-items: center; */
  height: 40%;
  margin-left: 10%;
  margin-bottom: 1.5%;
  gap: 10px 80px;
  max-width: 1300px;

  padding-left: 30px;

  @media (max-width: 1100px) {
    padding-left: 0%;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3%;
    max-width: 600px;

  }

  /* align-items:center; */
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  max-width: 260px;
  order: 2;
  @media (max-width: 1100px) {
    width: 32%;
  }
  @media (max-width: 768px) {
    width: 80%;
    max-width: 100%;
  }
`;
export const RegisterHeader = styled.text`
  color: #cda870;
  font-family: Gwen-Trial;
  font-size: 50px;
  font-style: normal;
  font-weight: 650;
  @media (max-width: 1600px) {
    font-size: 45px;
  }
  @media (max-width: 480px) {
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
    text-align: center;
  }
`;

export const WhiteText = styled.span`
  color: white;
`;

export const RegisterText = styled.text`
  color: #9799ac;
  display: flex;
  padding-left: 0px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  padding-bottom: 60px;
  @media (max-width: 1600px) {
    font-size: 16px;
    padding-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
`;
export const RegisterButton = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  width: 273px;
  padding: 20px 36px;
  gap: 12px;
  color: #272727;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;

  border-radius: 15px;
  background: #cda870;
  border: none;
  @media (max-width: 1600px) {
    font-size: 16px;
    height: 60px;
    width: 260px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  height: 100%;
  order: 3;
  max-width: 550px;
  @media (max-width: 1100px) {
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  aspect-ratio: 1.5/1;
  position: relative;
`;

export const QRCode = styled.div`
  display: flex;
  width: 18%;

  position: absolute;
  bottom: 2%;
  left: 3%;

  justify-content: center;
  align-items: center;
  padding: 0.5%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    position: static;
    width: 15%;
    height: 33%;
    padding: 0%;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const AppPlay = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  position: absolute;
  bottom: 0%;
  right: 30%;

  img {
    width: 30%;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    bottom: 100%;
    right: -12%;
    img {
      width: 60%;
    }
  }
  @media (max-width: 480px) {
    display: none;
    /* display: flex; */
    /* position: static;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%; */
  }
`;
export const NewOrder = styled.div``;


export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* height: 100%; */
  order: 4;
  @media (max-width: 768px) {
    padding-left: 0%;
    padding-right: 0%;
    order: 1;
  }
`;
