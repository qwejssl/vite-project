import "./FifthScreen.css"
import img1 from "../../images/pinterest-img1.svg"
import img2 from "../../images/pinterest-img2.svg"
import img3 from "../../images/pinterest-img3.svg"
import img4 from "../../images/pinterest-img4.svg"
import img5 from "../../images/pinterest-img5.svg"
import img6 from "../../images/pinterest-img6.svg"
import Title from "../title/Title"
import Button from "../button/Button"



export default function FifthScreen() {
    return(
        <>
        <div className="pinterest-section">
            <div className="container">
                <div className="inner_pinterest-section">
                    <Title text="фото-отчет" style="center">Делимся впечатлениями</Title>
                    <div className="pinterest_img-block">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                        <img src={img6} alt="" />
                    </div>
                    <Button text="center">Наш pinterest</Button>
                </div>
            </div>
        </div>
        </>
    )
}