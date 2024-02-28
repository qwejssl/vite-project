import logo from "../../images/logo.png";
import bg from "./bg.jpg";
import "./MainScreen.css";
import Button from "../button/Button";

export default function HeaderScreen() {
  return (
    <>
      <div className="main_screen">
        <div className="container">
          <header className="header">
            <a href="#" className="logo">
              <img src={logo} alt="" className="logo-img" />
            </a>

            <div className="menu">
              <ul className="menu_list">
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Главная
                  </a>
                </li>
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Про гида
                  </a>
                </li>
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Программа тура
                  </a>
                </li>
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Стоимость
                  </a>
                </li>
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Блог
                  </a>
                </li>
                <li className="menu_list-item">
                  <a className="item-link" href="#">
                    Контакты
                  </a>
                </li>
              </ul>
              <Button>Консультация</Button>
            </div>
          </header>

          <h2 className="main_menu-title">
            Насладись прогулкой в горах с командой единомышленников
          </h2>

          <div className="form-section">
            <form className="form">
              <select className="form-item" id="location">
                <option value="default">Локация для тура</option>
                <option value="UK">Великобритания</option>
                <option value="RU">Россия</option>
                <option value="US">США</option>
              </select>

              <input className="form-item" type="date" id="date" />
             

              <select className="form-item" id="participate">
                <option value="default">Участники</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
              
              <Button text="white">Найти программу</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
