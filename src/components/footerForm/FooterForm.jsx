import Button from "../button/Button"
import Title from "../title/Title"
import "./FooterForm.css"


export default function FooterForm() {
    return(
        <>
        <div className="container">
            <div className="footer_form-section">
                <div className="inner_footer_form-section">
                    <div className="form_title-block">
                        <p className="form_upper-title">актуально</p>
                        <h1 className="form_main-title">Получайте полезные рассылки о путешествиях</h1>
                    </div>
                    <div className="form_main-block">
                        <form>
                            <p id="footer_form">Введите e-mail адрес</p>
                            <input className="footer_form-main" type="email" placeholder="name@domain.com" />
                            <Button>Подписаться на новости</Button>
                            <p className="form_undertext">подписываясь на новости, вы автоматически соглашаетесь с 
                            <a href="#" className="form_conditions"> условиями обработки персональных данных</a> и <a href="#" className="form_conditions">правилами рекламных рассылок</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}