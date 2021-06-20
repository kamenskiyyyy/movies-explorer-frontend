import './AboutMe.css';
import avatar from '../../../images/photo.jpg';

function AboutMe() {
  return (
    <section id='aboutme' className='aboutMe'>
      <h2 className='aboutMe__head'>Студент</h2>
      <div className='aboutMe__table'>
        <div>
          <h3 className='aboutMe__table_head'>Николай</h3>
          <p className='aboutMe__table_subtitle'>Веб-разработчик, 22 года</p>
          <p className='aboutMe__table_desc'>Я родился и живу в Санкт-Петербурге, закончил педагогический колледж. Я
            люблю играть на фортепиано, петь, а
            ещё увлекаюсь спортом. Недавно начал кодить.
            С 2020 года работаю общеобразовательной школе. После того, как пройду курс по веб-разработке, планирую найти
            новую работу по данной специальности.</p>
          <ul className='aboutMe__table_links'>
            <li>
              <a target='_blank' rel="noreferrer" href='https://vk.com/nikolaivyacheslavovich' className='aboutMe__table_links_item'>Вконтакте</a>
            </li>
            <li>
              <a target='_blank' rel="noreferrer" href='https://github.com/kamenskiyyyy' className='aboutMe__table_links_item'>Github</a>
            </li>
          </ul>
        </div>
        <div>
          <img src={avatar} alt="Фотография студента" className='aboutMe__table_avatar'/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
