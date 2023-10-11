import * as Styled from "./portal.styles";
import {
  // AppPlayButton,
  Star,
  DarkUserIcon,
  LightUserIcon,
  PlayMarketIconLight,
  PlayMarketIconDark,
  AppStoreIconLight,
  AppStoreIconDark,
} from "./portal.styles";
import UserOctagon from "./../../assets/icons/user-octagon.svg";
import SafariContent from "./../../assets/images/Safari • Dark Mode ON 2.png";
import QRCode from "./../../assets/images/image 5.png";
import NewOrder from "./../../assets/images/NEW ORDERdfgdfg 1.png";
import PlayMarketMobile from "./../../assets/icons/play-market.svg";
import AppStoreMobile from "./../../assets/icons/app-store.svg";
import Mask from "../../assets/images/Portal/MobileApp.png";
import StarsIcon from "../../assets/icons/Portal/Stars.svg";

import DarkUser from "../../assets/icons/octagon-personal-dark.png";
import LightUser from "../../assets/icons/user-octagon-light.png";

import Description from "./../../components/Description/Description";

import AppStoreDark from "../../assets/icons/Home/App Store.png";
import AppStoreLight from "../../assets/icons/App StoreLight.png";

import PlayStoreDark from "../../assets/icons/Home/PlayMarket.png";
import PlayStoreLight from "../../assets/icons/PlayMarketLight.png";
import RedStar from "../../assets/icons/Home/RedStar.svg";

interface IPortalContent {}

const PortalContent: React.FunctionComponent<IPortalContent> = () => {
  const parentBackgroundColor = "black";
  const descriptionText =
    "What sets us apart is our unwavering commitment to excellence, a fusion" +
    "\n" +
    "of craftsmanship, innovation, and a relentless pursuit of perfection.";
  return (
    <Styled.PortalWrapper>
      <Styled.PortalContent>
        <Styled.RegisterContainer>
          <Styled.RegisterHeader>
            <Styled.TopText>
              <Styled.RedStar src={RedStar} />
              Portal <Styled.WhiteText>as</Styled.WhiteText>
              <Star src={StarsIcon} />
            </Styled.TopText>
            Easy <Styled.WhiteText>as 1,2,3</Styled.WhiteText>
          </Styled.RegisterHeader>

          <Styled.RegisterText>
            Submit, Track, Ship, Communicate – Your All-in-One Solution for
            Seamless Service Management.
          </Styled.RegisterText>
          <Styled.RegisterButton onClick={() => open('https://my.bravocreations.com/registration')}>
            <DarkUserIcon src={DarkUser} />
            <LightUserIcon src={LightUser} />
            Register Right Now
          </Styled.RegisterButton>
          <Styled.AppPlayMobile>
            <img src={PlayMarketMobile} onClick={() => open('https://play.google.com/store/apps/details?id=com.bravocrm')} />
            <img src={AppStoreMobile} onClick={() => open('https://apps.apple.com/us/app/bravo-creations/id6450965519')} />
          </Styled.AppPlayMobile>
        </Styled.RegisterContainer>

        <Styled.NavigationContainerWrapper>
          <Styled.NavigationContainer>
            <Styled.SafariImage className="safari" src={SafariContent} />

            <Styled.NewOrderImage className="newOrder" src={NewOrder} />
            <Styled.QRCode src={QRCode}></Styled.QRCode>
            <Styled.AppPlay>
              <Styled.IconButton onClick={() => open('https://play.google.com/store/apps/details?id=com.bravocrm')}>
                <PlayMarketIconLight src={PlayStoreLight} />
                <PlayMarketIconDark src={PlayStoreDark} />
              </Styled.IconButton>
              <Styled.IconButton onClick={() => open('https://apps.apple.com/us/app/bravo-creations/id6450965519')}>
                <AppStoreIconLight src={AppStoreLight} />
                <AppStoreIconDark src={AppStoreDark} />
              </Styled.IconButton>
            </Styled.AppPlay>

            <Styled.MaskedGroup src={Mask} />
          </Styled.NavigationContainer>
        </Styled.NavigationContainerWrapper>

        <Styled.MobileButton>
          <img src={UserOctagon} />
          Start Your Journey
        </Styled.MobileButton>
      </Styled.PortalContent>
      <Description
        descriptionText={descriptionText}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.PortalWrapper>
  );
};
export default PortalContent;
