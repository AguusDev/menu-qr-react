import React from 'react'
import { buttons } from "../../js/selectButton";

const Category = ({handleClick}) => { // Recibimos la funcion como parametro

  return (
    <>
        <p className='categorias-navs'> ← categorias → </p>
          <div id='patro-container' className='patrocinios-container'>
            {
              buttons.map( (btn)=>{
                return(
                  <button
                    className='patrocinios-item'
                    onClick={ (e)=> { // Creamos un evento click con un callBack que recibe como parametro el elemento HTML
                        handleClick(e.target.id)// Guardamos en el prop handleClick el id del elemento HTML
                    }} 
                    id={btn.id} 
                    key={btn.id}
                    >
                    {btn.title}
                  </button>
                )
              })
            }
          </div>
    </>
  )
}

export default Category