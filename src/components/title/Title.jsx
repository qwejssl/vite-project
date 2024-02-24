import './Title.css'


export default function Title({children, text, style}) {
    return(
        <>
        <div className="title_section" id={style}>
            <p className="upper_text" id={style}>{ text }</p>
            <h1 className="title" id={style}>{ children }</h1>
        </div>
        </>
    )
}