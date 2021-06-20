import './App.css';
import {Switch, Route} from "react-router-dom";
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
import {useCallback, useState} from "react";
import {statusSuccessMessage} from "../../utils/constants";
import statusSuccessImage from '../../images/success.svg';

function App() {
  const [infoTooltip, setInfoTooltip] = useState({                                                   // Стейт информационного попапа статуса
    isOpen: false,
    image: statusSuccessImage,
    message: statusSuccessMessage
  });

  // Функция закрытия всех попапов
  const closePopup = useCallback(() => {
    setInfoTooltip({
      ...infoTooltip,
      isOpen: false
    });
  }, [infoTooltip])

  return (
    <div className='page__container'>
      <Switch>
        <Route path='/signup'>
          <Register/>
        </Route>
        <Route path='/signin'>
          <Login/>
        </Route>
        <Route path='/profile'>
          <Header/>
          <Profile/>
        </Route>
        <Route path='/saved-movies'>
          <Header/>
          <SavedMovies/>
          <Footer/>
        </Route>
        <Route path='/movies'>
          <Header/>
          <Movies/>
          <Footer/>
        </Route>
        <Route exact path="/">
          <Header/>
          <About/>
          <Footer/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      <InfoTooltip
        isOpen={infoTooltip.isOpen}
        onClose={closePopup}
        statusImage={infoTooltip.image}
        statusMessage={infoTooltip.message}
      />
    </div>
  );
}

export default App;
