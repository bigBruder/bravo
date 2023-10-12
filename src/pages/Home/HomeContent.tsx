// import * as Styled from "./home.styles";
// // import LogoIcon from "./../../assets/icons/logo-icon.svg";
// import GiftIcon from "./../../assets/icons/gift.svg";
// import OctagonIcon from "./../../assets/icons/video-octagon.svg";
// import LogoIcon from "../../assets/images/bc_logo.png";
// interface IHomeContent {}

// const HomeContent: React.FunctionComponent<IHomeContent> = () => {
//   return (
//     <Styled.ContentWrapper>
//       {/* <Styled.LogoWrapper> */}
//       <Styled.PageContent>
//         <Styled.TextHeader>
//           Number One Service Jeweler in America
//         </Styled.TextHeader>
//         <Styled.TextContent>
//           Let us show you why we are different by providing exceptional customer
//           service and going above and beyond to meet your needs.
//         </Styled.TextContent>
//         <Styled.ButtonContainer>
//           <Styled.SignUpButton>
//             <img src={GiftIcon} />
//             Sign up
//           </Styled.SignUpButton>
//           <Styled.DemoButton>
//             <img src={OctagonIcon} />
//             Demo Video
//           </Styled.DemoButton>
//         </Styled.ButtonContainer>
//       </Styled.PageContent>

//       <Styled.SmallLogo src={LogoIcon} alt="LogoIcon" />
//     </Styled.ContentWrapper>
//   );
// };
import RedStar from "../../assets/icons/Home/RedStar.svg";
// export default HomeContent;

import * as Styled from "./home.styles";
// import LogoIcon from "./../../assets/icons/logo-icon.svg";
// import GiftIcon from "./../../assets/icons/gift.svg";
import OctagonIcon from "./../../assets/icons/video-octagon.svg";
// import LogoIcon from "../../assets/icons/logo.svg";
import BestPriceIcon from "../../assets/icons/Home/best-price.png";
import GuaranteedIcon from "../../assets/icons/Home/guaranteed.png";
import MadeUsaIcon from "../../assets/icons/Home/made-in-usa.png";
import AppStore from "../../assets/icons/Home/App Store.png";
import AppStoreLight from "../../assets/icons/App StoreLight.png";
import PlayStore from "../../assets/icons/Home/PlayMarket.png";
import PlayStoreLight from "../../assets/icons/PlayMarketLight.png";
import ItsFree from "../../assets/icons/Home/It’s Free.png";
import Stars from "../../assets/icons/Home/Star.png";
import DarkUser from "../../assets/icons/octagon-personal-dark.png";
import LightUser from "../../assets/icons/user-octagon-light.png";
import { DarkUserIcon, LightUserIcon } from "./home.styles";

import {
  GoogleIcon,
  GoogleIconLight,
  AppStoreIcon,
  AppStoreIconLight,
  GuaranteeIcon,
  BestPrice,
  MadeInIcon,
  GuaranteedIcon2,
  NavigateIconContainer,
  QualityIconContainer,
} from "./home.styles";

interface IHomeContent {}

const HomeContent: React.FunctionComponent<IHomeContent> = () => (
  <Styled.ContentWrapper>
    {/* <Styled.LogoWrapper> */}
    <Styled.PageContent>
      <Styled.HomeStar src={RedStar} />
      <Styled.TextHeader>
        <Styled.TopText>
          Jewelry Service <Styled.TextStar src={Stars} />
          <br />
        </Styled.TopText>
        Shop <Styled.WhiteText> Like No Other</Styled.WhiteText>{" "}
      </Styled.TextHeader>
      <Styled.TextContent>
        Experience the difference that sets us apart: We have redefined
        exceptional customer service by exceeding your expectations. Our team of
        expert jewelers, highly skilled craftsmen and state-of-the-art
        technology ensure unmatched quality.
      </Styled.TextContent>
      <Styled.ButtonContainer>
        <Styled.SignUpButton
          onClick={() => open("https://my.bravocreations.com/registration")}
        >
          <DarkUserIcon src={DarkUser} />
          <LightUserIcon src={LightUser} />
          Start Your Journey
          <Styled.FreeMark>
            <img
              src={ItsFree}
              style={{ width: "inherit", height: "inherit" }}
            />
          </Styled.FreeMark>
        </Styled.SignUpButton>
        <Styled.DemoButton onClick={() => open("https://bravocreations.com")}>
          <img src={OctagonIcon} />
          Find out more
        </Styled.DemoButton>
      </Styled.ButtonContainer>
    </Styled.PageContent>

    <Styled.LogoContainer>
      {/*<Styled.SmallLogo src={LogoIcon} />*/}
      <Styled.ItemContainer>
        <NavigateIconContainer>
          <Styled.IconButton
            onClick={() =>
              open("https://play.google.com/store/apps/details?id=com.bravocrm")
            }
          >
            {" "}
            <GoogleIcon src={PlayStore} />
            <GoogleIconLight src={PlayStoreLight} />
          </Styled.IconButton>
          <Styled.IconButton
            onClick={() =>
              open("https://apps.apple.com/us/app/bravo-creations/id6450965519")
            }
          >
            <AppStoreIcon src={AppStore} />
            <AppStoreIconLight src={AppStoreLight} />
          </Styled.IconButton>
        </NavigateIconContainer>
        <QualityIconContainer>
          <BestPrice src={BestPriceIcon} />
          <GuaranteeIcon src={GuaranteedIcon} />
          <MadeInIcon src={MadeUsaIcon} />
          <GuaranteedIcon2 src={GuaranteedIcon} />
        </QualityIconContainer>
      </Styled.ItemContainer>
    </Styled.LogoContainer>
  </Styled.ContentWrapper>
);

export default HomeContent;
