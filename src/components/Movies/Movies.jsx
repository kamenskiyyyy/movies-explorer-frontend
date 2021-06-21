import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({isLoading, ...props}) {
  return (
    <main className='movies'>
      <SearchForm handleSearchMovies={props.handleSearchMovies}
                  isShortMovies={props.isShortMovies}
                  handleShortMovies={props.handleShortMovies}/>
      <MoviesCardList isLoading={isLoading}
                      movies={props.movies}
                      moviesError={props.moviesError}
                      notFound={props.notFound}
                      handleSaveMovie={props.handleSaveMovie}
                      handleDeleteMovie={props.handleDeleteMovie}/>
    </main>
  )
}

export default Movies;
