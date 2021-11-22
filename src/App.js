
import './App.css';

import Login from './pages/LoginIndex';
import Home from './pages/Inicio';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Registro2 from './pages/Registro';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/user" component={Registro2}/>
          <Route path="/" component={Login}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
