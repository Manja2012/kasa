import { Link } from "react-router-dom";
import style from "./LogementCard.module.scss";
const LogementCard = ({ logement }) => {
    return (
      <Link to={"/housing/" + logement.id} className={style.card_link}>
        <div className={style.card} key={logement.id}>
          <img className={style.card_image} src={logement.cover} alt={logement.title} />
          <div className={style.card_item}>
            <h2 className={style.card_text}>{logement.title}</h2>
          </div>
        </div>
      </Link>
    );
};

export default LogementCard;