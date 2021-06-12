import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__desc'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bottom'>
        <div><p className='footer__text'>&#169; {new Date().getFullYear()}</p></div>
        <div>
          <ul className='footer__links'>
            <li><a className='footer__text' target='_blank' rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
            <li><a className='footer__text' target='_blank' rel="noreferrer" href="https://github.com/kamenskiyyyy">Github</a></li>
            <li><a className='footer__text' target='_blank' rel="noreferrer" href="https://vk.com/nikolaivyacheslavovich">Вконтакте</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
