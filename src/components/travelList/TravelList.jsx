import "./TravelList.css"
import { travels } from "../../data"


export default function TravelList(props) {
    return(
        <>
        <div className="travel_list">
            <div className="travel_list-item">
                <img src={props.img} alt="" />
                <div className="travel_item-info">
                    <a href="#" className="travel_item-title">{props.title}</a>
                    <p className="travel_item-desc">{props.description}</p>
                    <div className="travel_item-undertext">
                        <p className="travel_item-date">{props.date}</p>
                        <a href="#" className="travel_item-readmore">читать статью</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}