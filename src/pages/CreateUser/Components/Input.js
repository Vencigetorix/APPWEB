import React from "react";
import {Input as input, Label as label, GrupoInput, LeyendaError, IconoValidacion} from "./../elementos/Formularios";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ComponentInput = ({estado, cambiarEst, tipo, label, placeholder, name, leyError, expRegular, funcion}) => {
    const onChange = (e) => {
        cambiarEst({...estado, campo: e.target.value});
    }

    const validacion = () =>{
        if(expRegular){//si tenemos una expresión regular
            if(expRegular.test(estado.campo)){// comprobamos lo que está escrito en el input con la expresión regular
                cambiarEst({...estado, valido: 'true'});
            }else{
                cambiarEst({...estado, valido: 'false'});
            }
        }
        if(funcion){
            funcion();
        }
    }

    return ( 
        <div>
          <label htmlFor={name} valido={estado.valido}>{label}</label>
          <div>
            <input className="GrupoInput"
                type={tipo} 
                placeholder={placeholder}
                id={name}
                value={estado.campo}
                onChange={onChange} //cuando hay un cambio en el input
                onKeyUp={validacion}//cuando dejamos de presionar una tecla
                onBlur={validacion}//cuando damos click fuera del input
                valido={estado.valido}
            />
            <IconoValidacion 
                icon={estado.valido === "true" ? faCheckCircle : faTimesCircle} 
                valido={estado.valido}
            />
          </div>
          <LeyendaError valido={estado.valido}>{leyError}</LeyendaError>
        </div>
     );
}
 
export default ComponentInput;