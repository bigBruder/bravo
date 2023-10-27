// @ts-nocheck
import RedStar from "../../assets/icons/Home/RedStar.svg";
// export default HomeContent;

import * as Styled from "./home.styles";
// import LogoIcon from "./../../assets/icons/logo-icon.svg";
// import GiftIcon from "./../../assets/icons/gift.svg";
import OctagonIcon from "./../../assets/icons/video-octagon.svg";
// import LogoIcon from "../../assets/icons/logo.svg";
// import BestPriceIcon from "../../assets/icons/Home/best-price.png";
// import GuaranteedIcon from "../../assets/icons/Home/guaranteed.png";
// import MadeUsaIcon from "../../assets/icons/Home/made-in-usa.png";
import AppStore from "../../assets/icons/Home/App Store.png";
import AppStoreLight from "../../assets/icons/App StoreLight.png";
import PlayStore from "../../assets/icons/Home/PlayMarket.png";
import PlayStoreLight from "../../assets/icons/PlayMarketLight.png";
import ItsFree from "../../assets/icons/Home/It’s Free.png";
import Stars from "../../assets/icons/Home/Star.png";
import DarkUser from "../../assets/icons/octagon-personal-dark.png";
import LightUser from "../../assets/icons/user-octagon-light.png";
import { DarkUserIcon, LightUserIcon } from "./home.styles";
import { HomeContentText } from "../../constants";

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
// import { useState } from "react";
import useContentful from "../../hooks/useContentful";
interface IHomeContent {}

const HomeContent: React.FunctionComponent<IHomeContent> = () => {
  // const [textContent, setTextContent] = useState(null);
  const { data, loading, error } = useContentful(HomeContentText);

  if (loading) {
    return "";
  }
  if (error) {
    console.log("error", error);
    return null;
  }
  return (
    <Styled.ContentWrapper>
      {/* <Styled.LogoWrapper> */}
      <Styled.PageContent>
        <Styled.HomeStar src={RedStar} />
        <Styled.TextHeader>
          <Styled.TopText>
            {/* @ts-ignore */}
            {data?.title}
            <Styled.TextStar src={Stars} />
            <br />
          </Styled.TopText>
          {/* @ts-ignore */}
          {data?.titleBlueAfter} {/* @ts-ignore */}
          <Styled.WhiteText>{data?.titleYellow}</Styled.WhiteText>{" "}
        </Styled.TextHeader>
        {/* @ts-ignore */}
        <Styled.TextContent>{data?.description}</Styled.TextContent>
        <Styled.ButtonContainer>
          <Styled.SignUpButton
            onClick={() => open("https://my.bravocreations.com/registration")}
          >
            <DarkUserIcon src={DarkUser} />
            <LightUserIcon src={LightUser} />
            {/* Start&nbsp;Your&nbsp;Journey */}
            {data?.button}&nbsp;{data?.buttonPart1}&nbsp;{data?.buttonPart2}
            <Styled.FreeMark>
              <img
                src={ItsFree}
                style={{ width: "inherit", height: "inherit" }}
              />
            </Styled.FreeMark>
          </Styled.SignUpButton>
          <Styled.DemoButton onClick={() => open("https://bravocreations.com")}>
            <img src={OctagonIcon} />
            {data?.secondButton}&nbsp;{data?.secondButton1}&nbsp;
            {data?.secondButton2}
          </Styled.DemoButton>
        </Styled.ButtonContainer>
      </Styled.PageContent>

      <Styled.LogoContainer logo={data?.logo.fields.file.url}>
        {/*<Styled.SmallLogo src={LogoIcon} />*/}
        <Styled.ItemContainer>
          <NavigateIconContainer>
            <Styled.IconButton
              onClick={() =>
                open(
                  "https://play.google.com/store/apps/details?id=com.bravocrm"
                )
              }
            >
              {" "}
              <GoogleIcon src={PlayStore} />
              <GoogleIconLight src={PlayStoreLight} />
            </Styled.IconButton>
            <Styled.IconButton
              onClick={() =>
                open(
                  "https://apps.apple.com/us/app/bravo-creations/id6450965519"
                )
              }
            >
              <AppStoreIcon src={AppStore} />
              <AppStoreIconLight src={AppStoreLight} />
            </Styled.IconButton>
          </NavigateIconContainer>
          <QualityIconContainer>
            {data?.homeIcons.map(icon => <BestPrice src={icon.fields.file.url} />)}
            {/*<GuaranteeIcon src={data?.homeIcons[1].fields.file.url} />*/}
            {/*<MadeInIcon src={data?.homeIcons[2].fields.file.url} />*/}
            {/*<GuaranteedIcon2 src={data?.homeIcons[1].fields.file.url} />*/}
          </QualityIconContainer>
        </Styled.ItemContainer>
      </Styled.LogoContainer>
    </Styled.ContentWrapper>
  );
};

export default HomeContent;
