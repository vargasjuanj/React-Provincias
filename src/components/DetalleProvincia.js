import React, { Component } from 'react'
import datos from '../assets/json/lista_provincias.json'
export default class DetalleProvincia extends Component {
    constructor(props) {
        super(props)

        this.state = { datos }
    }
    volver = () => {
        window.history.back()
    }
    render() {
        let abrev = this.props.match.params.abrev
        let element = this.state.datos.find((element) => element.abreviatura === abrev)
        let { provincia, abreviatura,
            capital,
            fechaAutonomia,
            poblacion,
            superficie,
            nroDepartamentos,
            tienePuerto,
            bandera
        } = element

        return (
            <div className="card mx-auto mt-5" style={{ width: '30%' }}>
                <div className="row">
                    <div className="col">
                        <p>Provincia</p>
                        <p>Abreviatura</p>
                        <p>Capital</p>
                        <p>Fecha Autonomia</p>
                        <p>Poblacion</p>
                        <p>Superficie</p>
                        <p>Nro Departamentos</p>
                        <p>Tiene Puertos</p>

                    </div>
                    <div className="col">

                        <p>{provincia}</p>
                        <p>{abreviatura}</p>
                        <p>{capital}</p>
                        <p>{fechaAutonomia}</p>
                        <p>{poblacion}</p>
                        <p>{superficie}</p>
                        <p>{nroDepartamentos}</p>
                        <p>{tienePuerto}</p>
                    </div>
                </div>
                <div className="row">

                    <div className="col">
                        <p>Bandera</p>
                    </div>
                    <div className="col">
                        <p><img src={require(`../assets/img/${bandera}`)}></img></p>

                    </div>

                </div>
                <button className="btn btn-outline-success btn-block" onClick={this.volver}>Volver</button>

            </div>
        )
    }
}
