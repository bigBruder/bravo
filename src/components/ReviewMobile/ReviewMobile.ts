import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 0px 40px 0px;
  gap: 30px;
  overflow: visible;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WelcomeTitle = styled.text`
  color: #164d59;

  text-align: center;
  font-family: Gwen-Trial;
  font-size: 23px;
  font-style: normal;
  font-weight: 650;
  line-height: 30px;
`;

export const WelcomeTitleYellow = styled.text`
  color: #164d59;

  text-align: center;
  font-family: Gwen-Trial;
  font-size: 23px;
  font-style: normal;
  font-weight: 650;
  line-height: 30px;

  color: #cda870;
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

export const SwiperContainer = styled.div`
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding: 30px 15px;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  /* flex: 1 0 0; */
  border-radius: 15px;
  border: 1px solid rgba(205, 168, 112, 0.1);

  background: rgba(205, 168, 112, 0.1);

  backdrop-filter: blur(12.5px);
  margin: 10px 20px 0px 20px;
`;

export const VectorRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const VectorIcons = styled.img``;

export const DescriptionText = styled.text`
  color: #164d59;

  text-align: center;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  padding: 0px 15px;
`;
