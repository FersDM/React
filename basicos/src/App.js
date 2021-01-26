import React, { Fragment, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
function App() {
  //crear listado de productos
  const [productos, setProducto] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa Core ', precio: 20 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 10 },
    { id: 4, nombre: 'Camisa Angular', precio: 30 },
    { id: 5, nombre: 'Camisa Firebase', precio: 50 },
  ]) //inicializa el arreglo

  //State para un carrito de compras
  const [carrito, setCarrito] = useState([])

  //obtener fecha actula
  const fecha = new Date().getFullYear()
  return (
    <Fragment>
      <Header titulo="Tienda virtual" />
      <h1>Lista de Productos</h1>
      {productos.map(p => {
        return (
          <Producto
            productos={productos}
            key={p.id}
            producto={p}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        )
      })}
      <Carrito carrito={carrito} setCarrito={setCarrito} />
      <Footer fecha={fecha} />
    </Fragment>
  )
}

export default App
