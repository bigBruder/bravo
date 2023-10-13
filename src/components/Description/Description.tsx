import * as Styled from "./description.styles";
import IconDark from "./../../assets/icons/decription-icon.svg";
import IconLight from "./../../assets/icons/quotes-iconLight.svg";
import MobileIcon from "../../assets/images/descriptionFrame.png";
import { QuoteIconLight, QuoteIconDark } from "./description.styles";
interface DescriptionProps {
  descriptionText: string;
  parentBackgroundColor: string;
  backgroundColor?: string;
  textColor?: string;
  displayLightIcon?: string;
  displayDarkIcon?: string;
}

const Description: React.FunctionComponent<DescriptionProps> = ({
  descriptionText,
  parentBackgroundColor,
  backgroundColor = "var(--portal-backgroundColor)",
  textColor = "var(--portal-textQuotesColor)",
  displayLightIcon = "var(--quotes-iconLight)",
  displayDarkIcon = "var(--quotes-iconDark)",
}) => {
  return (
    <Styled.Wrapper parentbackgroundColor={parentBackgroundColor}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      <Styled.MobileIcon src={MobileIcon} />
      <Styled.IconContainer>
        <QuoteIconDark src={IconDark} display={displayDarkIcon} />
        <QuoteIconDark src={IconDark} display={displayDarkIcon} />
        <QuoteIconLight src={IconLight} display={displayLightIcon} />
        <QuoteIconLight src={IconLight} display={displayLightIcon} />
      </Styled.IconContainer>
      <Styled.Description>{descriptionText}</Styled.Description>
      <Styled.IconContainer>
        <QuoteIconDark src={IconDark} display={displayDarkIcon} />
        <QuoteIconDark src={IconDark} display={displayDarkIcon} />
        <QuoteIconLight src={IconLight} display={displayLightIcon} />
        <QuoteIconLight src={IconLight} display={displayLightIcon} />
      </Styled.IconContainer>
    </Styled.Wrapper>
  );
};
export default Description;
