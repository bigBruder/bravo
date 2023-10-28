import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 20px 40px 20px;
  gap: 40px;
  background-color: #000000d9;
`;

export const Video = styled.img`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 1;
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
  padding: 0px 40px;
`;

export const AdvertContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
`;
export const Button = styled.button`
  /* opacity: 0; */
`;
export const AppImage = styled.img`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const GoogleImage = styled.img`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

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
  border: none;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  transition: transform 0.2s;
  
  z-index: 1;
  
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 30px 15px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* flex: 1 0 0; */
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(12.5px);
  z-index: 1;
`;

export const VectorRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const VectorIcons = styled.img``;

export const DescriptionText = styled.text`
  color: #fff;

  text-align: center;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 0px 15px;
  align-self: stretch;
`;
