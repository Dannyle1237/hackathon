const Button = ({text, onClick}) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
}

Button.defaultProps ={
    text: "This is a button",
    onClick: () =>{console.log("clicked")}
}

export default Button
