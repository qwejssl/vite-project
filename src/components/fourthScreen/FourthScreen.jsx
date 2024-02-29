import Title from "../title/Title"
import "./FourthScreen.css"
import { travels } from "../../data"
import TravelList from "../travelList/TravelList"
import Button from "../button/Button"
 

export default function FourthScreen() {
    return(
        <>
        <div className="travel_opportunity-section">
            <div className="container">
                <div className="inner_travel-section">
                    <Title text={"делимся впечатлениями"} style={"center"}>Блог о путешествиях</Title>

                    <ul className="travel_opportunity-block">
                        {travels.map(el => (
                            <TravelList {...el} />
                        ))}
                    </ul>

                    <Button text="center">Другие материалы</Button>
                </div>
            </div>
        </div>
        </>
    )
}