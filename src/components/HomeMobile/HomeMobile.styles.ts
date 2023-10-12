import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;
  background-color: #000000d9;
`;

export const WelcomeTitle = styled.text`
  font-family: Gwen-Trial;
  font-size: 30px;
  font-weight: 650;
  line-height: 44px;
  color: white;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const ActionsText = styled.div`
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 100;
  color: #cda870bf;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Button = styled.button`
  min-height: 56px;
  padding: 16px 36px;
  border-radius: 15px;
  gap: 10px;
  background-color: #cda870;
  border: none;
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonModified = styled(Button)`
  background-color: #ffffff1a;
  border: 1px solid #ffffff1a;
  color: #cda870;
`;
export const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const WelcomeTitleColored = styled.text`
  color: #cda870;
`;

export const WelcomeText = styled.p`
  font-family: Quicksand;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #fff;
  padding: 0px 0px;
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 48px;
  height: 54px;
`;

export const UserImage = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Video = styled.video`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const StarYellowIcon = styled.img`
  position: absolute;
  z-index: 0;
  left: 91vw;

  top: 161px;
`;
export const StarsPinkIcon = styled.img`
  position: absolute;
  left: -1px;
  top: 94px;
`;
