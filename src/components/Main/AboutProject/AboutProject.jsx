import './AboutProject.css';

function AboutProject() {
  return (
    <section id='aboutproject' className='aboutP'>
      <h2 className='aboutP__head'>О проекте</h2>
      <div className='aboutP__table'>
        <div>
          <h3 className='aboutP__table_head'>Дипломный проект включал 5 этапов</h3>
          <p className='aboutP__table_desc'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.</p>
        </div>
        <div>
          <h3 className='aboutP__table_head'>На выполнение диплома ушло 5 недель</h3>
          <p className='aboutP__table_desc'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='aboutP__line'>
        <div className='aboutP__line_item'>
          <p id='one' className='aboutP__line_item_head'>1 неделя</p>
          <p className='aboutP__line_item_desc'>Back-end</p>
        </div>
        <div className='aboutP__line_item'>
          <p id='two' className='aboutP__line_item_head'>4 недели</p>
          <p className='aboutP__line_item_desc'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
