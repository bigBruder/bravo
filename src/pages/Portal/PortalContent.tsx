import * as Styled from "./portal.styles";
import UserOctagon from "./../../assets/icons/user-octagon.svg";
import SafariContent from "./../../assets/images/Safari • Dark Mode ON 2.svg";
import QRCode from "./../../assets/images/image 5.svg";
import NewOrder from "./../../assets/images/NEW ORDERdfgdfg 1.svg";
import PlayMarket from "./../../assets/icons/play-market.svg";
import AppStore from "./../../assets/icons/app-store.svg";
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
            <Styled.WhiteText>1,2,3</Styled.WhiteText>
          </Styled.RegisterHeader>

          <Styled.RegisterText>
            Submit, Track, Ship, Communicate, Mobile Devices All in One Service
          </Styled.RegisterText>
          <Styled.RegisterButton>
            <img src={UserOctagon} />
            Register Right Now
          </Styled.RegisterButton>
        </Styled.RegisterContainer>

        <Styled.NavigationContainer>
          <img src={SafariContent} style={{ width: "90%" }} />
          <Styled.QRCode>
            <img src={QRCode} />
          </Styled.QRCode>

          <img
            src={NewOrder}
            style={{
              width: "20%",
              position: "absolute",
              top: "42%",
              right: "3%",
            }}
          />

          <Styled.AppPlay>
            <img src={PlayMarket} />
            <img src={AppStore} />
          </Styled.AppPlay>

          {/* </Styled.NewOrder> */}
        </Styled.NavigationContainer>
      </Styled.PortalContent>
      <Description
        descriptionText={descriptionText}
        parentBackgroundColor={parentBackgroundColor}
      />
    </Styled.PortalWrapper>
  );
};
export default PortalContent;
