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
  background-color: black;
  opacity: 70%;
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
`;

export const MainContent = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-right: 5vw;
  /* padding: 0 6vw; */
  padding: 150px 70px 30px 150px;
  margin-left: 100px;
  /* flex-grow: 0.8; */
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
    font-size: 16px;
  }
`;
export const ContentPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  padding: 2% 5% 2% 5%;
  flex-flow: wrap;
`;

export const ContentDepartment = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: space-between;
  align-items: start;
  gap: 2vh;
  margin-bottom: 3vh;
`;

export const ContentHeader = styled.div`
  color: #cda870;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 3vh;
  font-style: normal;
  font-weight: 650;
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
  display: flex;
  padding: 3vh 0px;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  flex: 0.6 0 0;

  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
  gap: 5vh;
`;

export const RegistrationText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 25px;
  font-style: normal;
  font-weight: 650;

  @media (max-width: 1600px) {
    font-size: 18px;
  }
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

  @media (max-width: 1600px) {
    font-size: 16px;
    padding: 10px 24px;
  }
`;
