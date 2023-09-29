import { Link } from 'react-router-dom';
import { FC } from 'react';
import * as Styled from './NavArrayMap.styles';

type Props = {
  text: string;
  path: string;
  id: string;
}

interface ComponentProps {
  item: Props;
}

export const NavArrayMap: FC<ComponentProps> = ({ item }) => {
  return (
    <Styled.navArrayItem>
      {/* <Link to={item.path}> */}
        {item.text}
      {/* </Link> */}
    </Styled.navArrayItem>
  )
};
