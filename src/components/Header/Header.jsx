import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from "./Navigation/Navigation";
import {NavLink} from "react-router-dom";

function Header({isLogin}) {
  return (
    <header className='header'>
      <NavLink className='header__logo logo' to='/'><img src={logo} alt="Логотип"/></NavLink>
      <Navigation isLogin={isLogin} />
    </header>
  )
}

export default Header;
