import './Navigation.css';
import {NavLink} from "react-router-dom";
import icon from '../../../images/profile-icon.svg';
import {useState} from "react";

function Navigation({isLogin}) {
  const [isNavOpened, setIsNavOpened] = useState(false);                                             // Стейт мобильная навигация открыта

  // Обработчик клика по меню
  function handleNavClick() {
    setIsNavOpened(!isNavOpened);
  }

  function handleOffNavClick() {
    setIsNavOpened(false);
  }

  return (
    <>
      {isLogin
        ? <>
          <button type='button' className={`nav__btn ${isNavOpened && 'nav__btn_close'}`} onClick={handleNavClick}/>
          <nav className={`nav ${isNavOpened && 'nav__mobile'}`}>
            <ul className={`nav__list ${isNavOpened && 'nav__list_mobile'}`}>
              {isNavOpened &&
              <li><NavLink exact activeClassName='nav__link_active' onClick={handleOffNavClick}
                           className={`nav__link ${isNavOpened && 'nav__link_mobile'}`} to='/'>Главная</NavLink></li>}
              <li><NavLink activeClassName='nav__link_active' onClick={handleOffNavClick}
                           className={`nav__link ${isNavOpened && 'nav__link_mobile'}`} to='/movies'>Фильмы</NavLink>
              </li>
              <li><NavLink activeClassName='nav__link_active' onClick={handleOffNavClick}
                           className={`nav__link ${isNavOpened && 'nav__link_mobile'}`} to='/saved-movies'>Сохраненные
                фильмы</NavLink></li>
            </ul>
            <ul className={`nav__list ${isNavOpened && 'nav__list_mobile'}`}>
              <li>
                <NavLink
                  activeClassName='nav__link_active'
                  onClick={handleOffNavClick}
                  className={`nav__link ${isNavOpened && 'nav__link_mobile'}`}
                  to='/profile'
                >Аккаунт <img className='nav__link_icon' src={icon} alt="Иконка профиля"/></NavLink>
              </li>
            </ul>
          </nav>
        </>
        : <nav className='nav guest'>
          <ul className='nav__list'>
            <li>
              <NavLink className='nav__link' to='/signup'>Регистрация</NavLink>
            </li>
            <li>
              <NavLink className='nav__link nav__link_green' to='/signin'>Войти</NavLink>
            </li>
          </ul>
        </nav>
      }
    </>
  )
}

export default Navigation;
