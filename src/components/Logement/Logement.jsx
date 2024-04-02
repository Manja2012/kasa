import { useEffect, useState } from 'react';
import LogementCard from "../LogementCard/LogementCard";
import style from "./Logement.module.scss"
import css from "../../sass/base.module.scss"
function Logement() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        fetch("https://titi.startwin.fr/logements")
            .then(res => res.json())
            .then(data => setLogements(data))
            .catch(error => console.log(error))
    }, [])

    return (
      <div className={css.container}>
        <div className={style.container_card} >
          {logements.map((logement,index) => (
            <LogementCard key={index} logement={logement} />
          ))}
        </div>
      </div>
    );
}

export default Logement;
