import React from "react";
import { Link } from "react-router-dom";
import "./Registro.css" 

function Registro() {
    return (
        <div className="reg-container">
            <div className="reg-content">
                <div className="titulo mb-3">
                    <h1>Registro</h1>
                </div>
                
                
                <form className="needs-validation">
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label for="fistName" className="form-label">Nombre</label>
                            <input type="text" className="form-control rounded-0" id="firstName" placeholder="Nombre" required></input>
                            <div className="invalid-feedback"> Se requiere un nombre valido </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="lastName" className="form-label">Apellido</label>
                            <input type="text" className="form-control rounded-0" id="lastName" placeholder="Apellido" required></input>
                            <div className="invalid-feedback"> Se requiere un apellido valido </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="userName" className="form-label">Usuario</label>
                            <input type="text" className="form-control rounded-0" id="userName" placeholder="Nombre de Usuario" required></input>
                            <div className="invalid-feedback"> Se requiere un usuario valido </div>
                        </div>
                        <div className="col-sm-6">
                            <label for="password" className="form-label">Contraseña</label>
                            <input type="text" className="form-control rounded-0" id="userName" placeholder="Contraseña" required></input>
                            <div className="invalid-feedback"> Se requiere una contraseña valida </div>
                        </div>
                        <div className="col-12">
                            <label for="e-mail" className="form-label">Correo Electrónico</label>
                            <input type="text" className="form-control rounded-0" id="e-mail" placeholder="correo@ejemplo.com" required></input>
                            <div className="invalid-feedback"> Por favor introduzca su dirección de correo electrónico </div>
                        </div>
                        <div className="button-container">
                            <Link to="/" className="btn btn-primary btn-lg btn-block w-100 mt-5 rounded-0 bg-black border-0" type="submit">Registrarse</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registro
