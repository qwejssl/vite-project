import "./Button.css"

export default function Button({ text, children, position }) {
    function handleClick() {
        alert("Click")
    }

    return(
        <>
        <button className="button" id={text} onClick={handleClick}>{children}</button>
        </>
    )
}