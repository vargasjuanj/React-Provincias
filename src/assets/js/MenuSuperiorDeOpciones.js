import React, { Component } from 'react'
import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'
import '../assets/css/estilos.css'
export default class MenuSuperiorDeOpciones extends Component {

  constructor (props){
    super(props)
    this.state={}
  }
    render() {
        return (
            <div>
        <button className="btn btn-success" onClick={this.props.mostrar}>{this.props.msg}</button>         
            </div>         
        )
    }
}
