import './Register.css';
import logo from '../../images/logo.svg';
import {Link, NavLink} from "react-router-dom";
import {useValidationForm} from "../../hooks/useValidationForm";

function Register(props) {
  const {values, handleErrors, errors, isValid} = useValidationForm();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(e, values.name, values.email, values.password);
  }

  return (
    <main className='register'>
      <NavLink className='header__logo register__logo' to='/'><img src={logo} alt="Логотип"/></NavLink>
      <h1 className='register__head'>Добро пожаловать!</h1>
      <form name='register-form' className='register__form' onSubmit={handleSubmit}>
        <label className='register__form_label'>Имя</label>
        <input
          required
          autoComplete='off'
          className={`register__form_input ${errors.name && 'error'}`}
          type="text"
          name="name"
          value={values.name || ''}
          onChange={handleErrors}/>
        <span className='register__form_span'>{errors.name}</span>
        <label className='register__form_label'>E-mail</label>
        <input
          required
          autoComplete='off'
          className={`register__form_input ${errors.email && 'error'}`}
          type="email"
          name="email"
          value={values.email || ''}
          onChange={handleErrors}/>
        <span className='register__form_span'>{errors.email}</span>
        <label className='register__form_label'>Пароль</label>
        <input
          required
          autoComplete='off'
          className={`register__form_input ${errors.password && 'error'}`}
          type="password"
          name="password"
          value={values.password || ''}
          onChange={handleErrors}/>
        <span className='register__form_span'>{errors.password}</span>
        <button type='submit' className={`register_btn ${!isValid && 'register_btn-disabled'}`}
                disabled={!isValid}>Зарегистрироваться
        </button>
      </form>
      <div className='register__in'>
        <p>Уже зарегистрированы?</p>
        <Link to='/signin'>Войти</Link>
      </div>
    </main>
  )
}

export default Register;
