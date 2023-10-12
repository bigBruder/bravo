import { Wrapper } from "./PortalMobile";
import videoBg from "../../assets/video/home_background.mp4";

interface IPortalMobile {}

const PortalMobile: React.FC<IPortalMobile> = () => {
  return (
    <Wrapper>
      {/* <Styled.Video src={videoBg} autoPlay loop muted /> */}
    </Wrapper>
  );
};

export default PortalMobile;
