import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main className='movies'>
      <SearchForm/>
      {/*<Preloader />*/}
      <MoviesCardList lk={true}/>
    </main>
  )
}

export default SavedMovies;
