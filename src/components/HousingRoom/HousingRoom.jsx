import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../../components/HousingRoom/HousingRoom.module.scss";

const HousingRoom = () => {
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState([
    'gray',
    'gray',
    'gray',
    'gray',
    'gray'
]);

const { housingId } = useParams();
  const next = () => {
    if (index >= logement.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
}

const prev = () => {
    if (index <= 0) {
      setIndex(logement.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
}
const [logement, setLogement] = useState([]);

    useEffect(() => {
      fetch("https://titi.startwin.fr/logements/" + housingId)
      .then(res => res.json())
      .then(data => {
          setLogement(data)
          setStars(stars.fill("orange", 0, data.rating));
      })
}, [housingId, stars]);
    return (
    logement.pictures ?
      <div className={style.logement}>
        <div className={style.logement__slider}>
          <img onClick={prev} src="../../left.svg" alt="Fleche de gauche" className={`${style.logement__slider_left} ${style.arrow}`} />
          <img src={logement.pictures[index]} alt="Images" className={style.logement__slider_image}/>
          <img onClick={next} src="../../right.svg" alt="Fleche de droite" className={`${style.logement__slider_right} ${style.arrow}`}/>
        </div>
        <div className={style.logement__infos}>
          <div className={style.logement__infos_left}>
              <h1>{logement.title}</h1>
              <h2>{logement.location}</h2>
              <div className={style.logement__infos_left__tag}>
                  {logement.tags.map((tag, index) => (
                      <span key={index} className={style.tag}>{tag}</span>
                  ))}
              </div>
          </div>
          <div className={style.logement__infos_right}>
            <div className={style.logement__infos_right__host}>
              <h3>{logement.host.name}</h3>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className={style.logement__infos_right__stars}>
              {stars.map((isOrange, index) => (
                <svg key={index} className={`${style.star} ${isOrange ? style.orange : ''}`} xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
              ))}
            </div>
          </div>
      </div>
      
      </div>

    : <h1>pas de logement</h1>
    );
};

export default HousingRoom;