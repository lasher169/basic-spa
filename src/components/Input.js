import React from "react";
import './Input.css';


const Input = ( {max, min, type, pattern, title, styling, name, inputStyling} ) => {
    return (
        <div className={styling}>
            <label for={name}>{title}</label>
            <input className={inputStyling} type={type} pattern={pattern} min={min} max={max} />
        </div>
    )
}

export default Input;