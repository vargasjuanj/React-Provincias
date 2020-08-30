import React, { Component } from 'react'

export default class Provincia extends Component {
constructor(props){
    super(props)
this.state={}
    
}

    render() {
let {element,abreviatura}= this.props
let {provincia,bandera,capital} = element
        return (
<div className="card text-center">

        <div className="col text-success font-weight-bold border-bottom border-success">{provincia}</div>
<div className="col border-bottom border-dark"><img src={require(`../assets/img/${bandera}`)}></img></div>
<div className="col border-bottom border-dark">{capital}</div>
<div className="col"><a className="btn"href={`/detalle/${abreviatura}`}> Ver Más</a></div>
</div>

        )
    }
}
/*
Con esto la linea verde queda como una, por eso no le puse row
<!-- <div className="row  "> -->
</div>

*/