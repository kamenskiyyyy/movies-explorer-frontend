import './NavBar.css';
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <>
      {/* Меню неавторизованный пользователь */}
      <nav className='nav'>
        <ul className='nav__list'>
          <li>
            <NavLink className='nav__link' to='/signup'>Регистрация</NavLink>
          </li>
        </ul>
        <ul className='nav__list'>
          <li>
            <NavLink className='nav__link nav__link_green' to='/signin'>Войти</NavLink>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default NavBar;
