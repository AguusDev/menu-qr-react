import React ,{useEffect, useState} from "react"
import { buscarObjetoId } from "../../js/buscarObjetoId";
import './cardMenu.css'
import Card from "../cards/Card";

const CardMenu = ({dataValue})=>{
  const [objeto, setObjeto] = useState([]);

  useEffect( ()=>{
    const objetoEncontrado = buscarObjetoId(dataValue)
    setObjeto( objetoEncontrado)
  },[dataValue])

  return(
    objeto && 
    <>
        <div id='vista-menu'>
          <h2 className='titulo-menu'> {objeto.primaryTitle} </h2>
          <div className="cards-container">
              {
                objeto.content?.map( (elemento) =>{
                  return( <Card elemento={elemento} key={elemento.titulo}/> )
                })
              }
          </div>
        </div> 
      </>
  )
}
  export default CardMenu;