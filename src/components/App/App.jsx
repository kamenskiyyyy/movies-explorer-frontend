import './App.css';
import {Switch, Route, useHistory} from "react-router-dom";
import About from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import {useCallback, useEffect, useState} from "react";
import {statusErrors, statusErrorText, statusSuccessMessage} from "../../utils/constants";
import statusSuccessImage from '../../images/success.svg';
import statusErrorImage from '../../images/error.svg';
import {AppContext} from "../../contexts/AppContext";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {auth} from "../../utils/auth";
import ProtectedRoute from "../../hoc/ProtectedRoute";
import {api} from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);                                                   // Стейт-переменная статус пользователя, вход в систему
  const [infoTooltip, setInfoTooltip] = useState({                                                   // Стейт информационного попапа статуса
    isOpen: false,
    image: statusSuccessImage,
    message: statusSuccessMessage
  });
  const [currentUser, setCurrentUser] = useState({                                                   // Стейт данные текущего пользователя
    name: '',
    email: ''
  });

  // Функция закрытия всех попапов
  const closePopup = useCallback(() => {
    setInfoTooltip({
      ...infoTooltip,
      isOpen: false
    });
  }, [infoTooltip])

  // Обработчик по кнопке Войти
  function handleLogin(evt, password, email) {
    auth.authorize(password, email)
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => handleError(evt.target, err));                                          // По указанным Логину и Паролю пользователь не найден. Проверьте введенные данные и повторите попытку.
  }

  // Обработчик ошибки по кнопке Войти
  function handleError(form, statusError) {
    const errors = statusErrors.filter(error => error.name === form.name)[0].errors;
    const statusErrorMessage = errors.filter(error => error.status === statusError)[0].message;
    setInfoTooltip({
      ...infoTooltip,
      isOpen: true,
      image: statusErrorImage,
      message: statusErrorMessage ? statusErrorMessage : statusErrorText
    });
  }

  // Обработчик по кнопке Зарегистрироваться
  function handleRegister(evt, name, password, email) {
    auth.register(name, password, email)
      .then(() => {
        setInfoTooltip({
          ...infoTooltip,
          isOpen: true,
          image: statusSuccessImage,
          message: statusSuccessMessage
        });
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => handleError(evt.target, err));                                                                // Обработка ошибки handleError();
  }

  // // Обработчик обновления информации пользователя
  function handleUpdateUser(userInfo) {
    api.editProfile(userInfo)
      .then(data => {
        setCurrentUser({...data});
      })
      .catch(err => console.log(err));
  }

  // // Проверка токена при повторном посещении сайта
  const tokenCheck = useCallback(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.getContent(token)
        .then(res => {
          if (res) {
            setLoggedIn(true);
            history.push('/movies')
          }
        })
        .catch(err => {
          console.log(err)
          localStorage.removeItem('jwt')
        })
    } else {
      setLoggedIn(false);
    }
  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  // Выход из аккаунта
  function signOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    history.push('/');
  }

  // Загрузка данных пользователя
  useEffect(() => {
    api.getUserInfo()
      .then(data => {
        setCurrentUser({...data});
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <AppContext.Provider value={{loggedIn, handleLogin, signOut}}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='page__container'>
          <Switch>
            <Route path='/signup'>
              <Register handleRegister={handleRegister}
                        handleError={handleError}/>
            </Route>
            <Route path='/signin'>
              <Login handleLogin={handleLogin}
                     handleError={handleError}/>
            </Route>
            <ProtectedRoute path='/profile'>
              <Header isLogin={loggedIn}/>
              <Profile onUpdateUser={handleUpdateUser} />
            </ProtectedRoute>
            <ProtectedRoute path='/saved-movies'>
              <Header isLogin={loggedIn}/>
              <SavedMovies/>
              <Footer/>
            </ProtectedRoute>
            <ProtectedRoute path='/movies'>
              <Header isLogin={loggedIn}/>
              <Movies/>
              <Footer/>
            </ProtectedRoute>
            <Route exact path="/">
              <Header isLogin={loggedIn}/>
              <About/>
              <Footer/>
            </Route>
            <Route path='*'>
              <NotFound/>
            </Route>
          </Switch>
          <InfoTooltip isOpen={infoTooltip.isOpen}
                       onClose={closePopup}
                       statusImage={infoTooltip.image}
                       statusMessage={infoTooltip.message}/>
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
