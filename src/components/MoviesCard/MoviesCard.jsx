import './MoviesCard.css';
import {useCallback, useEffect, useState} from "react";
import image from '../../images/notFoundImage.jpg';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);

  const film = {
    country: props.movie.country || 'Не указано',
    director: props.movie.director || 'Не указано',
    duration: props.movie.duration || 0,
    year: props.movie.year || 'Не указано',
    description: props.movie.description || 'Не указано',
    image: `${props.movie.image === null ? `${image}` : `https://api.nomoreparties.co${props.movie.image?.url}`}`,
    trailer: props.movie?.trailerLink,
    nameRU: props.movie.nameRU || 'Не указано',
    nameEN: props.movie.nameEN || 'Не указано',
    thumbnail: `https://api.nomoreparties.co${props.movie.image?.formats?.thumbnail?.url}`,
    movieId: props.movie.id,
  }

  const formattedTime = `${Math.trunc(film.duration / 60)}ч ${film.duration % 60}м`;

  const isLikedMovie = useCallback(() => {
    if (localStorage.getItem('savedMovies')) {
      let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
      if (savedMovies.some(movie => movie.nameRU === props.movie.nameRU)) {
        setIsSaved(true);
      }
    }
  }, [props.movie.nameRU])

  function handleSaveMovie() {
    props.handleSaveMovie(film);
    setIsSaved(true);
  }

  function handleDeleteMovie() {
    setIsSaved(false);
    props.handleDeleteMovie(props.movie._id);
  }

  function handleDislikeMovie() {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const card = savedMovies.find(movie => movie.nameRU === props.movie.nameRU);
    props.handleDeleteMovie(card._id);
    setIsSaved(false);
  }

  useEffect(() => {
    isLikedMovie();
  }, [isLikedMovie]);

  return (
    <div className='movies-card'>
      <div className='movies-card__item'>
        <a rel="noreferrer" target='_blank' href={props.isSavedMovies ? props.movie.trailer : props.movie.trailerLink}>
          <img className='movies-card__item_img' src={props.isSavedMovies ? props.movie.image : film.image}
               alt={`Картинка фильма ${props.movie.nameRU}`}/></a>
        {props.isSavedMovies ?
          <button type='button' className='movies-card__item_delete' onClick={handleDeleteMovie}/>
          : <button type='button' className={`${isSaved ? 'movies-card__item_saved' : 'movies-card__item_save'}`}
                    onClick={!isSaved ? handleSaveMovie : handleDislikeMovie}>{!isSaved && 'Сохранить'}</button>}
      </div>
      <div className='movies-card__item'>
        <h3 className='movies-card__item_head'>{props.movie.nameRU}</h3>
        <p className='movies-card__item_dur'>{`${formattedTime}`}</p>
      </div>
    </div>
  )
}

export default MoviesCard;
