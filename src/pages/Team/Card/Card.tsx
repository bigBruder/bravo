//@ts-nocheck
import styles from "./Card.module.scss";

interface IProps {
  x?: object;
  y?: object;
  index?: number;
}

// interface IProps {
//   titleImage: string;
//   role?: string;
//   description?: string;
//   avatar: string;
// }

const Card: React.FunctionComponent<IProps> = ({ x, y }) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_image} src={x?.fields?.file.url} />
      <p className={styles.card_title}>{x?.fields.title}</p>
      <p className={styles.card_role}>{y}</p>
      <p className={styles.card_description}>{x?.fields.description}</p>
    </div>
  );
};
// const Card: FC<IProps> = ({ titleImage, description = '', role = '', avatar }) => {
//   return (
//     <div className={styles.card}>
//       <img src={avatar} className={styles.card_image}/>
//       <img src={titleImage} />
//       <p className={styles.card_role}>{role}</p>
//       <p className={styles.card_description}>{description}</p>
//     </div>
//   );
// };

export default Card;
