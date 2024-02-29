import "./ThirdScreen.css"
import Title from "../title/Title";
import Button from "../button/Button";
import AnimationImages from "../animationImages/AnimationImages";
import { animation } from "../../data";



export default function ThirdScreen() {
    return(
        <>
        <div className="thirdScreen-section">
            <div className="container">
                <Title style={"center"} text={"Популярные направления"}>Популярные направления</Title>
                
                
                <div className="travel-section">
                    {animation.map(el => (
                        <AnimationImages {...el} />
                    ))}
                </div>


                <Button text="center">Рейтинг направлений</Button>
            </div>
        </div>
        
        
        </>
    )
}