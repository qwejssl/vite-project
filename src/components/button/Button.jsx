import "./Button.css"

export default function Button({ text, children, position }) {
    function handleClick() {
        alert(1);
    }




    return(
        <>
        <button className="button" id={text} onClick={handleClick}>{children}</button>
        </>
    )
}