import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__head'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__links_item'>
          <a target='_blank' rel="noreferrer" href="https://github.com/kamenskiyyyy/how-to-learn">Статичный сайт</a>
          <img src={arrow} alt="Стрелка"/>
        </li>
        <li className='portfolio__links_item'>
          <a target='_blank' rel="noreferrer" href="https://github.com/kamenskiyyyy/russian-travel">Адаптивный сайт</a>
          <img src={arrow} alt="Стрелка"/></li>
        <li className='portfolio__links_item'>
          <a target='_blank' rel="noreferrer" href="https://github.com/kamenskiyyyy/react-mesto-api-full">Одностраничное
            приложение</a>
          <img src={arrow} alt="Стрелка"/></li>
      </ul>
    </section>
  )
}

export default Portfolio;
