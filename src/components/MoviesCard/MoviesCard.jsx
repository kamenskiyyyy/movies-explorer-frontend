import './MoviesCard.css';
import './Movie.css';
import {useCallback, useEffect, useState} from "react";
import image from '../../images/notFoundImage.jpg';

function MoviesCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  console.log(props.movie._id)

  function handleDislikeMovie() {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const card = savedMovies.find(movie => movie.nameRU === props.movie.nameRU);
    props.handleDeleteMovie(card._id);
    setIsSaved(false);
  }

  function handlePopupClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    isLikedMovie();
  }, [isLikedMovie]);

  return (
    <>
      <div className='movies-card'>
        <div className='movies-card__item'>
          <img onClick={handlePopupClick} className='movies-card__item_img'
               src={props.isSavedMovies ? props.movie.image : film.image}
               alt={`Картинка фильма ${props.movie.nameRU}`}/>
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

      <div className={`popup ${isOpen && 'popup_opened'} popup_type_${props.name}`} onClick={(e) => {
        if (e.target.classList.contains('popup')) handlePopupClick() }}>
        <div className="movie__container">
          {!props.isLoading &&
          <button type="button" className="button__modal button_type_close-popup" onClick={handlePopupClick}/>}
          <section className='movie'>
            <h2 className='movie__head'>Фильм</h2>
            <div className='movie__table'>
              <div>
                <h3 className='movie__table_head'>{props.movie.nameRU}</h3>
                <p className='movie__table_subtitle'>{props.movie.nameEN}</p>
                <p className='movie__table_desc'>{props.movie.description}</p>
                <div className='movie__table min'>
                  <div>
                    <h4 className='movie__table_subtitle mini_sub'>Год производства</h4>
                    <h4 className='movie__table_subtitle mini_sub'>Страна</h4>
                    <h4 className='movie__table_subtitle mini_sub'>Режиссер</h4>
                  </div>
                  <div>
                    <h4 className='movie__table_desc mini_desc'>{props.movie.year}</h4>
                    <h4 className='movie__table_desc mini_desc'>{props.movie.country}</h4>
                    <h4 className='movie__table_desc mini_desc'>{props.movie.director}</h4>
                  </div>
                </div>
              </div>
              <div>
                <img src={props.isSavedMovies ? props.movie.image : film.image}
                     alt={`Картинка фильма ${props.movie.nameRU}`}
                     className='movie__table_avatar'/>
                <a className='movie__table_trailer' target='_blank' rel="noreferrer"
                   href={props.movie.trailerLink}>&#10148; Трейлер</a>
                {props.isSavedMovies ?
                  <button type='button' className='movie__table_save delete' onClick={handleDeleteMovie}>Удалить</button>
                  : <button type='button' className={`${isSaved ? 'movie__table_save saved' : 'movie__table_save'}`}
                            onClick={!isSaved ? handleSaveMovie : handleDislikeMovie}>{!isSaved ? `Сохранить` : 'Сохранено'}</button>}
              </div>
            </div>
          </section>
        </div>
      </div>

    </>
  )
}

export default MoviesCard;
