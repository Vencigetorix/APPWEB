import React, { useState } from "react";
import "./Login.css"
import { tokenLogin } from "../../services/TokenLogin";
//import { protec } from "../../services/Protected";

import {
    Redirect,
    Link
}from "react-router-dom";

import Label from "./Components/Label/Label";
import Input from "./Components/Input/Input";

const Login = () => {

    //estados
    const [ user, setUser] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);
    const [ isLogin, setIsLogin ] = useState(false);
    const [ hasError, setHasError ] = useState(false);

    //funciones
    function handleChange(name, value){
        if(name === 'usuario'){
            setUser(value);//variable para almacenar
            setHasError(false);
        }else{
            if (value.length < 8){
                setPasswordError(true);
                setHasError(false);
            } else {
                setPasswordError(false);
                setPassword(value);
                setHasError(false);
            }
        }
    };

    async function ifMatch( param ){//condiciones
        if(param.user.length > 0 && param.password.length > 0){
            let info={
                "email": param.user,
                "password": param.password
            };
            const token = await tokenLogin(info);
            console.log("tokenY:", token);

            if(token!==2){
                //const id=protec(token)
                const { user , password} = param;
                let ac = { user , password };
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
        }
    }

    function handleSubmit(){
        let account = { user, password }
        if(account){
            ifMatch(account);
        }
    };

    return(
        <div className= "login-container">
            { isLogin ?
            //pagina HOME
                <Redirect to="/Home"></Redirect>
            :
                //pagina LOGIN
                <div className="login-content container-fluid">
                    <div className="title-container">
                        <label className = "title.label">
                            ¡Bienvenido!
                        </label>
                    </div>
                    {hasError &&
                        <label className = 'label-alert'> Su contraseña o usuario son incorrectos,
                            o no existen en nuestra plataforma
                        </label> 
                    }
                    <div className="formulario container-fluid w-75">
                        <div className="dos"><Label text='Correo Electrónico'/></div>
                        <Input
                            attribute={{
                                id: 'usuario',
                                name: 'usuario',
                                type: 'text',
                                placeholder: 'ingrese su correo'
                            }}
                            handleChange={handleChange}
                        />
                        <div className="dos"><Label text='Contraseña'/></div>
                        <Input
                            attribute={{
                                id: 'contraseña',
                                name: 'contraseña',
                                type: 'password',
                                placeholder: 'ingrese su contraseña'
                            }}
                            handleChange={handleChange}
                            param={passwordError}
                        />

                        { passwordError &&
                            <label className="label-error">
                                ( Contraseña incompleta )
                            </label> 
                        }

                        <div className="submit-button-container">
                            <button onClick={ handleSubmit } className='btn submit-button'>
                                Ingresar
                            </button>
                        </div>
                        <div className="my-3">
                            <span className="registro-container">No tienes cuenta? <Link to="/user">Regístrate</Link></span>
                        </div>
                    </div>
                </div>
            
            }
        </div>
    )
};

export default Login;