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
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-grow: 0.8;
  padding: 150px 70px 30px 150px;
  /* margin-left: 100px; */
`;
export const DescriptionHeader = styled.text`
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 42px;
  font-style: normal;
  font-weight: 650;

  @media (max-width: 1600px) {
    font-size: 33px;
  }
`;
export const WhiteText = styled.span`
  color: white;
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
  padding: 5% 15% 2% 15%;
`;
export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
`;

export const NumberBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  color: rgba(205, 168, 112, 0.05);
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 120px;
  font-style: normal;
  font-weight: 650;
  line-height: 46px;
  @media (max-width: 1600px) {
    font-size: 100px;
  }
`;
export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 27%;
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 54px;
  font-style: normal;
  font-weight: 650;
  line-height: 46px;
  @media (max-width: 1600px) {
    font-size: 47px;
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

export const Image = styled.div``;
