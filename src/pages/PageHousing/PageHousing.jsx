
import HousingRoom from "../../components/HousingRoom/HousingRoom";
import Accordion from '../../components/Accordion/Accordion';
import style from "./PageHousing.module.scss";
import css from "../../sass/base.module.scss";


const PageHousing = (logement) =>{  
  

  return(
    <main className={css.container}>
      <HousingRoom logement={logement}/>
      <div className={style.logement__accordions}>
        <Accordion title="Description" content={logement.description} />
        <Accordion title="Equipements" content={logement.equipments} />
      </div>
    </main>
  )
}
export default PageHousing;
