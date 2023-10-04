import * as Styled from "./Card.style";
import DesignCard from "../../assets/icons/DesignCard.png";
import StoneSetting from "./../../assets/icons/StoneSetting.png";
import Cad from "../../assets/icons/CAD.png";
import Engraving from "./../../assets/icons/Engraving.png";
import Repair from "./../../assets/icons/Repair.png";
import Casting from "./../../assets/icons/Casting.png";
import Manufacturing from "./../../assets/icons/Manufacturing.png";
import Wax from "./../../assets/icons/Wax.png";
import Photography from "./../../assets/icons/Photography.png";
import Ask from "./../../assets/icons/Ask.png";
import ImageHoverComponent from "./ImageHoverComponent.tsx";

interface IServiceCard { }

const Card: React.FunctionComponent<IServiceCard> = () => {
  return (
    <div>
      <Styled.Wrapper>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={DesignCard}
            title={'Custom design'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
          <ImageHoverComponent
            image={StoneSetting}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            image={Cad}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
          <ImageHoverComponent
            image={Engraving}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={Repair}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
          <ImageHoverComponent
            image={Casting}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom >
          <ImageHoverComponent
            image={Manufacturing}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
          <ImageHoverComponent
            image={Wax}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={Photography}
            title={'Stone Setting'}
            text={'We offer Rush or date specific service to get your order done.'}
          />
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
