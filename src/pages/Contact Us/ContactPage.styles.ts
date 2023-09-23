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
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
`;
export const MainContent = styled.div`
  display: flex;
  align-items: start;
  gap: 15px;
  flex: 1 0 0;
`;

export const AdressContainer = styled.div`
  position: absolute;
  top: 45vh;
  left: 33vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  img {
    width: 11%;
  }
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh 1vw;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);

  gap: 15px;
  img {
    width: 23vh;
  }
`;

export const AdressHeader = styled.div`
  color: #f44f70;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 2.5vh;
  font-style: normal;
  font-weight: 650;
`;
export const WhiteText = styled.div`
  color: #fff;
`;
export const AdressText = styled.div`
  color: #9799ac;
  text-align: center;
  font-family: Quicksand;
  font-size: 2vh;
  font-style: normal;
  font-weight: 500;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const DescriptionHeader = styled.text`
  color: #fff;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 4vh;
  font-style: normal;
  font-weight: 650;
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  img {
    width: 25%;
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

export const Form = styled.form`
  display: flex;
  padding: 2%;
  margin-top: 10vh;
  margin-left: 45vw;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12.5px);
`;

export const InputHeader = styled.div`
  color: #fff;
  text-align: center;
  font-family: Gwen-Trial;
  font-size: 1.3vw;
  font-style: normal;
  font-weight: 650;
`;

export const InputName = styled.div`
  display: flex;
  padding: 1.3vh 1vw;
  width: 14vw;
  align-items: flex-start;
  gap: 20px;
  border-radius: 15px;
  background: rgba(251, 253, 252, 0.05);
`;

export const InputNameText = styled.div`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 1.5vh;
  font-style: normal;
  font-weight: 500;
`;

export const InputNameField = styled.div`
  display: flex;
  padding: 2vh;
  width: 14vw;
  height: 12vh;
  align-items: flex-start;
  gap: 20px;
  border-radius: 15px;
  background: rgba(251, 253, 252, 0.05);
`;

export const InputButton = styled.button`
  display: flex;
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand;
  font-size: 1.5vh;
  font-style: normal;
  font-weight: 600;
  font-size: 1.7vh;

  @media (max-width: 1600px) {
    padding: 10px 24px;
  }
  img {
    width: 15%;
  }
`;
