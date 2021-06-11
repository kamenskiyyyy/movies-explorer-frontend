import './Promo.css';
import NavTab from "../NavTab/NavTab";

function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__head'>Учебный проект студента факультета Веб-разработки.</h1>
      <div className='navTab'>
        <NavTab to='/#aboutproject' name='О проекте'/>
        <NavTab to='/#techs' name='Технологии'/>
        <NavTab to='/#aboutme' name='Студент'/>
      </div>
    </section>
  )
}

export default Promo;
