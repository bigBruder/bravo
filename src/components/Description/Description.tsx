import * as Styled from "./description.styles";
import IconDark from "./../../assets/icons/decription-icon.svg";
import IconLight from "./../../assets/icons/quotes-iconLight.svg";
import MobileIcon from "../../assets/images/descriptionFrame.png";
import { QuoteIconLight, QuoteIconDark } from "./description.styles";
interface DescriptionProps {
  descriptionText: string;
  parentBackgroundColor: string;
}

const Description: React.FunctionComponent<DescriptionProps> = ({
  descriptionText,
  parentBackgroundColor,
}) => {
  return (
    <Styled.Wrapper parentbackgroundColor={parentBackgroundColor}>
      <Styled.MobileIcon src={MobileIcon} />
      <Styled.IconContainer>
        <QuoteIconDark src={IconDark} />
        <QuoteIconDark src={IconDark} />
        <QuoteIconLight src={IconLight} />
        <QuoteIconLight src={IconLight} />
      </Styled.IconContainer>
      <Styled.Description>{descriptionText}</Styled.Description>
      <Styled.IconContainer>
        <QuoteIconDark src={IconDark} />
        <QuoteIconDark src={IconDark} />
        <QuoteIconLight src={IconLight} />
        <QuoteIconLight src={IconLight} />
      </Styled.IconContainer>
    </Styled.Wrapper>
  );
};
export default Description;
