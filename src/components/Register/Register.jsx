import './Register.css';
import logo from '../../images/logo.svg';
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";

function Register({handleRegister}) {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: ''
  });

  function handleChange(evt) {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const {name, password, email} = userData;
    handleRegister(evt, name, password, email);
  }

  return (
    <main className='register'>
      <NavLink className='header__logo register__logo' to='/'><img src={logo} alt="Логотип"/></NavLink>
      <h1 className='register__head'>Добро пожаловать!</h1>
      <form className='register__form' onSubmit={handleSubmit}>
        <label className='register__form_label'>Имя</label>
        <input
          required
          autoComplete='off'
          className='register__form_input'
          type="text"
          name="name"
          onChange={handleChange}/>
        <label className='register__form_label'>E-mail</label>
        <input
          required
          autoComplete='off'
          className='register__form_input'
          type="email"
          name="email"
          onChange={handleChange}/>
        <label className='register__form_label'>Пароль</label>
        <input
          required
          autoComplete='off'
          className='register__form_input error'
          type="password"
          name="password"
          onChange={handleChange}/>
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
