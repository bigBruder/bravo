import * as Styled from "./description.styles";
import Icon from "./../../assets/icons/decription-icon.svg";

export interface DescriptionProps {
  descriptionText: string;
}

const Description: React.FunctionComponent<DescriptionProps> = ({
  descriptionText,
}) => {
  return (
    <Styled.Wrapper>
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
