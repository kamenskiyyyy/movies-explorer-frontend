import logo from '../../images/logo.svg';
import './Header.css';
import NavBar from "./NavBar/NavBar";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <header className='header'>
      <NavLink to='/'><img src={logo} alt="Логотип"/></NavLink>
      <NavBar />
    </header>
  )
}

export default Header;
