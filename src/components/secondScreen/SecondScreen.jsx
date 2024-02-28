import Title from "../title/Title";
import Button from "../button/Button";
import "./SecondScreen.css";
import ListItem from "../listItem/ListItem";
import { ways } from "../../data";
import img1 from "../../images/secondScreenImg1.svg"
import img2 from "../../images/secondScreenImg2.svg"
import img3 from "../../images/secondScreenImg3.svg"
import img4 from "../../images/secondScreenImg4.svg"





export default function SecondScreen() {
  return (
    <>
      <div className="second_screen">
        <div className="container">
          <div className="inner_second-screen">
            <div className="first_section">
              <Title text="наше предложение">Лучшие программы для тебя</Title>
              <p className="main_screen-description">
                Его корни уходят в один фрагмент классической латыни 45 года
                н.э., то есть более двух тысячелетий назад. Ричард МакКлинток,
                профессор латыни из колледжа.
              </p>

              
              {ways.map(way => (
                  <ListItem {...way} />
              ))}
              
              <Button>Стоимость программ</Button>
            </div>

            <div className="second_section">
              <img className="second_section-img" src={img1} alt="" />
              <img className="second_section-img" src={img2} alt="" />
              <img className="second_section-img" src={img3} alt="" />
              <img className="second_section-img" src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
