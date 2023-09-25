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
  /* padding: 30px 70px; */
  padding: 30px 70px 0px 0px;
  background-color: black;
  opacity: 75%;
`;

export const MainContent = styled.div`
  /* display: flex;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch; */
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 150px 70px 30px 150px;
  margin-left: 100px;

  /* padding-left: 0; */
`;
export const PageContent = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  margin-left: 5vw;
`;

export const TextHeader = styled.div`
  color: #cda870;
  font-family: Gwen-Trial;
  font-size: 3vw;
  font-style: normal;
  font-weight: 650;
  line-height: 4vw;
`;

export const TextContent = styled.p`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 1.2vw;
  font-style: normal;
  padding-top: 20px;
  font-weight: 400;
  line-height: 30px;
`;
export const ButtonContainer = styled.p`
  display: flex;
  padding-top: 6%;
  align-items: center;
  justify-content: start;
  gap: 12px;
`;
export const SignUpButton = styled.button`
  display: flex;
  padding: 2vh 2vw;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;
  background: #cda870;
  color: #272727;
  font-family: Quicksand;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
export const DemoButton = styled.button`
  display: flex;
  padding: 2vh 2vw;
  align-items: center;
  gap: 12px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  color: #cda870;
  font-family: Quicksand;
  font-size: 1.2vw;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;

export const SmallLogo = styled.img`
  /* width: 100%;
  height: 100%; */
  /* margin-left: 150px; */
  /* padding-right: 200px; */
  width: 30%;
  margin-right: 5vw;
  /* height: 337px; */
  img {
    width: 50vw;
  }
`;
