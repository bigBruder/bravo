import * as Styled from "./portal.styles";
import UserOctagon from "./../../assets/icons/user-octagon.svg";
import SafariContent from "./../../assets/images/Safari • Dark Mode ON 2.png";
import QRCode from "./../../assets/images/image 5.png";
import NewOrder from "./../../assets/images/NEW ORDERdfgdfg 1.png";
import PlayMarket from "./../../assets/icons/play-market.svg";
import AppStore from "./../../assets/icons/app-store.svg";
import Mask from "../../assets/images/Portal/Mask group.png";

import Description from "./../../components/Description/Description";

interface IPortalContent {}

const PortalContent: React.FunctionComponent<IPortalContent> = () => {
  const parentBackgroundColor = "black";
  const descriptionText =
    "Our unique approach and attention to detail set us apart from our competitors, ensuring a truly memorable experience for our clients.";
  return (
    <Styled.PortalWrapper>
      <Styled.PortalContent>
        <Styled.RegisterContainer>
          <Styled.RegisterHeader>
            Portal <Styled.WhiteText>as</Styled.WhiteText> Easy{" "}
            <Styled.WhiteText>as 1,2,3</Styled.WhiteText>
          </Styled.RegisterHeader>

          <Styled.RegisterText>
            Submit, Track, Ship, Communicate, Mobile Devices All in One Service
          </Styled.RegisterText>
          <Styled.RegisterButton>
            <img src={UserOctagon} />
            Register Right Now
          </Styled.RegisterButton>
          <Styled.AppPlayMobile>
            <img src={PlayMarket} />
            <img src={AppStore} />
          </Styled.AppPlayMobile>
        </Styled.RegisterContainer>

        <Styled.NavigationContainer>
          <Styled.SafariImage className="safari" src={SafariContent} />
          {/* <Styled.Items> */}

          {/* </Styled.Items> */}
          <Styled.NewOrderImage className="newOrder" src={NewOrder} />
          <Styled.QRCode src={QRCode}>
            {/* <img src={QRCode} /> */}
          </Styled.QRCode>
          <Styled.AppPlay>
            <img src={PlayMarket} />
            <img src={AppStore} />
          </Styled.AppPlay>

          <Styled.MaskedGroup src={Mask} />
        </Styled.NavigationContainer>
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
