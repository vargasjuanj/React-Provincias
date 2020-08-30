import React, { Component } from 'react'

export default class MapaArgentina extends Component {
    render() {
        return (
            <div>
                <h1 className="text-info">Republica Argentina</h1>
                <img src={require('../assets/img/argentina.png')}></img>
            </div>
        )
    }
}
