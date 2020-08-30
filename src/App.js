import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home';
import DetalleProvincia from './components/DetalleProvincia';
import MapaArgentina from './components/MapaArgentina';
import MenuDeOpciones from './components/MenuDeOpciones';
import Provincia from './components/Provincia';


//import {Link} from 'react-router-dom' //El link es para que no recargue la pagina
// <Link to="#">link</Link>
//import './App.css'
//import logo from './logo.svg'
//import data from '../assets/json/lista_provincias.json'
//import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'


/*
    constructor (props){
       super(props)
       this.state={}
       console.log(this.state)
   }

 */

//Si o si hay que repetir a home en la ruta para que por defecto tome primero a home (/) sin parametros y despues con parametros, al final se pone cuando hay una ruta que no se conoce , el notfound se usa

export default class App extends React.Component {

  mostrarMensaje=()=>{
    alert('hola')
  }

  render(){
  return (


    <div className="App">
      <MenuDeOpciones></MenuDeOpciones>
     <BrowserRouter>
<Switch>
<Route exact path="/" component={Home}></Route>
  <Route exact path="/home/:param" component={Home}></Route>
  <Route exact path="/detalle/:abrev" component={DetalleProvincia}></Route>
  <Route exact path="/mapa" component={MapaArgentina}></Route>
  <Route exact path="/provincia" component={Provincia}></Route>
</Switch>
</BrowserRouter>
    </div>
  );
  }
}
//<MenuSuperiorDeOpciones msg="Mostrar Mensaje" mostrar={this.mostrarMensaje} ></MenuSuperiorDeOpciones>


