import * as Styled from "./footer.styles";

import Icon from "../../assets/icons/Footer/Icon.png";

interface IFooterProps {}
const Footer: React.FC<IFooterProps> = () => {
  return (
    <Styled.Wrapper>
      <img src={Icon} />
    </Styled.Wrapper>
  );
};
export default Footer;
