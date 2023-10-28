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
  z-index: 0;
`;
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;

export const WelcomeTitle = styled.text`
  color: #fff;

  text-align: center;
  font-family: Gwen-Trial;
  font-size: 23px;
  font-style: normal;
  font-weight: 650;
  line-height: 30px;
`;

export const WelcomeTitleColored = styled.text`
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
  padding: 0px 20px;
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

export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 20px;
  z-index: 1;
`;

export const TimeDepartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const Number = styled.img``;
export const Hours = styled.text`
  color: #fff;

  text-align: center;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 36px;
`;

export const TitleContent = styled.text`
  color: #cda870;

  text-align: center;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const TextContent = styled.text`
  display: flex;
  /* max-height: 44px; */
  flex-direction: column;
  justify-content: center;
  /* align-self: stretch; */
  overflow: hidden;
  color: #9799ac;

  text-align: center;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;
