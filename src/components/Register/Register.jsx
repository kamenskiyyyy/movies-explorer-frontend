import './Register.css';
import logo from '../../images/logo.svg';
import {Link, NavLink} from "react-router-dom";

function Register() {
  return (
    <main className='register'>
      <NavLink className='header__logo' to='/'><img src={logo} alt="Логотип"/></NavLink>
      <h1 className='register__head'>Добро пожаловать!</h1>
      <form className='register__form'>
        <label className='register__form_label'>Имя</label>
        <input
          required
          autoComplete='off'
          className='register__form_input'
          type="text"
          name="name"/>
        <label className='register__form_label'>E-mail</label>
        <input
          required
          autoComplete='off'
          className='register__form_input'
          type="email"
          name="email"/>
        <label className='register__form_label'>Пароль</label>
        <input
          required
          autoComplete='off'
          className='register__form_input error'
          type="password"
          name="password"/>
        <span className='register__form_span'>Что-то пошло не так...</span>
        <button type='submit' className='register_btn'>Зарегистрироваться</button>
      </form>
      <div className='register__in'>
        <p>Уже зарегистрированы?</p>
        <Link to='/signin'>Войти</Link>
      </div>
    </main>
  )
}

export default Register;
