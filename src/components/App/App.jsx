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

function App() {
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
          <Profile/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='/movies'>
          <Movies/>
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

    </div>
  );
}

export default App;
