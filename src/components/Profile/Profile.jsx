import './Profile.css';
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {AppContext} from "../../contexts/AppContext";

function Profile({onUpdateUser}) {
  const value = useContext(AppContext);
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [isEdit, setIsEdit] = useState(false);

  function handleOnEdit() {
    setIsEdit(!isEdit);
  }

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({evt, name, email});
    setIsEdit(false);
  }

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <main className='profile'>
      <h1 className='profile__head'>Привет, {currentUser.name}!</h1>
      <form onSubmit={handleSubmit} className='profile__info'>
        <div className='profile__info_item'>
          <label className='profile__info_item_head'>Имя</label>
          <input
            className={`profile__info_item_desc ${isEdit && 'profile__info_item_desc__active'}`}
            value={name}
            name="name"
            placeholder="Введите имя"
            onChange={handleChangeName}
            autoComplete="off"
            disabled={!isEdit}
          />
        </div>
        <div className='profile__info_item'>
          <label className='profile__info_item_head'>E-mail</label>
          <input
            className={`profile__info_item_desc ${isEdit && 'profile__info_item_desc__active'}`}
            name="email"
            placeholder="Введите почту"
            value={email}
            onChange={handleChangeEmail}
            autoComplete="off"
            disabled={!isEdit}
          />
        </div>
      </form>
      <div className='profile__setup'>
        {isEdit ? <button type="submit" onClick={handleSubmit} className='profile__setup_edit'>Сохранить</button>
          : <button type="button" onClick={handleOnEdit} className='profile__setup_edit'>Редактировать</button>}
        <button type="button" onClick={value.signOut} className='profile__setup_out'>Выйти из аккаунта</button>
      </div>
    </main>
  )
}

export default Profile;
