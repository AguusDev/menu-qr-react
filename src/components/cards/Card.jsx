import React from 'react'

const Card = ({elemento}) => {
  return (
    <div className='card-item' >
        <div  className='titulo_descripcion-container'>
            <h2 className="titulo-card">{elemento.titulo}</h2>
            <p className="descripcion-card">{elemento.descripcion}</p>
        </div>
        <p className="precio-card">{elemento.precio}</p>
        <br />
    </div>
  )
}

export default Card