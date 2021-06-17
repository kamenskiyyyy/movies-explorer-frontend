import './MoviesCardList.css';
import MoviesCard from "./MoviesCard/MoviesCard";

// Временный костыль для ревью
import one from '../../images/preview/33_word_of_design.jpg';
import two from '../../images/preview/Kinoalmanakh_"100_years_of_design".jpg';
import three from '../../images/preview/Chasing_Banksy.jpg';
import four from '../../images/preview/Basquiat_Explosion_of_Reality.jpg';
import five from '../../images/preview/Running_is_freedom.jpg';
import six from '../../images/preview/Booksellers.jpg';
import seven from '../../images/preview/When_I_think_of_Germany_at_night.jpg';
import eight from '../../images/preview/Gimme_Danger_The_Story_of_Iggy_and_The_Stooges.jpg';
import nine from '../../images/preview/Janice_The_little_girl_is_sad.jpg';
import ten from '../../images/preview/Pull_yourself_together_before_jumping.jpg';
import eleven from '../../images/preview/P.J._Harvey_A_dog_called_money.jpg';
import twelve from '../../images/preview/On_the_Waves_The_Art_of_Sound_in_Cinema.jpg';
const dataMovies = [
  {
    name: '33 слова о дизайне',
    duration: '1ч 30м',
    preview: one,
    saved: false
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    duration: '1ч 47м',
    preview: two,
    saved: true
  },
  {
    name: 'В погоне за Бенкси',
    duration: '1ч 17м',
    preview: three,
    saved: false
  },
  {
    name: 'Баския: Взрыв реальности',
    duration: '1ч 28м',
    preview: four,
    saved: false
  },
  {
    name: 'Бег это свобода',
    duration: '1ч 30м',
    preview: five,
    saved: false
  },
  {
    name: 'Книготорговцы',
    duration: '1ч 39м',
    preview: six,
    saved: true
  },
  {
    name: 'Когда я думаю о Германии ночью',
    duration: '1ч 45м',
    preview: seven,
    saved: false
  },
  {
    name: 'Gimme Danger: История Игги и The Stooges',
    duration: '1ч 48м',
    preview: eight,
    saved: false
  },
  {
    name: 'Дженис: Маленькая девочка грустит',
    duration: '1ч 43м',
    preview: nine,
    saved: false
  },
  {
    name: 'Соберись перед прыжком',
    duration: '1ч 33м',
    preview: ten,
    saved: false
  },
  {
    name: 'Пи Джей Харви: A dog called money',
    duration: '1ч 34м',
    preview: eleven,
    saved: false
  },
  {
    name: 'По волнам: Искусство звука в кино',
    duration: '1ч 34м',
    preview: twelve,
    saved: false
  },
]

function MoviesCardList() {
  return (
    <>
      <section className='movies-card-list'>

        {dataMovies.map((movie, index) => (
          <MoviesCard key={index} name={movie.name} duration={movie.duration} preview={movie.preview}
                      saved={movie.saved}/>
        ))}

      </section>
      <button className='movies-card-list__btn'>Ещё</button>
    </>
  )
}

export default MoviesCardList;
