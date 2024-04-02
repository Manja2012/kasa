import Logement from "../../components/Logement/Logement";
import style from "./PageAccueil.module.scss";
import css from "../../sass/base.module.scss";

const PageAccueil = () =>{  
  return(
    <main className={css.container}>
      <div className={style.background}>
        <h1 className={style.title}>Chez vous, partout et ailleurs</h1>
      </div>
      <Logement></Logement>
    </main>
  )
}
export default PageAccueil;