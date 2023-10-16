import { FC, memo } from "react";
import * as Styled from "./MenuMobile.styles";
import burgerClose from "./../../assets/icons/burger_close.svg";
import { NavArrayMap } from "../mapComponents/NavArrayMap";
import { navArray } from "../../constants";
// import { useRef } from "react";
type Props = {
  setIsMenuOpen: () => void;
};

export const MenuMobile: FC<Props> = memo(({ setIsMenuOpen }) => {
  return (
    <Styled.Menu>
      <Styled.Header>
        <Styled.Image src={burgerClose} alt={"Close"} onClick={setIsMenuOpen} />
      </Styled.Header>
      <Styled.ActionsList>
        {navArray.map((item) => {
          // const itemRef = useRef<HTMLDivElement | null>(null);
          // const handleItemClick = () => {
          //   //@ts-ignore
          //   document?.getElementById(item.id).scrollIntoView({
          //     behavior: "smooth",
          //   });
          // };
          return <NavArrayMap item={item} key={item.text} />;
        })}
      </Styled.ActionsList>
    </Styled.Menu>
  );
});
