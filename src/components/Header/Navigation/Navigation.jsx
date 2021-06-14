import './Navigation.css';
import {NavLink} from "react-router-dom";
import icon from '../../../images/profile-icon.svg';

function Navigation() {
  return (
    <>
      {/*/!* Меню неавторизованный пользователь *!/ // В настоящий момент скрыто, из-за отсутствия провайдера*/}
      {/*<nav className='nav'>*/}
      {/*  <ul className='nav__list'>*/}
      {/*    <li>*/}
      {/*      <NavLink className='nav__link' to='/signup'>Регистрация</NavLink>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <NavLink className='nav__link nav__link_green' to='/signin'>Войти</NavLink>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}

      {/* Меню авторизованный пользователь */}
      <nav className='nav'>
        <ul className='nav__list'>
          <li><NavLink activeClassName='nav__link_active' className='nav__link' to='/movies'>Фильмы</NavLink></li>
          <li><NavLink activeClassName='nav__link_active' className='nav__link' to='/saved-movies'>Сохраненные фильмы</NavLink></li>
        </ul>
        <ul className='nav__list'>
          <li>
            <NavLink className='nav__link' to='/signup'>Аккаунт <img className='nav__link_icon' src={icon} alt="Иконка профиля"/></NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;
