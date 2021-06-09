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

function App() {
  return (
    <div className='page__container'>
      <Header/>
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
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
