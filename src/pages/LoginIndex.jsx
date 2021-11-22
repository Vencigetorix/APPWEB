import React, { useState } from "react";
import { tokenLogin } from "../services/TokenLogin";
//import { protec } from "../../services/Protected";

import {
    Redirect,
    Link
}from "react-router-dom";

import Label from "../services/Label_login";
import Input from "../services/Input_login";

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

            if(token!==false){
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
                <div className="login-content">
                        <h1>¡Bienvenido a Poemas.Net!</h1>
                    {hasError &&
                        <label className = 'label-alert'> Su contraseña o usuario son incorrectos,
                            o no existen en nuestra plataforma
                        </label> 
                    }
                    <div className="formulario container-fluid w-75">
                        <Label text='Correo Electrónico'/>
                        <Input
                            attribute={{
                                id: 'usuario',
                                name: 'usuario',
                                type: 'text',
                                placeholder: 'ingrese su correo'
                            }}
                            handleChange={handleChange}
                        />
                        <Label text='Contraseña'/>
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
                            <label className="label-alert">
                                ( Contraseña incompleta )
                            </label> 
                        }

                        <div className="submit-button-container">
                            <button onClick={ handleSubmit }>
                                Ingresar
                            </button>
                        </div>
                        <div className="my-3">
                            <span className="alert-gray">No tienes cuenta? <Link to="/user">Regístrate</Link></span>
                        </div>
                    </div>
                </div>
            
            }
        </div>
    )
};

export default Login;