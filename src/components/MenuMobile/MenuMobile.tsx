import { FC, memo } from "react";
import * as Styled from "./MenuMobile.styles";
import burgerClose from "./../../assets/icons/burger_close.svg";
import { NavArrayMap } from "../mapComponents/NavArrayMap";
import { navArray } from "../../constants";


type Props = {
  setIsMenuOpen: () => void;
};

export const MenuMobile: FC<Props> = memo(({ setIsMenuOpen }) => {
  return (
    <Styled.Menu>
      <Styled.Header>
        <Styled.Image
          src={burgerClose}
          alt={'Close'}
          onClick={setIsMenuOpen}
        />
      </Styled.Header>
      <Styled.ActionsList>
        {navArray.map(item => (
          <NavArrayMap item={item} key={item.id} />
        ))}
      </Styled.ActionsList>
    </Styled.Menu>
  )
});