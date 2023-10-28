// @ts-nocheck
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
// import UserOctagon from "./../../assets/icons/octagon-black.svg";
// import SafariContent from "./../../assets/images/Safari • Dark Mode ON 2.png";
// import QRCode from "./../../assets/images/image 5.png";
// import NewOrder from "./../../assets/images/NEW ORDERdfgdfg 1.png";
import PlayMarketMobile from "./../../assets/icons/play-market.svg";
import AppStoreMobile from "./../../assets/icons/app-store.svg";
import Mask from "../../assets/images/Portal/MobileApp.png";
// import StarsIcon from "../../assets/icons/Portal/Stars.svg";

// import DarkUser from "../../assets/icons/octagon-personal-dark.png";
// import LightUser from "../../assets/icons/user-octagon-light.png";

import Description from "./../../components/Description/Description";

// import AppStoreDark from "../../assets/icons/Home/App Store.png";
// import AppStoreLight from "../../assets/icons/App StoreLight.png";
import { PortalContentId } from "../../constants";
// import PlayStoreDark from "../../assets/icons/Home/PlayMarket.png";
// import PlayStoreLight from "../../assets/icons/PlayMarketLight.png";
import RedStar from "../../assets/icons/Home/RedStar.svg";
import useContentful from "../../hooks/useContentful";

interface IPortalContent {}

const PortalContent: React.FunctionComponent<IPortalContent> = () => {
  const { data, loading, error } = useContentful(PortalContentId);

  if (loading) {
    return "";
  }
  if (error) {
    console.log("error", error);
    return null;
  }
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
              {data?.yellowTopWord}{" "}
              <Styled.WhiteText>{data?.blueTopWord}</Styled.WhiteText>
              <Star src={data?.yelowStarIcon?.fields?.file.url} />
            </Styled.TopText>
            {data?.yellowLowWord}{" "}
            <Styled.WhiteText>{data?.blueLowWord}</Styled.WhiteText>
          </Styled.RegisterHeader>

          <Styled.RegisterText>{data?.description}</Styled.RegisterText>
          <Styled.RegisterButton
            onClick={() => open("https://my.bravocreations.com/registration")}
          >
            <DarkUserIcon src={data?.buttonIcon.fields.file.url} />
            <LightUserIcon src={data?.buttonIconLight.fields.file.url} />
            {data?.buttonText}
          </Styled.RegisterButton>
          <Styled.AppPlayMobile>
            <img
              src={PlayMarketMobile}
              onClick={() =>
                open(
                  "https://play.google.com/store/apps/details?id=com.bravocrm"
                )
              }
            />
            <img
              src={AppStoreMobile}
              onClick={() =>
                open(
                  "https://apps.apple.com/us/app/bravo-creations/id6450965519"
                )
              }
            />
          </Styled.AppPlayMobile>
        </Styled.RegisterContainer>

        <Styled.NavigationContainerWrapper>
          <Styled.NavigationContainer>
            <Styled.SafariImage
              className="safari"
              src={data?.safari.fields.file.url}
            />

            <Styled.NewOrderImage
              className="newOrder"
              src={data?.newOrder.fields.file.url}
            />
            <Styled.QRCode src={data?.qrCode.fields.file.url}></Styled.QRCode>
            <Styled.AppPlay>
              <Styled.IconButton
                onClick={() =>
                  open(
                    "https://play.google.com/store/apps/details?id=com.bravocrm"
                  )
                }
              >
                <PlayMarketIconLight
                  src={data?.googleButtonLight.fields.file.url}
                />
                <PlayMarketIconDark src={data?.googleButton.fields.file.url} />
              </Styled.IconButton>
              <Styled.IconButton
                onClick={() =>
                  open(
                    "https://apps.apple.com/us/app/bravo-creations/id6450965519"
                  )
                }
              >
                <AppStoreIconLight
                  src={data?.appleButtonLight.fields.file.url}
                />
                <AppStoreIconDark src={data?.appleButton.fields.file.url} />
              </Styled.IconButton>
            </Styled.AppPlay>

            <Styled.MaskedGroup src={Mask} />
          </Styled.NavigationContainer>
        </Styled.NavigationContainerWrapper>

        <Styled.MobileButton>
          <img src={data?.mobileButtonIcon.fields.file.url} />
          {data?.mobileButton}
        </Styled.MobileButton>
      </Styled.PortalContent>
      <Description
        descriptionText={data?.quoteText}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.PortalWrapper>
  );
};
export default PortalContent;
