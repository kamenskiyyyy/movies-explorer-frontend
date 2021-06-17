import './MoviesCard.css';

function MoviesCard({preview, name, duration, saved}) {
  return (
    <div className='movies-card'>
      <div className='movies-card__item'>
        <img className='movies-card__item_img' src={`${preview}`} alt={name}/>
        {saved ? <button type='button' className='movies-card__item_saved'/> :
          <button type='button' className='movies-card__item_save'>Сохранить</button>}

        {/*<button type='button' className='movies-card__item_delete'/>*/}
      </div>
      <div className='movies-card__item'>
        <h3 className='movies-card__item_head'>33 слова о дизайне</h3>
        <p className='movies-card__item_dur'>1ч 17м</p>
      </div>
    </div>
  )
}

export default MoviesCard;
