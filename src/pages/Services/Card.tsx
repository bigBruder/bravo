//@ts-nocheck
import * as Styled from "./Card.style";
// import DesignCard from "../../assets/images/Services/1.png";
// import StoneSetting from "./../../assets/images/Services/2.png";
// import Cad from "../../assets/images/Services/3.png";
// import Engraving from "./../../assets/images/Services/4.png";
// import Repair from "./../../assets/images/Services/5.png";
// import Casting from "./../../assets/images/Services/6.png";
// import Manufacturing from "./../../assets/images/Services/7.png";
// import Wax from "./../../assets/images/Services/8.png";
// import Photography from "./../../assets/images/Services/9.png";
// import Ask from "./../../assets/icons/Ask.png";
// import AskResponse from "../../assets/icons/AskResponce.png";
import ImageHoverComponent from "./ImageHoverComponent.tsx";
import useContentful from "../../hooks/useContentful";
import { ServiceContent } from "../../constants.ts";
interface IServiceCard {}

const Card: React.FunctionComponent<IServiceCard> = () => {
  const { data, loading, error } = useContentful(ServiceContent);

  if (loading) {
    return "";
  }
  if (error) {
    console.log("error", error);
    return null;
  }
  if (data) {
    console.log("data", data);
  }
  return (
    <div>
      <Styled.Wrapper>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={data?.cards[0].fields.file.url}
            title={data?.cards[0].fields.title}
            text={data?.cards[0].fields.description}
            // title={"Custom design"}
            // text={
            //   "Upload your designs via our portal, and our skilled team will bring them to life"
            // }
          />
          <ImageHoverComponent
            image={data?.cards[1].fields.file.url}
            title={data?.cards[1].fields.title}
            text={data?.cards[1].fields.description}
            // image={StoneSetting}
            // title={"Stone Setting"}
            // text={
            //   "From prong to intricate French pavé, our skilled jewelers ensure flawless settings, perfecting every detail."
            // }
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            image={data?.cards[2].fields.file.url}
            title={data?.cards[2].fields.title}
            text={data?.cards[2].fields.description}
            // image={Cad}
            // title={"CAD"}
            // text={
            //   "Our CAD designers are jewelers, crafting designs that are both beautiful and practical, with a keen eye for precision."
            // }
          />
          <ImageHoverComponent
            image={data?.cards[3].fields.file.url}
            title={data?.cards[3].fields.title}
            text={data?.cards[3].fields.description}
            // image={Engraving}
            // title={"Engraving"}
            // text={
            //   "Choose from hand, laser, or etching for exquisite detailing by our top engraver."
            // }
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={data?.cards[4].fields.file.url}
            title={data?.cards[4].fields.title}
            text={data?.cards[4].fields.description}
            // image={Repair}
            // title={"Repair"}
            // text={
            //   "We offer a wide range of repair services, from minor fixes to major restorations, guaranteeing your jewelry is in expert hands."
            // }
          />
          <ImageHoverComponent
            image={data?.cards[5].fields.file.url}
            title={data?.cards[5].fields.title}
            text={data?.cards[5].fields.description}
            // image={Casting}
            // title={"Casting"}
            // text={
            //   "We offer casting services for various metals, catering to both small and large items. Need it fast? Our expedited orders ensure you get your creations on time."
            // }
          />
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            image={data?.cards[6].fields.file.url}
            title={data?.cards[6].fields.title}
            text={data?.cards[6].fields.description}
            // image={Manufacturing}
            // title={"Manufacturing"}
            // text={
            //   'We offer start-to-finish manufacturing services, ensuring top-notch quality in every step of the process for your small-scale production needs.'
            // }
          />
          <ImageHoverComponent
            image={data?.cards[7].fields.file.url}
            title={data?.cards[7].fields.title}
            text={data?.cards[7].fields.description}
            // image={Wax}
            // title={"Wax Prototype"}
            // text={
            //   'Our wax growing services deliver impeccable smoothness. With a lightning-fast 24-hour turnaround, your designs come to life with precision and speed."'
            // }
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            image={data?.cards[8].fields.file.url}
            title={data?.cards[8].fields.title}
            text={data?.cards[8].fields.description}
          />
          <ImageHoverComponent
            image={data?.cards[9].fields.file.url}
            title={data?.cards[9].fields.title}
            text={data?.cards[9].fields.description}
            //@ts-ignore
            askCard={true}
          />
          {/* <img src={Ask} /> */}
        </Styled.GroupCardTop>
      </Styled.Wrapper>
      <Styled.WrapperSmall>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            // image={Cad}
            // title={"CAD"}
            // text={
            //   "Our CAD designers are jewelers, crafting designs that are both beautiful and practical, with a keen eye for precision."
            // }
            image={data?.cards[2].fields.file.url}
            title={data?.cards[2].fields.title}
            text={data?.cards[2].fields.description}
          />
          <ImageHoverComponent
            // image={DesignCard}
            // title={"Custom design"}
            // text={
            //   "Upload your designs via our portal, and our skilled team will bring them to life"
            // }
            image={data?.cards[0].fields.file.url}
            title={data?.cards[0].fields.title}
            text={data?.cards[0].fields.description}
          />
          <ImageHoverComponent
            // image={Engraving}
            // title={"Engraving"}
            // text={
            //   "Choose from hand, laser, or etching for exquisite detailing by our top engraver."
            // }
            image={data?.cards[3].fields.file.url}
            title={data?.cards[3].fields.title}
            text={data?.cards[3].fields.description}
          />
        </Styled.GroupCardBottom>
        <Styled.GroupCardTop>
          <ImageHoverComponent
            // image={Repair}
            // title={"Repair"}
            // text={
            //   "We offer a wide range of repair services, from minor fixes to major restorations, guaranteeing your jewelry is in expert hands."
            // }
            image={data?.cards[4].fields.file.url}
            title={data?.cards[4].fields.title}
            text={data?.cards[4].fields.description}
          />
          <ImageHoverComponent
            // image={Casting}
            // title={"Casting"}
            // text={
            //   "We offer casting services for various metals, catering to both small and large items. Need it fast? Our expedited orders ensure you get your creations on time."
            // }
            image={data?.cards[5].fields.file.url}
            title={data?.cards[5].fields.title}
            text={data?.cards[5].fields.description}
          />
          <ImageHoverComponent
            // image={StoneSetting}
            // title={"Stone Setting"}
            // text={
            //   "From prong to intricate French pavé, our skilled jewelers ensure flawless settings, perfecting every detail."
            // }
            image={data?.cards[1].fields.file.url}
            title={data?.cards[1].fields.title}
            text={data?.cards[1].fields.description}
          />
          <ImageHoverComponent
            // image={AskResponse}
            // title={"Not Sure? Ask us"}
            // text={
            //   "We offer Rush or date specific service to get your order done at the time you need it."
            // }
            // //@ts-ignore
            // askCard={true}
            image={data?.cards[9].fields.file.url}
            title={data?.cards[9].fields.title}
            text={data?.cards[9].fields.description}
            //@ts-ignore
            askCard={true}
          />
          {/* <img src={Ask} /> */}
        </Styled.GroupCardTop>
        <Styled.GroupCardBottom>
          <ImageHoverComponent
            // image={Manufacturing}
            // title={"Manufacturing"}
            // text={
            //   'We offer start-to-finish manufacturing services, ensuring top-notch quality in every step of the process for your small-scale production needs."'
            // }
            image={data?.cards[6].fields.file.url}
            title={data?.cards[6].fields.title}
            text={data?.cards[6].fields.description}
          />
          <ImageHoverComponent
            // image={Photography}
            // title={"Photography"}
            // text={
            //   "Our state-of-the-art setup and skilled photographer capture the essence of your jewelry, ensuring stunning visuals"
            // }
            image={data?.cards[8].fields.file.url}
            title={data?.cards[8].fields.title}
            text={data?.cards[8].fields.description}
          />
          <ImageHoverComponent
            // image={Wax}
            // title={"Wax Prototype"}
            // text={
            //   'Our wax growing services deliver impeccable smoothness. With a lightning-fast 24-hour turnaround, your designs come to life with precision and speed."'
            // }
            image={data?.cards[7].fields.file.url}
            title={data?.cards[7].fields.title}
            text={data?.cards[7].fields.description}
          />
        </Styled.GroupCardBottom>
      </Styled.WrapperSmall>
    </div>
  );
};
export default Card;
