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

interface IServiceCard {}

const Card: React.FunctionComponent<IServiceCard> = () => {
  return (
    <Styled.Wrapper>
      <Styled.GroupCardTop>
        <img src={DesignCard} style={{ width: 180, height: 180 }} />
        <img
          src={StoneSetting}
          style={{
            width: 167,
            height: 160,
            paddingLeft: "15px",
            paddingTop: "7px",
          }}
        />
      </Styled.GroupCardTop>
      <Styled.GroupCardBottom>
        <img src={Cad} style={{ width: 180, height: 180 }} />
        <img src={Engraving} style={{ width: 180, height: 180 }} />
      </Styled.GroupCardBottom>
      <Styled.GroupCardTop>
        <img src={Repair} style={{ width: 180, height: 180 }} />
        <img src={Casting} style={{ width: 180, height: 180 }} />
      </Styled.GroupCardTop>
      <Styled.GroupCardBottom>
        <img src={Manufacturing} style={{ width: 180, height: 180 }} />
        <img src={Wax} style={{ width: 180, height: 180 }} />
      </Styled.GroupCardBottom>
      <Styled.GroupCardTop>
        <img src={Photography} style={{ width: 180, height: 180 }} />
        <img src={Ask} style={{ width: 180, height: 180 }} />
      </Styled.GroupCardTop>
    </Styled.Wrapper>
  );
};
export default Card;
