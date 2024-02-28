import "./AnimationImages.css"
import Button from "../button/Button"
import { animation } from "../../data"


export default function AnimationImages(props) {
    return(
        <>
        <div className="main-animation">
            <section className="image">
                <img src={props.img} alt="" />
            </section>

            <section className="text">
                <div className="animation_title-section">
                    <div className="tittle_block">
                        <h1 className="animation-title">{props.title}</h1>
                        <p className="animation-under_text">{props.underText}</p>
                    </div>
                    <div className="price_block">
                        <p className="price">{props.price}</p>
                    </div>
                </div>
                <p className="description_text">{props.description}</p>
                <Button>Программа тура</Button>
            </section>
        </div>
        
        </>
    )
}