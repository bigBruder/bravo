import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 20px 40px 20px;
  gap: 40px;
  /* background-color: #000000; */
`;

export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`;
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const WelcomeTitle = styled.text`
  color: #cda870;

  text-align: center;
  font-family: Gwen-Trial;
  font-size: 23px;
  font-style: normal;
  font-weight: 650;
  line-height: 30px;
`;

export const WelcomeTitleColored = styled.text`
  color: #fff;
`;

export const WelcomeText = styled.p`
  color: #9799ac;

  text-align: center;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

export const AdvertContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AppImage = styled.img``;

export const GoogleImage = styled.img``;

export const AdvertImage = styled.img``;

export const ButtonStart = styled.button`
  display: flex;
  padding: 16px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 15px;
  background: #cda870;

  box-shadow: 0px 10px 20px 0px rgba(205, 168, 112, 0.1);
  color: #272727;

  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
