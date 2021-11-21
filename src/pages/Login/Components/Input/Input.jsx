import React from "react";
import "./Input.css";

const Input = ({ attribute, handleChange, param}) => {
    return(
        <div className="input-container">
            <input
            id={attribute.id}
            name={attribute.name}//accesibilidad
            placeholder={attribute.placeholder}//texto indicativo del campo
            type={attribute.type}//tipo de dato a ingresar(password)
            onChange={ (e) => handleChange(e.target.name, e.target.value)}//manejador de eventon(handleChange)
            className={ param ? 'input-error' : 'regular-style'}
            //className= si el estado de error es true mostrar inpu-error y regular-sty en el caso contrario  
            /> 
        </div>
    )
};

export default Input;