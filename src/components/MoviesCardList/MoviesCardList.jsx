import './MoviesCardList.css';
import MoviesCard from "./MoviesCard/MoviesCard";
import dataMovies from "../../vendor/dataMovies";

function MoviesCardList(props) {
  return (
    <>
      <section className='movies-card-list'>

        {dataMovies.map((movie, index) => (
          <MoviesCard key={index} name={movie.name} duration={movie.duration} preview={movie.preview}
                      saved={movie.saved}  lk={props.lk} />
        ))}

      </section>
      <button className='movies-card-list__btn'>Ещё</button>
    </>
  )
}

export default MoviesCardList;
