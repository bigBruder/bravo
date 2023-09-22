import * as Styled from "./description.styles";
import Icon from "./../../assets/icons/decription-icon.svg";

interface DescriptionProps {
  descriptionText: string;
  parentBackgroundColor: string;
}

const Description: React.FunctionComponent<DescriptionProps> = ({
  descriptionText,
  parentBackgroundColor,
}) => {
  return (
    <Styled.Wrapper parentBackgroundColor={parentBackgroundColor}>
      <Styled.IconContainer>
        <img src={Icon} />
        <img src={Icon} />
      </Styled.IconContainer>
      {descriptionText}
      <Styled.IconContainer>
        <img src={Icon} />
        <img src={Icon} />
      </Styled.IconContainer>
    </Styled.Wrapper>
  );
};
export default Description;
