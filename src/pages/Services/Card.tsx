import * as Styled from "./Card.style";
import DesignCard from "./../../assets/icons/Frame 813338.png";
import StoneSetting from "./../../assets/icons/StoneSetting.png";
import Cad from "./../../assets/icons/CAD.png";
import Engraving from "./../../assets/icons/Engraving.png";
import Repair from "./../../assets/icons/Repair.png";
import Casting from "./../../assets/icons/Casting.png";
import Manufacturing from "./../../assets/icons/Manufacturing.png";
import Wax from "./../../assets/icons/Wax.png";
import Photography from "./../../assets/icons/Photography.png";
import Ask from "./../../assets/icons/Ask.png";

interface IServiceCard { }

const Card: React.FunctionComponent<IServiceCard> = () => {
  return (
    <div>
      <Styled.Wrapper>
        <Styled.GroupCardTop>
          <img src={DesignCard} />
          <img src={StoneSetting} />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <img src={Cad} />
          <img src={Engraving} />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <img src={Repair} />
          <img src={Casting} />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom >
          <img src={Manufacturing} />
          <img src={Wax} />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <img src={Photography} />
          <img src={Ask} />
        </Styled.GroupCardTop>
      </Styled.Wrapper>
      <Styled.WrapperSmall>
        <Styled.GroupCardBottom>
          <img src={Cad} />
          <img src={DesignCard} />
          <img src={Engraving} />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <img src={Repair} />
          <img src={Casting} />
          <img src={StoneSetting} />
          <img src={Ask} />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom >
          <img src={Manufacturing} />
          <img src={Photography} />
          <img src={Wax} />
        </Styled.GroupCardBottom>
      </Styled.WrapperSmall>
    </div>
  );
};
export default Card;
