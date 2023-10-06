import styled from "styled-components";
import BackgroundImage from "../../assets/images/Portal/Services.png";
export const Wrapper = styled.div`
  display: flex;
  /* height: 100%; */
  display: flex;
  background-image: url("${BackgroundImage}");
  background-size: cover;

  background-repeat: no-repeat;
  background-position: bottom 0px right 0px;

  /* 
  video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }*/
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100vh;
  padding: 30px 70px;
  background-color: rgba(0, 0, 0, 0.7);

  /* @media (max-width: 480px) {
    padding: 60px 15px 40px 15px;
    align-items: center;
    height: 100%;
  } change it*/
  @media (max-width: 768px) {
    padding: 60px 15px 40px 15px;
    align-items: center;
    height: 100%;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  /* padding: 70px 30px 150px; */

  /* margin-left: 100px; */
  @media (max-width: 768px) {
    width: 90%;
  }
  /* @media (max-width: 768px) {
    width: 100%;
  } change it*/
`;

export const PortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 70px 30px 10px;
  @media (max-width: 1200px) {
    padding: 20px 30px 10px;
  }
  /* margin-left: 100px; */
  @media (max-width: 768px) {
    width: 90%;
    padding: 0px 0px 0px;
  }
`;
export const PortalContent = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;

  height: 70vh;
  /* margin-left: 10%; */
  padding-bottom: 5%;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
    justify-content: space-between;
    height: 75vh;
  }
  @media (max-width: 768px) {
    display: flex;

    justify-content: center;
    align-items: center;
    height: 80%;
  }
  /* @media (max-width: 768px) {
    width: 100%;
  } change it*/
  /* align-items:center; */
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 30%;
  margin-left: 3%;
  @media (max-width: 1200px) {
    max-width: none;
    align-items: center;

    /* margin-bottom: 50px; */
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
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
  @media (max-width: 1200px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 23px;
    font-style: normal;
    font-weight: 650;
    line-height: 30px;
    text-align: center;
  }
`;

export const Star = styled.img`
  width: 37px;
  height: 45px;
  @media (max-width: 1200px) {
    display: none;
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
  @media (max-width: 1200px) {
    text-align: center;
    padding-bottom: 0px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;

    padding-bottom: 20px;
  }
`;
export const RegisterButton = styled.button`
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

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    background-color: #b39362;
  }
  &:active {
    transform: scale(1);
    background: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: 1600px) {
    font-size: 16px;
    height: 60px;
    width: 260px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  /* margin-left: 20%; */
  position: relative;
  width: 50vw;
  /* @media (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 60vw; */
  /* flex-wrap: wrap; */
  /* } */
  @media (max-width: 768px) {
    display: flex;
    ///
    flex-direction: column;
    align-items: center;
    ///
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* background-color: white; */
`;
export const NewOrderImage = styled.img`
  width: 25%;
  position: absolute;
  bottom: -7%;
  right: 3%;
  /* @media (max-width: 1200px) {
    position: static;
  } */
  @media (max-width: 768px) {
    display: none;
  }
`;
export const SafariImage = styled.img`
  width: 90%;
  position: absolute;
  bottom: 0%;
  right: 5%;
  @media (max-width: 1200px) {
    /* position: static;
    width: 60%; */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const QRCode = styled.img`
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
    /* position: static;
    width: 15%;
    height: 33%; */
    bottom: 3vw;
  }
  @media (max-width: 768px) {
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
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
    width: 50%;
  }
  @media (max-width: 1601px) {
    img {
      width: 50%;
    }
  }
  @media (max-width: 1401px) {
    img {
    }
    right: 13vw;
  }
  @media (max-width: 1200px) {
    /* flex-direction: column;
    bottom: 100%; */
    left: 15%;
    /* img {
      width: 60%;
    } */
    img {
      width: 30%;
    }
  }
  @media (max-width: 768px) {
    display: none;
    /* display: flex; */
    /* position: static;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    width: 100%; */
  }
`;

export const AppPlayButton = styled.button`
  display: contents;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1);
  }
`;
export const AppPlayMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MaskedGroup = styled.img`
  @media (min-width: 769px) {
    display: none;
  }
  padding-top: 30px;
  width: 100%;
`;

export const MobileButton = styled.button`
  @media (min-width: 769px) {
    display: none;
  }
  display: flex;
  align-items: center;
  margin-top: 40px;
  height: 60px;
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
`;
export const Items = styled.div`
  width: 100%;
`;
