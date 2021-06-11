import './Techs.css';
import NavTab from "../NavTab/NavTab";

function Techs() {
  return (
    <section id='techs' className='techs'>
      <h2 className='techs__head'>Технологии</h2>
      <h3 className='techs__head_h3'>7 технологий</h3>
      <p className='techs__head_desc'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном
        проекте.</p>
      <div className='navTab'>
        <NavTab to='#' name='HTML' size='l'/>
        <NavTab to='#' name='CSS' size='l'/>
        <NavTab to='#' name='JS' size='l'/>
        <NavTab to='#' name='React' size='l'/>
        <NavTab to='#' name='Git' size='l'/>
        <NavTab to='#' name='Express.js' size='l'/>
        <NavTab to='#' name='mongoDB' size='l'/>
      </div>
    </section>
  )
}

export default Techs;
