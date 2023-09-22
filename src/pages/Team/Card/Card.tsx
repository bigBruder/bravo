import styles from './Card.module.scss';
import {FC} from "react";

interface IProps {
  titleImage: string;
  role?: string;
  description?: string;
  avatar: string;
}

const Card: FC<IProps> = ({ titleImage, description = '', role = '', avatar }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} className={styles.card_image}/>
      <img src={titleImage} />
      <p className={styles.card_role}>{role}</p>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
};

export default Card;
