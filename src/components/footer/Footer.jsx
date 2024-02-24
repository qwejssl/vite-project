import tg from "./ic_baseline-telegram.png";
import vk from "./entypo-social_vk-with-circle.png";
import pinterest from "./mdi_pinterest.png";
import skype from "./mdi_skype.png";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="inner">
            <div className="about-block">
              <h4 className="footer-title">Компания «РумТибет»</h4>
              <p className="footer-description">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа Hampden-Sydney.
              </p>
              <div className="contact-block">
                <a href="email" className="contact-link">
                  info@domain.com
                </a>
                <a href="tel" className="contact-link">
                  +7 (123) 456-78-90
                </a>
              </div>
              <div className="social-media">
                <a href="#">
                  <img src={tg} alt="" />
                </a>
                <a href="#">
                  <img src={vk} alt="" />
                </a>
                <a href="#">
                  <img src={pinterest} alt="" />
                </a>
                <a href="#">
                  <img src={skype} alt="" />
                </a>
              </div>
            </div>
            <ul className="footer-menu">
              <h4 className="footer-menu-title">Наши услуги</h4>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Прогулки в горы летом
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Зимние походы в горы
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Посещение храмов в горах
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Экстремальные виды туризма
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Походы в джунглях Амазонии
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Поездка в Африку
                </a>
              </li>
            </ul>
            <ul className="footer-menu">
              <h4 className="footer-menu-title">Важно для путешествий</h4>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Как собрать в долгий поход?
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Жизненно важные предметы для похода
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Медицинская страховка, гарантии безопасности
                </a>
              </li>
              <li className="footer-menu_list">
                <a href="#" className="footer-menu_list-item">
                  <span>&gt;</span> Если вы врач - загляните сюда
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="underline-info">
          <div className="container">
            <div className="underline-info-inner">
              <p className="person-info">ИП Константинопольский К.К., 2023</p>
              <a href="#" className="data-policy">Политика обработки персональных данных</a>
            </div>
          </div>
        </div>
    </>
  );
}
