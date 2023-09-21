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
  flex-direction: column;
  align-items: center;
  z-index: 1;
  width: 100%;
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

export const PortalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
export const PortalContent = styled.div`
  display: flex;

  justify-content: space-between;
  /* align-items: center; */
  height: 40%;
  margin-left: 10%;
  margin-bottom: 2%;

  /* align-items:center; */
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  margin-left: 3%;
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
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  position: relative;
  @media (max-width: 768px) {
    margin-left: 10%;
    flex-direction: column-reverse;
  }
`;

export const QRCode = styled.div`
  display: flex;
  width: 16%;

  position: absolute;
  bottom: 9%;
  left: 0%;
  justify-content: center;
  align-items: center;
  padding: 0.5%;
  /* gap: 10px; */
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.25);
  img {
    width: 100%;
  }
`;

export const AppPlay = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  justify-content: center;
  img {
    width: 20%;
  }
`;
export const NewOrder = styled.div``;
