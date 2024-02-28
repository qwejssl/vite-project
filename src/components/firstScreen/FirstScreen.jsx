import Title from "../title/Title";
import Button from "../button/Button";
import "./FirstScreen.css"
import img1 from "../../images/first-img.svg"
import img2 from "../../images/second-img.svg"


export default function FirstScreen() {
    return(
        <>
        <div className="container">
            <div className="first_screen-section">
                <div className="first_section">
                    <img className="first-img" src={img1} alt="" />
                    <img className="second-img" src={img2} alt="" />
                </div>

                <div className="second_section">
                    <Title text="о нашем походе">Исследуйте все горные массивы мира вместе с нами</Title>
                    <p className="main_screen-description">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
                    <Button>Программа тура</Button>
                </div>
            </div>

            


            
        </div>
        
        </>
    )
}