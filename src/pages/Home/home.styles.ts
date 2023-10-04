import styled from "styled-components";

/**
 * Breakpoints list
 * 1. 1440px
 * 2. 1100px
 * 3. 768px
 * 4. 425px
 * 5. 375px
 */

export const Wrapper = styled.div`
  display: flex;
  background-color: #111;

  video {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100% !important;
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
  /* padding: 30px 70px 0px 0px; */
  /* background-color: black;
  opacity: 75%; */

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
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
  justify-content: center;
  align-items: center;
  padding: 150px 70px 30px 150px;
  /* margin-left: 100px; */

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    padding: 75px 0;
    text-align: center;
    margin-left: 0;
  }

  /* padding-left: 0; */
`;
export const PageContent = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  /* flex-grow: 1; */

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0 20px;
    max-width: 500px;
  }
`;

export const TextHeader = styled.div`
  color: #cda870;
  font-family: Gwen-Trial;
  font-size: 3vw;
  font-style: normal;
  font-weight: 650;
  line-height: 4vw;

  @media screen and (max-width: 1100px) {
    font-size: 32px;
    line-height: 1.1;
  }
`;

export const TextContent = styled.p`
  color: #9799ac;
  font-family: Quicksand;
  font-size: 1.2vw;
  font-style: normal;
  padding-top: 20px;
  font-weight: 400;
  line-height: 30px;

  @media screen and (max-width: 1100px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const ButtonContainer = styled.p`
  display: flex;
  padding-top: 6%;
  align-items: center;
  justify-content: start;
  gap: 12px;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;
export const SignUpButton = styled.button`
  display: flex;
  //
  /* position: relative; */
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
  transition: transform 0.3s;
  &:hover {
    background-color: #b39362;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
    background: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 1100px) {
    font-size: 16px;
    line-height: 1.5;
  }
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
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(255, 255, 255, 0.3);
  }
  &:active {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1);
  }

  @media screen and (max-width: 1100px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;
export const FreeMark = styled.div`
  padding-left: 5%;
  padding-top: 2%;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const SmallLogo = styled.img`
  /* width: 100%;
  height: 100%; */
  /* margin-left: 150px; */
  /* padding-right: 200px; */

  /* height: 337px; */
  width: 30%;
  /* width: 30%; */

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const LogoContainer = styled.div`
  display: contents;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
export const ItemContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  bottom: 0px;
  left: 40vw;
  align-self: center;
  justify-content: center;
  gap: 10px;
  /* width: 400px; */
  flex-wrap: wrap;
  /* img {
    width: 8%;
    height: 100%;
  } */
  /* flex-grow: 1; */
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const GoogleIcon = styled.img`
  width: 14%;
  height: 14%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
export const IconButton = styled.button`
  display: contents;
`;

export const AppStoreIcon = styled.img`
  width: 14%;
  height: 14%;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
export const GuaranteeIcon = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 1.2%;
`;
export const BestPrice = styled.img`
  width: 8%;
  height: 8%;
`;

export const MadeInIcon = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 0.5%;
`;
export const GuaranteedIcon2 = styled.img`
  width: 8%;
  height: 8%;
  margin-top: 1.2%;
`;

export const NavigateIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;
export const QualityIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
