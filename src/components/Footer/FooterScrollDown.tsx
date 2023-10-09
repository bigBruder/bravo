import * as Styled from "./footer.styles";

import Icon from "../../assets/icons/Footer/Icon.png";

interface IFooterScrollDownProps {}
const FooterScrollDown: React.FC<IFooterScrollDownProps> = () => {
  return (
    <Styled.Wrapper>
      <img src={Icon} />
    </Styled.Wrapper>
  );
};
export default FooterScrollDown;
