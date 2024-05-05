import React, {useState} from 'react'
import Header from './header/Header'
import CardMenu from './cardMenu/CardMenu'
import Footer from '../components/footer/Footer'
import '../index.css'
import Category from './btnCategorias/Category'

const Total = () => {
  const [dataValue, setDataValue] = useState('')
   const handleClick = (e)=>{ // Creamos una funcion handleClick y a su vez recibimos los datos de callBack de la prop en el parametro  Osea que estamos recibiendo datos desde el componente hijo <Category/>
    const id = e;
    setDataValue(id)
  }
  return (
    <>
      <Header/>
      <main>
        <div>
          <Category handleClick={handleClick}/> {/* Pasamos como prop la funcion handleClick  y luego recibimos los datos mediante un callback */}
          <CardMenu dataValue={dataValue}/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
export default Total