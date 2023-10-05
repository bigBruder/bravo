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
            text={'Upload your designs via our portal, and our skilled team will bring them to life'}
          />
          <ImageHoverComponent
            image={StoneSetting}
            title={'Stone Setting'}
            text={'From prong to intricate French pavé, our skilled jewelers ensure flawless settings, perfecting every detail.'}
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            image={Cad}
            title={'CAD'}
            text={'Our CAD designers are jewelers, crafting designs that are both beautiful and practical, with a keen eye for precision.'}
          />
          <ImageHoverComponent
            image={Engraving}
            title={'Engraving'}
            text={'Choose from hand, laser, or etching for exquisite detailing by our top engraver.'}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={Repair}
            title={'Repair'}
            text={'We offer a wide range of repair services, from minor fixes to major restorations, guaranteeing your jewelry is in expert hands.'}
          />
          <ImageHoverComponent
            image={Casting}
            title={'Casting'}
            text={'We offer casting services for various metals, catering to both small and large items. Need it fast? Our expedited orders ensure you get your creations on time.'}
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom >
          <ImageHoverComponent
            image={Manufacturing}
            title={'Manufacturing'}
            text={'We offer start-to-finish manufacturing services, ensuring top-notch quality in every step of the process for your small-scale production needs."'}
          />
          <ImageHoverComponent
            image={Wax}
            title={'Wax Prototype'}
            text={'Our wax growing services deliver impeccable smoothness. With a lightning-fast 24-hour turnaround, your designs come to life with precision and speed."'}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={Photography}
            title={'Photography'}
            text={'Our state-of-the-art setup and skilled photographer capture the essence of your jewelry, ensuring stunning visuals'}
          />
          <img src={Ask} />
        </Styled.GroupCardTop>
      </Styled.Wrapper>
      <Styled.WrapperSmall>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            image={Cad}
            title={'CAD'}
            text={'Our CAD designers are jewelers, crafting designs that are both beautiful and practical, with a keen eye for precision.'}
          />
          <ImageHoverComponent
            image={DesignCard}
            title={'Custom design'}
            text={'Upload your designs via our portal, and our skilled team will bring them to life'}
          />
          <ImageHoverComponent
            image={Engraving}
            title={'Engraving'}
            text={'Choose from hand, laser, or etching for exquisite detailing by our top engraver.'}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={Repair}
            title={'Repair'}
            text={'We offer a wide range of repair services, from minor fixes to major restorations, guaranteeing your jewelry is in expert hands.'}
          />
          <ImageHoverComponent
            image={Casting}
            title={'Casting'}
            text={'We offer casting services for various metals, catering to both small and large items. Need it fast? Our expedited orders ensure you get your creations on time.'}
          />
          <ImageHoverComponent
            image={StoneSetting}
            title={'Stone Setting'}
            text={'From prong to intricate French pavé, our skilled jewelers ensure flawless settings, perfecting every detail.'}
          />
          <img src={Ask} />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom >
          <ImageHoverComponent
            image={Manufacturing}
            title={'Manufacturing'}
            text={'We offer start-to-finish manufacturing services, ensuring top-notch quality in every step of the process for your small-scale production needs."'}
          />
          <ImageHoverComponent
            image={Photography}
            title={'Photography'}
            text={'Our state-of-the-art setup and skilled photographer capture the essence of your jewelry, ensuring stunning visuals'}
          />
          <ImageHoverComponent
            image={Wax}
            title={'Wax Prototype'}
            text={'Our wax growing services deliver impeccable smoothness. With a lightning-fast 24-hour turnaround, your designs come to life with precision and speed."'}
          />
        </Styled.GroupCardBottom>
      </Styled.WrapperSmall>
    </div>
  );
};
export default Card;
