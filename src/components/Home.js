import React, { Component } from 'react'
import datos from '../assets/json/lista_provincias.json'
import Provincia from './Provincia'

export default class Home extends Component {
constructor(props){
    super(props)
    this.state={datos}
}
    render() {
        let param = this.props.match.params.param
        let datos=undefined
let aux= Number(param)
        if(param == undefined){
            datos=this.state.datos
        }
        else if(param === 'conPuerto'){
            datos= this.state.datos.filter(element=>element.tienePuerto==='Y')
        }else if(!isNaN(aux)) {
    
             datos = this.state.datos.filter(element=>{
                 let poblacion = element.poblacion
                 poblacion=Number(poblacion)
                 if(poblacion>=aux){
                     return element
                 }
             })
             console.log(datos)
        }
     
        return (
         <div>
    <p style={{fontFamily:'verdana',fontSize:'18px',fontWeight:'bold', color:'green'}}>Provincias de la Republica Argentina</p>
             <table className="table table-bordered ">
  <tbody>
    <tr className="row">
        {datos.map((element)=>{

            return (
          <td key={element.abreviatura} className="col-3"><Provincia element={element} abreviatura={element.abreviatura} ></Provincia></td>

            )
        })}
    </tr>
  </tbody>
</table>
         </div>
        )
    }
}
