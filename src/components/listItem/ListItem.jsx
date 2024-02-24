import { ways } from "../../data";
import "./ListItem.css"

export default function ListItem(props) {
  return (
    <>
      <div className="about_item-section">
        <img src={props.img} alt="" />
        <div className="about_item_text-section">
          <h3 className="about_item-title">{props.title}</h3>
          <p className="about_item-desc">{props.description}</p>
        </div>
      </div>
    </>
  );
}
