import './Profile.css';
import {useContext, useRef, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {AppContext} from "../../contexts/AppContext";
import {useValidationForm} from "../../hooks/useValidationForm";

function Profile(props) {
  const value = useContext(AppContext);
  // const currentUser = useContext(CurrentUserContext);
  // const [name, setName] = useState(currentUser.name);
  // const [email, setEmail] = useState(currentUser.email);
  const [isEdit, setIsEdit] = useState(false);

  //
  function handleOnEdit() {
    setIsEdit(!isEdit);
  }

  //
  // function handleChangeName(evt) {
  //   setName(evt.target.value);
  // }
  //
  // function handleChangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }
  //
  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   onUpdateUser({evt, name, email});
  //   setIsEdit(false);
  // }
  //
  // useEffect(() => {
  //   setName(currentUser.name);
  //   setEmail(currentUser.email);
  // }, [currentUser]);

  const {values, handleErrors, errors, isValid} = useValidationForm();

  const inputRef = useRef();

  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(e, values.name || currentUser.name, values.email || currentUser.email);
    setIsEdit(false);
  }

  return (
    <main className='profile'>
      <h1 className='profile__head'>Привет, {currentUser.name}!</h1>
      <form name='login-form' onSubmit={handleSubmit} className='profile__info'>
        <div className='profile__info_item'>
          <label className='profile__info_item_head'>Имя</label>
          <div>
            <input
              type="text"
              required
              className={`profile__info_item_desc ${isEdit && 'profile__info_item_desc__active'}`}
              name="name"
              placeholder="Введите имя"
              onChange={handleErrors}
              autoComplete="off"
              ref={inputRef}
              minLength="3"
              disabled={!isEdit}
              defaultValue={currentUser.name}
            />
            <span className='register__form_span profile__info_item_span'>{errors.name}</span>
          </div>
        </div>
        <div className='profile__info_item'>
          <label className='profile__info_item_head'>E-mail</label>
          <div>
            <input
              type="email"
              required
              className={`profile__info_item_desc ${isEdit && 'profile__info_item_desc__active'}`}
              name="email"
              placeholder="Введите почту"
              defaultValue={currentUser.email}
              ref={inputRef}
              onChange={handleErrors}
              autoComplete="off"
              disabled={!isEdit}
            />
            <span className='register__form_span profile__info_item_span'>{errors.email}</span>
          </div>
        </div>
      </form>
      <div className='profile__setup'>
        {isEdit ? <button type="submit" onClick={handleSubmit} disabled={!isValid}
                          className={`profile__setup_edit ${!isValid && 'profile__setup_edit_disabled'}`}>Сохранить</button>
          : <button type="button" onClick={handleOnEdit} className='profile__setup_edit'>Редактировать</button>}
        <button type="button" onClick={value.signOut} className='profile__setup_out'>Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile;
