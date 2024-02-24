import Title from "../title/Title";
import Button from "../button/Button";
import "./SecondScreen.css";
import ListItem from "../listItem/ListItem";
import { ways } from "../../data";

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

            <div className="second_section"></div>
          </div>
        </div>
      </div>
    </>
  );
}
