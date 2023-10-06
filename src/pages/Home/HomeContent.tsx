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

// export default HomeContent;

import * as Styled from "./home.styles";
// import LogoIcon from "./../../assets/icons/logo-icon.svg";
import GiftIcon from "./../../assets/icons/gift.svg";
import OctagonIcon from "./../../assets/icons/video-octagon.svg";
import LogoIcon from "../../assets/images/bc_logo.png";
import BestPriceIcon from "../../assets/icons/Home/best-price.png";
import GuaranteedIcon from "../../assets/icons/Home/guaranteed.png";
import MadeUsaIcon from "../../assets/icons/Home/made-in-usa.png";
import AppStore from "../../assets/icons/Home/App Store.png";
import PlayStore from "../../assets/icons/Home/PlayMarket.png";
import ItsFree from "../../assets/icons/Home/It’s Free.png";
import Stars from "../../assets/icons/Home/Star.png";

import {
  GoogleIcon,
  AppStoreIcon,
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
      <Styled.TextHeader>
        Number One Service Jeweler in America <img src={Stars} />
      </Styled.TextHeader>
      <Styled.TextContent>
        Experience the difference that sets us apart: We have redefined
        exceptional customer service by exceeding your expectations. Our team of
        expert jewelers, highly skilled craftsmen and state-of-the-art
        technology ensure unmatched quality.
      </Styled.TextContent>
      <Styled.ButtonContainer>
        <Styled.SignUpButton>
          <img src={GiftIcon} />
          Sign up
        </Styled.SignUpButton>
        <Styled.DemoButton>
          <img src={OctagonIcon} />
          Find out more
        </Styled.DemoButton>
      </Styled.ButtonContainer>
      <Styled.FreeMark>
        <img src={ItsFree} style={{ width: "13%" }} />
      </Styled.FreeMark>
    </Styled.PageContent>

    <Styled.LogoContainer>
      <Styled.SmallLogo src={LogoIcon} />
      <Styled.ItemContainer>
        <NavigateIconContainer>
          <Styled.IconButton>
            {" "}
            <GoogleIcon src={PlayStore} />
          </Styled.IconButton>
          <Styled.IconButton>
            <AppStoreIcon src={AppStore} />
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
