import * as Styled from "./description.styles";
import Icon from "./../../assets/icons/decription-icon.svg";
import MobileIcon from "../../assets/images/descriptionFrame.png";

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
        <img src={Icon} />
        <img src={Icon} />
      </Styled.IconContainer>
      <Styled.Description>{descriptionText}</Styled.Description>
      <Styled.IconContainer>
        <img src={Icon} />
        <img src={Icon} />
      </Styled.IconContainer>
    </Styled.Wrapper>
  );
};
export default Description;
