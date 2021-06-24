import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({isLoading, ...props}) {
  return (
    <main className='movies'>
      <SearchForm isShortMovies={props.isShortMovies}
                  handleShortMovies={props.handleShortMovies}
                  handleSearchSavedMovies={props.handleSearchSavedMovies}
                  isSavedMovies={true}/>
      <MoviesCardList isLoading={isLoading}
                      isSavedMovies={true}
                      movies={props.movies}
                      handleDeleteMovie={props.handleDeleteMovie}/>
    </main>
  )
}

export default SavedMovies;
