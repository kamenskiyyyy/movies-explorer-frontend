import './MoviesCard.css';

function MoviesCard({preview, name, duration, saved, lk}) {
  return (
    <>
      {lk ? saved ?
        <div className='movies-card'>
          <div className='movies-card__item'>
            <img className='movies-card__item_img' src={`${preview}`} alt={name}/>
            <button type='button' className='movies-card__item_delete'/>
          </div>
          <div className='movies-card__item'>
            <h3 className='movies-card__item_head'>{name}</h3>
            <p className='movies-card__item_dur'>{duration}</p>
          </div>
        </div>
        : undefined

        : <div className='movies-card'>
          <div className='movies-card__item'>
            <img className='movies-card__item_img' src={`${preview}`} alt={name}/>

            {saved ? <button type='button' className='movies-card__item_saved'/> :
              <button type='button' className='movies-card__item_save'>Сохранить</button>}

          </div>
          <div className='movies-card__item'>
            <h3 className='movies-card__item_head'>{name}</h3>
            <p className='movies-card__item_dur'>{duration}</p>
          </div>
        </div>}
    </>
  )
}

export default MoviesCard;
