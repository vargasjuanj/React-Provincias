import React, { Component } from 'react'
import {Container,Col,Row,Navbar,Modal,Card,Nav,Form,FormControl,NavDropdown,Button,Table} from 'react-bootstrap'

export default class MenuDeOpciones extends Component {
constructor(props){
    super(props)
    this.state={buscado:undefined}
}
    handleChange=(e)=>{
e.preventDefault()
this.setState({[e.target.name] : e.target.value})
    }

    handleClick=(e)=>{
e.preventDefault()

window.location.href=`/home/${this.state.buscado}`
    }
    render() {
        return (
            <div>
                                 <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/home/conPuerto">Provincias con Puerto</Nav.Link>
      <Nav.Link href="/mapa">Mapa Argentina</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="number" name="buscado" onChange={this.handleChange} type="text" placeholder="Search" className="mr-sm-2" />
      <Button onClick={this.handleClick} variant="outline-info">Buscar</Button>
    </Form>
  </Navbar>
            </div>
        )
    }
}
