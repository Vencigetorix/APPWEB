
//import { useEffect, useState } from 'react';
import './App.css';

import Login from './pages/Login/LoginIndex';
import Home from './pages/Home/Inicio';
//import Registro from './pages/CreateUser/Registro';
import Registro2 from './pages/CreateUser2/Registro';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

function App() {

  /*const obtenerDatos = async () => {
    let info={
      "name":"Emma",
      "lastName":"Rosas",
      "email":"ematest@gmail.com",
      "password":"Test1234##"
    }
    try{
      const data = await fetch("https://magic-poems.herokuapp.com/singUp",{
        method:'POST',
        cache: 'default',
        headers:{
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(info)
        }).then(response => response.json())
          .then(json => console.log(json))
        //const response = await data.json()
      return data
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    obtenerDatos()
  }, [])*/

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <div className="App">
            <Home/>
          </div>
        </Route>
        <Route path="/user">
          <div className="App">
            <Registro2/>
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <Login/>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
