import styled from "styled-components";
// import BackgroundImage from "./../../assets/images/bc_logo.png";
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
  /* background-color: #111; */

  video {
    display: block;
    opacity: var(--greetingsBackgroundVideoOpacity);
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100% !important;
    object-fit: cover;
  }
`;

export const HomeStar = styled.img`
  position: relative;
  left: -20px;
  margin-bottom: 32px;

  height: 20px;
  width: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  z-index: 1;
  width: 100%;
  height: 100vh;
  /* padding: 30px 70px; */
  /* padding: 30px 70px 0px 0px; */
  /* background-color: black;
  opacity: 75%; */

  background: var(--greetingsBackground);
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
  gap: 2vw;

  align-items: center;
  padding: 0 30px 0 100px;
  margin-left: 5vw;
  /* padding: 150px 70px 30px 150px; */
  /* margin-left: 100px; */
  @media screen and (max-width: 1100px) {
    gap: 0;
    flex-direction: column-reverse;
    padding: 75px 0;
    text-align: center;
    margin-left: 0;
  }

  @media (min-height: 800px) {
    padding: 30px 30px 0 100px;
  }
  /* padding-left: 0; */
`;
export const PageContent = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  @media (min-width: 1101px) {
    width: 37%;
  }

  /* flex-grow: 1; */

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0 20px;
    max-width: 500px;
  }
`;

export const TextHeader = styled.text`
  /* display: flex; */

  color: var(--greetingsHeaderColor);
  font-family: Gwen-Trial;
  font-size: 3vw;
  font-style: normal;
  font-weight: 650;
  line-height: 4vw;
  position: relative;

  @media screen and (max-width: 1100px) {
    font-size: 32px;
    line-height: 1.1;
    img {
      display: none;
    }
  }
`;

export const TopText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const TextStar = styled.img`
  height: 45px;
  width: 37px;
`;

export const WhiteText = styled.text`
  color: #cda870;
`;

export const TextContent = styled.p`
  color: var(--greetingsTextColor);
  font-family: Quicksand;
  font-size: 1vw;
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
  justify-content: start;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 1500px) {
    gap: 15px;
  }
  @media screen and (max-width: 1100px) {
    justify-content: center;
    gap: 15px;
  }
`;

export const SignUpContainer = styled.div``;

export const SignUpButton = styled.button`
  display: flex;
  position: relative;
  /* padding: 2vh 2vw; */
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 15px;

  background: var(--greetings-signUpBackground);
  color: var(--greetings-signUpText);
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  transition: transform 0.3s;
  min-width: 241px;
  img {
    /* display: none; */
  }
  &:hover {
    background-color: #b39362;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
    background: rgba(255, 255, 255, 0.5);
  }
  @media screen and (max-width: 1650px) {
    font-size: 16px;
    padding: 2vh 2vw;
  }
  @media (min-width: 1101px) and (max-width: 1435px) {
    font-size: 14px;
    padding: 10px 15px;
    min-width: 200px;
  }
  @media screen and (max-width: 1100px) {
    /* font-size: 16px; */
    line-height: 1.5;
    min-width: auto;
  }
`;
export const DemoButton = styled.button`
  display: flex;
  /* padding: 2vh 2vw; */
  padding: 20px 36px;
  align-items: center;
  gap: 12px;
  border-radius: 15px;
  min-width: 219px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  background: var(--greetings-findOutBackground);
  color: var(--greetings-findOutText);
  font-family: Quicksand;
  font-size: 18px;
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
  /* max-width: 219px; */
  @media screen and (max-width: 1650px) {
    /* max-width: 219px; */
    font-size: 16px;
    line-height: 1.5;
    padding: 2vh 2vw;
  }
  @media (min-width: 1101px) and (max-width: 1435px) {
    font-size: 14px;
    padding: 10px 15px;
    min-width: 160px;
  }
  @media screen and (max-width: 1100px) {
    /* font-size: 16px; */
    line-height: 1.5;
    min-width: auto;
  }
`;
export const FreeMark = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;

  transform: translateX(-50%);

  height: 15px;
  width: 60px;

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
  width: 40%;
  /* width: 30%; */

  @media (max-width: 1100px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const LogoContainer = styled.div<{ logo: string }>`
  display: flex;

  width: 50%;

  background-image: url(${(props) => props.logo});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  @media (min-width: 1101px) {
    height: 80vh;
  }
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0px;
  left: 44%;
  align-self: flex-end;
  justify-content: center;
  gap: 0;
  /* width: 400px; */
  /* flex-wrap: wrap; */
  /* img {
    width: 8%;
    height: 100%;
  } */
  /* flex-grow: 1; */
  @media (max-width: 1100px) {
    display: none;
  }

  @media (min-height: 800px) {
    gap: 30px;
  }
`;

export const GoogleIcon = styled.img`
  display: var(--greetings-googleIcon);
  width: 160px;
  height: 54px;
  border-radius: 12px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
export const GoogleIconLight = styled.img`
  display: var(--greetings-googleIconLight);
  width: 160px;
  height: 54px;
  border-radius: 12px;
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
  width: 60px;
`;

export const DarkUserIcon = styled.img`
  display: var(--greetings-userIconDarkDisplay);
`;
export const LightUserIcon = styled.img`
  display: var(--greetings-userIconLightDisplay);
`;
// export const DarkUserIcon = styled.img``
// export const DarkUserIcon = styled.img``

export const AppStoreIcon = styled.img`
  display: var(--greetings-appIcon);
  width: 160px;
  height: 54px;
  border-radius: 12px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
export const AppStoreIconLight = styled.img`
  display: var(--greetings-appIconLight);
  width: 160px;
  height: 54px;
  border-radius: 12px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(1);
  }
`;
export const GuaranteeIcon = styled.img`
  width: 15%;
  height: 15%;
  margin-top: 2%;
`;
export const BestPrice = styled.img`
  width: 15%;
  height: 15%;
`;

export const MadeInIcon = styled.img`
  width: 15%;
  height: 15%;
  margin-top: 0.7%;
`;
export const GuaranteedIcon2 = styled.img`
  width: 15%;
  height: 15%;
  margin-top: 1.6%;
`;

export const NavigateIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2%;
`;
export const QualityIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
