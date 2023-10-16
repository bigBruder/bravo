import { FC } from "react";
import * as Styled from "./NavArrayMap.styles";

type Props = {
  text: string;
  path: string;
  id: string;
};

interface ComponentProps {
  item: Props;
}

export const NavArrayMap: FC<ComponentProps> = ({ item }) => {
  const handleItemClick = () => {
    //@ts-ignore
    document?.getElementById(item.id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Styled.navArrayItem onClick={handleItemClick}>
      {item.text}
    </Styled.navArrayItem>
  );
};
