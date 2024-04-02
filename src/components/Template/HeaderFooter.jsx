import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../../images/LOGO.png";
import LogoFooter from "../../images/logoWhite.png";
import style from './HeaderFooter.module.scss';

const HeaderFooter = () => {
  
  return(
    <>
    <header className={style.header}>
      <div >
        <Link to="/" >
          <img className={style.header__logo} src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className={style.header_links}>
        <NavLink  to="/">Accueil</NavLink> 
        <NavLink  to="/propos">A Propos</NavLink>
      </nav>  
    </header>

    <Outlet />

    <footer>
      <div className={style.footer}>
        <Link to="/" >
          <img className={style.logo_img} src={LogoFooter} alt="Logo" />
        </Link>
        <h3 className={style.footer__text}>© 2020 Kasa. All rights reserved</h3>
      </div>    
    </footer>
    </>
    
  )
}
export default HeaderFooter;
